/**
 * =====================================================================
 * YF JAVASCRIPT FRAMEWORK
 * Lightweight JavaScript utility and object-oriented component framework.
 * =====================================================================
 */

/**
 * =====================================================================
 * 1. YF CORE & UTILITIES
 * Selector engine, DOM manipulation, events, and DOM-ready helper.
 * =====================================================================
 */
class YF {
  constructor(selector) {
    if (typeof selector === "string") {
      this.elements = Array.from(document.querySelectorAll(selector));
    } else if (
      selector instanceof HTMLElement ||
      selector === window ||
      selector === document
    ) {
      this.elements = [selector];
    } else if (selector instanceof NodeList || Array.isArray(selector)) {
      this.elements = Array.from(selector);
    } else {
      this.elements = [];
    }
  }

  /**
   * Loop through selected elements.
   */
  each(callback) {
    this.elements.forEach((element, index) => {
      callback.call(element, element, index);
    });

    return this;
  }

  /**
   * Add CSS class.
   */
  addClass(className) {
    return this.each((element) => {
      element.classList.add(className);
    });
  }

  /**
   * Remove CSS class.
   */
  removeClass(className) {
    return this.each((element) => {
      element.classList.remove(className);
    });
  }

  /**
   * Toggle CSS class.
   */
  toggleClass(className) {
    return this.each((element) => {
      element.classList.toggle(className);
    });
  }

  /**
   * Check if first element has class.
   */
  hasClass(className) {
    return this.elements[0]
      ? this.elements[0].classList.contains(className)
      : false;
  }

  /**
   * Show elements.
   */
  show() {
    return this.each((element) => {
      element.style.display = "";
    });
  }

  /**
   * Hide elements.
   */
  hide() {
    return this.each((element) => {
      element.style.display = "none";
    });
  }

  /**
   * Toggle element visibility.
   */
  toggle() {
    return this.each((element) => {
      const hidden = window.getComputedStyle(element).display === "none";
      element.style.display = hidden ? "" : "none";
    });
  }

  /**
   * Attach event listener.
   */
  on(event, callback) {
    return this.each((element) => {
      element.addEventListener(event, callback);
    });
  }

  /**
   * Remove event listener.
   */
  off(event, callback) {
    return this.each((element) => {
      element.removeEventListener(event, callback);
    });
  }

  /**
   * Get or set HTML.
   */
  html(value) {
    if (value === undefined) {
      return this.elements[0]?.innerHTML;
    }

    return this.each((element) => {
      element.innerHTML = value;
    });
  }

  /**
   * Get or set text.
   */
  text(value) {
    if (value === undefined) {
      return this.elements[0]?.textContent;
    }

    return this.each((element) => {
      element.textContent = value;
    });
  }

  /**
   * Get or set input value.
   */
  val(value) {
    if (value === undefined) {
      return this.elements[0]?.value;
    }

    return this.each((element) => {
      element.value = value;
    });
  }

  /**
   * Get or set attribute.
   */
  attr(name, value) {
    if (value === undefined) {
      return this.elements[0]?.getAttribute(name);
    }

    return this.each((element) => {
      element.setAttribute(name, value);
    });
  }

  /**
   * Remove attribute.
   */
  removeAttr(name) {
    return this.each((element) => {
      element.removeAttribute(name);
    });
  }

  /**
   * Get first matched element.
   */
  first() {
    return this.elements[0] || null;
  }

  /**
   * Return number of matched elements.
   */
  count() {
    return this.elements.length;
  }
}

/**
 * Main YF selector function.
 */
function yf(selector) {
  return new YF(selector);
}

/**
 * Run callback when DOM is ready.
 */
function yf_ready(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

/**
 * =====================================================================
 * 2. YF TOAST COMPONENT
 * Object-oriented toast notification component using yf selector engine.
 * =====================================================================
 */
class YFToast {
  static defaults = {
    title: "",
    message: "",
    type: "info",
    duration: 4000,
  };

  static initialized = false; // Prevents duplicate global event binding

  static show(options = {}) {
    const settings = {
      ...YFToast.defaults,
      ...options,
    };

    let container = yf(".yf-toast-container").first();
    if (!container) {
      container = document.createElement("div");
      container.className = "yf-toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `yf-toast yf-toast-${settings.type}`;

    toast.innerHTML = `
      <div style="flex: 1;">
        ${settings.title ? `<p class="yf-toast-title">${settings.title}</p>` : ""}
        <p class="yf-toast-message">${settings.message}</p>
      </div>
      <button class="yf-toast-close" aria-label="Close">&times;</button>
    `;

    const closeBtn = toast.querySelector(".yf-toast-close");
    yf(closeBtn).on("click", () => {
      YFToast.dismiss(toast);
    });

    container.appendChild(toast);

    if (settings.duration > 0) {
      setTimeout(() => {
        YFToast.dismiss(toast);
      }, settings.duration);
    }

    return toast;
  }

  static success(message, title = "Success!", options = {}) {
    return this.show({ ...options, title, message, type: "success" });
  }

  static warning(message, title = "Warning!", options = {}) {
    return this.show({ ...options, title, message, type: "warning" });
  }

  static danger(message, title = "Error!", options = {}) {
    return this.show({ ...options, title, message, type: "danger" });
  }

  static info(message, title = "Info", options = {}) {
    return this.show({ ...options, title, message, type: "info" });
  }

  static dismiss(toast) {
    if (!toast || toast.classList.contains("is-removing")) {
      return;
    }

    toast.classList.add("is-removing");

    setTimeout(() => {
      toast.remove();

      const container = yf(".yf-toast-container").first();
      if (container && container.children.length === 0) {
        container.remove();
      }
    }, 250);
  }

  static init() {
    if (YFToast.initialized) return;
    YFToast.initialized = true;

    yf(document).on("click", (e) => {
      const trigger = e.target.closest("[data-yf-toast]");
      if (!trigger) return;

      try {
        const config = JSON.parse(trigger.getAttribute("data-yf-toast"));
        YFToast.show(config);
      } catch (err) {
        console.error(
          "YFToast: Invalid JSON configuration in data-yf-toast attribute.",
          err,
        );
      }
    });
  }
}

/**
 * =====================================================================
 * 3. YF SIDEBAR COMPONENT
 * Object-oriented sliding sidebar navigation controller using yf.
 * =====================================================================
 */
class YFSidebar {
  static defaults = {
    closeOnOverlayClick: true,
  };

  static instances = new WeakMap();

  constructor(container, options = {}) {
    const target =
      typeof container === "string" ? yf(container).first() : container;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const existingInstance = YFSidebar.instances.get(target);
    if (existingInstance) {
      existingInstance.update(options);
      return existingInstance;
    }

    this.sidebar = target;
    this.options = {
      ...YFSidebar.defaults,
      ...options,
    };

    this.init();
    YFSidebar.instances.set(this.sidebar, this);
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    const closeBtn = this.sidebar.querySelector(".yf-sidebar-close");
    if (closeBtn) {
      yf(closeBtn).on("click", () => this.close());
    }

    const sidebarId = this.sidebar.id;
    if (sidebarId) {
      yf(`[data-yf-target="#${sidebarId}"]`).on("click", (event) => {
        event.preventDefault();
        this.toggle();
      });
    }

    const overlay = yf(".yf-sidebar-overlay").first();
    if (overlay && this.options.closeOnOverlayClick) {
      yf(overlay).on("click", () => this.close());
    }
  }

  open() {
    yf(this.sidebar).addClass("is-open");
    yf(".yf-sidebar-overlay").addClass("is-visible");
  }

  close() {
    yf(this.sidebar).removeClass("is-open");
    yf(".yf-sidebar-overlay").removeClass("is-visible");
  }

  toggle() {
    if (yf(this.sidebar).hasClass("is-open")) {
      this.close();
    } else {
      this.open();
    }
  }

  update(options = {}) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  static initAll(options = {}) {
    yf(".yf-sidebar").each((container) => {
      new YFSidebar(container, options);
    });
  }
}

/**
 * =====================================================================
 * 4. YF MODAL COMPONENT
 * Object-oriented popup dialog manager using yf.
 * =====================================================================
 */
class YFModal {
  static defaults = {
    closeOnBackdrop: true,
    closeOnEsc: true,
  };

  static instances = new WeakMap();
  static escListenerAttached = false;

  constructor(container, options = {}) {
    const target =
      typeof container === "string" ? yf(container).first() : container;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const existingInstance = YFModal.instances.get(target);
    if (existingInstance) {
      existingInstance.update(options);
      return existingInstance;
    }

    this.modal = target;
    this.options = {
      ...YFModal.defaults,
      ...options,
    };

    this.init();
    YFModal.instances.set(this.modal, this);
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    yf(this.modal)
      .elements[0]?.querySelectorAll(".yf-modal-close")
      .forEach((btn) => {
        yf(btn).on("click", (e) => {
          e.preventDefault();
          this.close();
        });
      });

    const backdrop = yf(this.modal).elements[0]?.querySelector(
      ".yf-modal-backdrop",
    );
    if (backdrop && this.options.closeOnBackdrop) {
      yf(backdrop).on("click", (e) => {
        e.preventDefault();
        this.close();
      });
    }

    const modalId = this.modal.id;
    if (modalId) {
      yf(`[data-yf-target="#${modalId}"], a[href="#${modalId}"]`).on(
        "click",
        (e) => {
          e.preventDefault();
          this.open();
        },
      );
    }

    if (this.options.closeOnEsc && !YFModal.escListenerAttached) {
      YFModal.escListenerAttached = true;
      yf(document).on("keydown", (e) => {
        if (e.key === "Escape") {
          yf(".yf-modal").each((modalEl) => {
            const instance = YFModal.instances.get(modalEl);
            if (instance && instance.isOpen()) {
              instance.close();
            }
          });
        }
      });
    }
  }

  open() {
    yf(this.modal).each((el) => {
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.style.pointerEvents = "auto";
    });
    document.body.style.overflow = "hidden";
  }

  close() {
    yf(this.modal).each((el) => {
      el.style.opacity = "0";
      el.style.visibility = "hidden";
      el.style.pointerEvents = "none";
    });
    document.body.style.overflow = "";

    if (window.location.hash === `#${this.modal.id}`) {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search,
      );
    }
  }

  isOpen() {
    return window.getComputedStyle(this.modal).visibility === "visible";
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  update(options = {}) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  static initAll(options = {}) {
    yf(".yf-modal").each((container) => {
      new YFModal(container, options);
    });
  }
}

/**
 * =====================================================================
 * 5. YF ACCORDION COMPONENT
 * Object-oriented collapsible accordion component using yf.
 * =====================================================================
 */
class YFAccordion {
  static defaults = {
    showFirst: false,
  };

  static instances = new WeakMap();

  constructor(container, options = {}) {
    const target =
      typeof container === "string" ? yf(container).first() : container;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const existingInstance = YFAccordion.instances.get(target);
    if (existingInstance) {
      existingInstance.update(options);
      return existingInstance;
    }

    this.container = target;
    this.options = {
      ...YFAccordion.defaults,
      ...options,
    };

    this.accordions = this.container.querySelectorAll(".yf-accordion");
    this.init();
    YFAccordion.instances.set(this.container, this);
  }

  init() {
    this.bindEvents();
    this.reset();

    if (this.options.showFirst) {
      this.openFirst();
    }
  }

  bindEvents() {
    yf(this.accordions).each((accordion) => {
      yf(accordion).on("click", this.handleClick.bind(this));
    });
  }

  handleClick(event) {
    const accordion = event.currentTarget;
    const panel = accordion.nextElementSibling;

    if (!panel) {
      return;
    }

    yf(accordion).toggleClass("active");

    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : `${panel.scrollHeight}px`;
  }

  open(accordion) {
    if (!accordion) {
      return;
    }

    const panel = accordion.nextElementSibling;
    yf(accordion).addClass("active");

    if (panel) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  }

  close(accordion) {
    if (!accordion) {
      return;
    }

    const panel = accordion.nextElementSibling;
    yf(accordion).removeClass("active");

    if (panel) {
      panel.style.maxHeight = null;
    }
  }

  openFirst() {
    if (this.accordions.length > 0) {
      this.open(this.accordions[0]);
    }
  }

  reset() {
    yf(this.accordions).each((accordion) => {
      this.close(accordion);
    });
  }

  update(options = {}) {
    this.options = {
      ...this.options,
      ...options,
    };

    this.reset();

    if (this.options.showFirst) {
      this.openFirst();
    }
  }

  static initAll(options = {}) {
    yf(".yf-accordion-group").each((container) => {
      new YFAccordion(container, options);
    });
  }
}

/**
 * =====================================================================
 * AUTO-INITIALIZATION ON DOM READY
 * Guaranteed safe execution regardless of script placement tag.
 * =====================================================================
 */
yf_ready(() => {
  YFSidebar.initAll();
  YFModal.initAll();
  YFAccordion.initAll();
  YFToast.init();
});
