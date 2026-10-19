# YF Framework

A lightweight, high-performance, modular UI framework built from scratch with **clean CSS** and **object-oriented JavaScript**.

YF Framework provides reusable UI components, responsive utilities, a lightweight DOM selector engine, and JavaScript-powered components such as sidebars, modals, accordions, and toast notifications.

---

## 📋 Table of Contents

- [YF Framework](#yf-framework)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
- [📁 Repository File Structure](#-repository-file-structure)
- [🚀 Production Files](#-production-files)
    - [`yf.min.css`](#yfmincss)
    - [`yf.min.js`](#yfminjs)
- [🎨 Theme Variables](#-theme-variables)
- [⚡ Quick Start](#-quick-start)
    - [Recommended Loading Order](#recommended-loading-order)
- [🛠️ Using the Core Selector Engine (`yf`)](#️-using-the-core-selector-engine-yf)
  - [Selecting Elements](#selecting-elements)
  - [Hide and Show Elements](#hide-and-show-elements)
  - [Managing Classes](#managing-classes)
    - [Add a Class](#add-a-class)
    - [Remove a Class](#remove-a-class)
    - [Toggle a Class](#toggle-a-class)
    - [Check for a Class](#check-for-a-class)
  - [Reading and Writing Values](#reading-and-writing-values)
  - [Reading and Writing Text](#reading-and-writing-text)
  - [Event Handling](#event-handling)
- [DOM Ready Helper](#dom-ready-helper)
- [🧩 JavaScript Components](#-javascript-components)
- [⚙️ Essential JavaScript Hook Classes](#️-essential-javascript-hook-classes)
- [🪟 Sidebar](#-sidebar)
- [🧱 Modal](#-modal)
- [📑 Accordion](#-accordion)
- [🔔 Toast Notifications](#-toast-notifications)
- [Method 1: Declarative Approach (Zero JavaScript)](#method-1-declarative-approach-zero-javascript)
  - [Success Toast](#success-toast)
  - [Warning Toast](#warning-toast)
  - [Toast Configuration](#toast-configuration)
    - [Common Properties](#common-properties)
- [Method 2: Custom JavaScript \& Form Validation](#method-2-custom-javascript--form-validation)
  - [Form Validation \& Button Action](#form-validation--button-action)
- [🎯 Toast Types](#-toast-types)
- [🌐 Inside a Real Application](#-inside-a-real-application)
- [📦 Toast Container](#-toast-container)
- [🎨 Customization](#-customization)
    - [Recommended Structure](#recommended-structure)
- [📱 Responsive Design](#-responsive-design)
- [🌍 Browser Support](#-browser-support)
- [🧑‍💻 Development](#-development)
- [🚀 Production Usage](#-production-usage)
- [🔄 Development vs Production](#-development-vs-production)
- [🏗️ Framework Architecture](#️-framework-architecture)
- [💡 Design Philosophy](#-design-philosophy)
    - [Lightweight](#lightweight)
    - [Modular](#modular)
    - [Developer Friendly](#developer-friendly)
    - [Customizable](#customizable)
    - [Object-Oriented](#object-oriented)
    - [Production Ready](#production-ready)
- [🧪 Example Application](#-example-application)
- [📚 API Quick Reference](#-api-quick-reference)
  - [Selector Engine](#selector-engine)
    - [Methods](#methods)
  - [DOM Ready](#dom-ready)
  - [Toast API](#toast-api)
    - [Success](#success)
    - [Warning](#warning)
    - [Danger](#danger)
- [🔑 Important Hook Reference](#-important-hook-reference)
- [📝 Recommended Workflow](#-recommended-workflow)
- [🤝 Contributing](#-contributing)
- [🐛 Bug Reports](#-bug-reports)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [⭐ YF Framework](#-yf-framework)

---

## ✨ Features

- Lightweight and modular
- Built from scratch
- Clean CSS architecture
- Object-oriented JavaScript
- Responsive utilities
- Reusable UI components
- Lightweight jQuery-inspired selector engine
- Chainable DOM manipulation
- Class and attribute utilities
- Event handling helpers
- Sidebar/off-canvas component
- Modal component
- Accordion component
- Toast notification system
- Declarative toast notifications
- Programmatic toast notifications
- CSS custom properties for easy theming
- Minified production builds
- No external JavaScript framework required

---

# 📁 Repository File Structure

For production use and repository layout, structure your project like this:

```text
yf-framework/
│
├── css/
│   ├── yf.css          # Core framework CSS
│   ├── yf.min.css      # Minified core CSS
│   ├── theme.css       # Theme variables template
│   └── style.css       # Documentation page layout styles
│
├── js/
│   ├── yf.js           # Core JavaScript engine & classes
│   └── yf.min.js       # Minified JavaScript bundle
│
├── index.html           # Documentation page
└── README.md           # Framework guide
```

---

# 🚀 Production Files

For production use, include the compiled and minified files in your project.

### `yf.min.css`

Contains:

- Core layout styles
- Responsive utilities
- Component styles
- Buttons
- Forms
- Cards
- Typography utilities
- Spacing utilities
- Framework design system styles

### `yf.min.js`

Contains:

- The core `yf` selector engine
- DOM manipulation helpers
- Event utilities
- `YFSidebar`
- `YFModal`
- `YFAccordion`
- `YFToast`
- Automatic component initialization

---

# 🎨 Theme Variables

YF Framework uses CSS custom properties to make customization simple.

Create a `theme.css` file and define your project's theme variables:

```css
:root {
  --yf-primary: #2563eb;
  --yf-primary-hover: #1d4ed8;
  --yf-secondary: #f69713;
  --yf-secondary-hover: #fb6039;
  --yf-success: #16a34a;
  --yf-warning: #bc9220;
  --yf-warning-hover: #f84242;
  --yf-danger: #dc2626;
  --yf-danger-hover: #960c0c;
  --yf-info: #0891b2;

  --yf-surface: #fcf8f8;
  --yf-text: #0f172a;
  --yf-muted: #64748b;
  --yf-border: #e2e8f0;

  --yf-white: #ffffff;
  --yf-black: #000000;

  --yf-radius-sm: 0.375rem;
  --yf-radius: 0.625rem;
  --yf-radius-lg: 1rem;

  --yf-bg: #ffffff;

  --yf-shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.08);
  --yf-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
  --yf-shadow-lg: 0 20px 40px rgba(15, 23, 42, 0.16);

  --yf-container: 1200px;
  --yf-gutter: 1.5rem;

  --yf-font:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
}
```

You can override these variables to create your own visual theme without modifying the framework's core CSS.

For example:

```css
:root {
  --yf-primary: #7c3aed;
  --yf-primary-hover: #6d28d9;
  --yf-radius: 1rem;
}
```

This allows the framework to remain untouched while your application controls the visual appearance.

---

# ⚡ Quick Start

Include the minified CSS inside your `<head>` and the minified JavaScript bundle before the closing `</body>` tag.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>My Project</title>

    <!-- Framework Styles & Theme -->
    <link rel="stylesheet" href="css/yf.min.css" />
    <link rel="stylesheet" href="css/theme.css" />
  </head>

  <body class="yf-bg-surface">
    <!-- Your HTML components here -->

    <!-- Framework Script Bundle -->
    <script src="js/yf.min.js"></script>
  </body>
</html>
```

### Recommended Loading Order

```text
HTML
 ↓
yf.min.css
 ↓
theme.css
 ↓
Your HTML
 ↓
yf.min.js
```

The framework JavaScript should normally be loaded near the bottom of the `<body>`.

---

# 🛠️ Using the Core Selector Engine (`yf`)

YF Framework includes a lightweight, chainable selector engine inspired by jQuery.

The `yf()` function can be used for:

- Selecting elements
- Adding/removing classes
- Toggling classes
- Reading/writing values
- Reading/writing text
- Showing/hiding elements
- Handling events

---

## Selecting Elements

```javascript
yf(".element");
```

You can use normal CSS selectors:

```javascript
yf("#my-button");

yf(".card");

yf("button");

yf(".container .item");

yf("[data-id]");
```

---

## Hide and Show Elements

```javascript
// Hide an element
yf(".element").hide();

// Show an element
yf(".element").show();
```

---

## Managing Classes

### Add a Class

```javascript
yf(".box").addClass("active");
```

### Remove a Class

```javascript
yf(".box").removeClass("active");
```

### Toggle a Class

```javascript
yf(".box").toggleClass("visible");
```

### Check for a Class

```javascript
yf(".box").hasClass("active");
```

---

## Reading and Writing Values

For form inputs:

```javascript
const emailValue = yf("#my-email-input").val();
```

You can also set a value:

```javascript
yf("#my-email-input").val("example@email.com");
```

---

## Reading and Writing Text

Read text:

```javascript
const title = yf("h1").text();
```

Set text:

```javascript
yf("h1").text("Updated Title");
```

---

## Event Handling

Attach an event listener:

```javascript
yf("#my-button").on("click", () => {
  console.log("Button clicked!");
});
```

Another example:

```javascript
yf(".delete-button").on("click", () => {
  console.log("Delete button clicked!");
});
```

---

# DOM Ready Helper

YF Framework provides `yf_ready()` as a simple helper for executing code after the DOM has loaded.

```javascript
yf_ready(() => {
  console.log("DOM is fully loaded and ready");
});
```

You can use it to initialize your application:

```javascript
yf_ready(() => {
  console.log("Application initialized");

  yf("#my-button").on("click", () => {
    console.log("Button clicked");
  });
});
```

---

# 🧩 JavaScript Components

YF Framework includes several object-oriented JavaScript components.

| Component     | Purpose                       |
| ------------- | ----------------------------- |
| `YFSidebar`   | Off-canvas sidebar/navigation |
| `YFModal`     | Modal/dialog windows          |
| `YFAccordion` | Expandable accordion sections |
| `YFToast`     | Toast notifications           |

These components are designed to work with specific HTML hook classes.

---

# ⚙️ Essential JavaScript Hook Classes

To ensure the framework's object-oriented JavaScript components can automatically detect and initialize correctly, make sure the required container and trigger classes are used in your HTML.

| Class / Hook         | Component | Purpose                                                            |
| -------------------- | --------- | ------------------------------------------------------------------ |
| `yf-accordion-group` | Accordion | Parent wrapper container required for accordion JavaScript binding |
| `yf-sidebar`         | Sidebar   | Off-canvas sidebar element container                               |
| `yf-sidebar-close`   | Sidebar   | Button or element inside the sidebar that triggers closure         |
| `yf-sidebar-overlay` | Sidebar   | Background backdrop overlay used for closing sidebars              |
| `yf-modal`           | Modal     | Popup dialog container component                                   |
| `yf-modal-close`     | Modal     | Hook for elements or buttons that close active modals              |
| `yf-modal-backdrop`  | Modal     | Backdrop area for clicking outside to dismiss modals               |
| `yf-toast-container` | Toast     | Dynamic container wrapper where toast notifications render         |
| `yf-toast-close`     | Toast     | Close button trigger inside individual toast alerts                |

---

# 🪟 Sidebar

The sidebar component provides an off-canvas navigation or content panel.

Basic structure:

```html
<aside class="yf-sidebar">
  <button class="yf-sidebar-close">Close</button>

  <nav>
    <!-- Sidebar content -->
  </nav>
</aside>

<div class="yf-sidebar-overlay"></div>
```

The important hooks are:

```text
yf-sidebar
yf-sidebar-close
yf-sidebar-overlay
```

These classes allow the framework's JavaScript engine to identify and control the sidebar.

---

# 🧱 Modal

The modal component provides popup dialogs.

Basic structure:

```html
<div class="yf-modal">
  <div class="yf-modal-content">
    <button class="yf-modal-close">Close</button>

    <h2>Modal Title</h2>

    <p>This is modal content.</p>
  </div>
</div>

<div class="yf-modal-backdrop"></div>
```

Important hooks:

```text
yf-modal
yf-modal-close
yf-modal-backdrop
```

The close hook can be placed on buttons or other elements intended to close the active modal.

---

# 📑 Accordion

The accordion component allows content sections to expand and collapse.

The parent wrapper must use:

```text
yf-accordion-group
```

Example:

```html
<div class="yf-accordion-group">
  <div class="yf-accordion">
    <button>What is YF Framework?</button>

    <div class="yf-accordion-content">
      YF Framework is a lightweight modular UI framework.
    </div>
  </div>

  <div class="yf-accordion">
    <button>Is JavaScript required?</button>

    <div class="yf-accordion-content">
      JavaScript is used by interactive framework components.
    </div>
  </div>
</div>
```

The `yf-accordion-group` class allows the JavaScript component to automatically detect the accordion group.

---

# 🔔 Toast Notifications

YF Framework provides two powerful ways to trigger and customize toast notifications:

1. **Declarative** — Zero JavaScript in your HTML
2. **Imperative** — Custom JavaScript and application logic

---

# Method 1: Declarative Approach (Zero JavaScript)

If you prefer writing clean HTML without manually adding JavaScript event handlers, use the built-in:

```text
data-yf-toast
```

attribute.

The attribute accepts a JSON configuration object.

---

## Success Toast

```html
<button
  class="yf-btn yf-btn-success"
  data-yf-toast='{
    "type": "success",
    "title": "Added to Cart!",
    "message": "Wireless Headphones added successfully.",
    "duration": 4000
  }'
>
  Add to Cart
</button>
```

When the button is clicked, YF Framework automatically creates the toast.

---

## Warning Toast

```html
<button
  class="yf-btn yf-btn-warning"
  data-yf-toast='{
    "type": "warning",
    "title": "Storage Warning",
    "message": "You are at 90% storage capacity."
  }'
>
  Check Storage
</button>
```

---

## Toast Configuration

A toast configuration can contain values such as:

```json
{
  "type": "success",
  "title": "Success",
  "message": "Operation completed successfully.",
  "duration": 4000
}
```

### Common Properties

| Property   | Purpose                            |
| ---------- | ---------------------------------- |
| `type`     | Defines the toast type             |
| `title`    | Toast heading                      |
| `message`  | Toast message                      |
| `duration` | How long the toast remains visible |

---

# Method 2: Custom JavaScript & Form Validation

If you want to handle:

- Button clicks
- Form validation
- User input
- API requests
- Database responses
- Application logic

you can call `YFToast` methods directly.

---

## Form Validation & Button Action

Example `script.js`:

```javascript
yf("#my-custom-save-btn").on("click", () => {
  // Read value using the framework's built-in .val() method
  const email = yf("#my-email-input").val().trim();

  if (email !== "") {
    YFToast.success(
      "Thank you. Your email has been received.",
      "Email Received",
      {
        duration: 3000,
      },
    );
  } else {
    YFToast.warning("Please enter a valid email address.", "Warning Message", {
      duration: 3000,
    });
  }
});
```

This approach is useful when the toast depends on your application's own logic.

---

# 🎯 Toast Types

YFToast provides semantic toast methods such as:

```javascript
YFToast.success("Operation completed successfully.", "Success");
```

```javascript
YFToast.warning("Please check your input.", "Warning");
```

```javascript
YFToast.danger("Something went wrong.", "Error");
```

You can also customize the duration:

```javascript
YFToast.success("Saved successfully!", "Success", {
  duration: 3000,
});
```

---

# 🌐 Inside a Real Application

YFToast can also be used inside real application logic such as:

- Form submissions
- API requests
- Database operations
- Authentication
- CRUD operations
- Server responses

Example:

```javascript
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    // Simulate server or database saving logic.
    //
    // Example:
    // const response = await saveToServer();

    // Trigger success toast dynamically
    YFToast.success("Database record updated successfully!", "Settings Saved", {
      duration: 3000,
    });
  } catch (error) {
    // Trigger danger toast on network or server failure
    YFToast.danger(
      "A network or database error occurred. Please try again.",
      "Connection Failed",
      {
        duration: 5000,
      },
    );
  }
});
```

This allows the framework to work alongside backend technologies such as PHP, Laravel, Node.js, or other APIs.

---

# 📦 Toast Container

The framework uses:

```text
yf-toast-container
```

as the dynamic container for toast notifications.

Example:

```html
<div class="yf-toast-container"></div>
```

Individual toast notifications can use:

```text
yf-toast-close
```

for their close button.

Example:

```html
<button class="yf-toast-close">×</button>
```

The framework can create and manage toast notifications dynamically through `YFToast`.

---

# 🎨 Customization

YF Framework is designed to be customized without modifying its core files.

The recommended approach is to override CSS variables inside your own `theme.css`.

For example:

```css
:root {
  --yf-primary: #16a34a;
  --yf-primary-hover: #15803d;

  --yf-secondary: #475569;

  --yf-radius: 0.75rem;

  --yf-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}
```

This keeps your application-specific styles separate from the framework.

### Recommended Structure

```text
css/
├── yf.css
├── yf.min.css
├── theme.css
└── style.css
```

Where:

- `yf.css` → Framework source CSS
- `yf.min.css` → Production CSS
- `theme.css` → Your theme overrides
- `style.css` → Your application/documentation styles

---

# 📱 Responsive Design

YF Framework includes responsive utilities intended to make layouts work across different screen sizes.

Use the framework's responsive classes and layout utilities to build interfaces for:

- Mobile devices
- Tablets
- Laptops
- Desktop screens
- Large displays

The framework's CSS is designed around responsive layouts rather than requiring separate desktop and mobile versions of your application.

---

# 🌍 Browser Support

YF Framework is designed for modern browsers that support:

- CSS Custom Properties
- Modern JavaScript
- DOM APIs
- ES6+ syntax
- Modern CSS layout features

Recommended browsers include current versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Older browsers may not support all framework features.

---

# 🧑‍💻 Development

During development, use the unminified source files:

```html
<link rel="stylesheet" href="css/yf.css" />
```

and:

```html
<script src="js/yf.js"></script>
```

This makes debugging and inspecting the framework easier.

For production, switch to:

```html
<link rel="stylesheet" href="css/yf.min.css" />
```

and:

```html
<script src="js/yf.min.js"></script>
```

---

# 🚀 Production Usage

For production applications, use the minified framework files:

```html
<link rel="stylesheet" href="css/yf.min.css" />
<link rel="stylesheet" href="css/theme.css" />
```

and:

```html
<script src="js/yf.min.js"></script>
```

Recommended production structure:

```text
your-project/
│
├── css/
│   ├── yf.min.css
│   ├── theme.css
│   └── style.css
│
├── js/
│   ├── yf.min.js
│   └── script.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── index.html
```

---

# 🔄 Development vs Production

| Environment | CSS          | JavaScript  |
| ----------- | ------------ | ----------- |
| Development | `yf.css`     | `yf.js`     |
| Production  | `yf.min.css` | `yf.min.js` |

Use the unminified versions while developing and debugging.

Use the minified versions when deploying your application.

---

# 🏗️ Framework Architecture

YF Framework is separated into two primary layers:

```text
YF Framework
│
├── CSS Layer
│   ├── Layout
│   ├── Utilities
│   ├── Components
│   ├── Responsive Styles
│   └── Theme Variables
│
└── JavaScript Layer
    ├── yf() Selector Engine
    ├── yf_ready()
    ├── YFSidebar
    ├── YFModal
    ├── YFAccordion
    └── YFToast
```

This separation allows developers to use the CSS system independently or add the JavaScript components when interactive behavior is required.

---

# 💡 Design Philosophy

YF Framework focuses on several principles:

### Lightweight

Avoid unnecessary dependencies and keep the framework simple.

### Modular

Components should be reusable independently.

### Developer Friendly

Classes and APIs should be easy to understand and remember.

### Customizable

CSS variables allow developers to customize the visual design without modifying the framework source.

### Object-Oriented

Interactive components are organized using JavaScript classes.

### Production Ready

Minified builds are provided for deployment.

---

# 🧪 Example Application

A simple project using YF Framework could look like:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>YF Framework Example</title>

    <link rel="stylesheet" href="css/yf.min.css" />

    <link rel="stylesheet" href="css/theme.css" />
  </head>

  <body class="yf-bg-surface">
    <main>
      <h1>Welcome to YF Framework</h1>

      <button id="save-button" class="yf-btn yf-btn-success">Save</button>
    </main>

    <script src="js/yf.min.js"></script>

    <script>
      yf_ready(() => {
        yf("#save-button").on("click", () => {
          YFToast.success("Your changes have been saved.", "Success", {
            duration: 3000,
          });
        });
      });
    </script>
  </body>
</html>
```

---

# 📚 API Quick Reference

## Selector Engine

```javascript
yf(selector);
```

### Methods

```javascript
.hide()
.show()

.addClass("class")
.removeClass("class")
.toggleClass("class")
.hasClass("class")

.val()
.val("value")

.text()
.text("value")

.on("event", callback)
```

---

## DOM Ready

```javascript
yf_ready(() => {
  // Code executed after DOM is ready
});
```

---

## Toast API

### Success

```javascript
YFToast.success("Message", "Title", {
  duration: 3000,
});
```

### Warning

```javascript
YFToast.warning("Message", "Title", {
  duration: 3000,
});
```

### Danger

```javascript
YFToast.danger("Message", "Title", {
  duration: 5000,
});
```

---

# 🔑 Important Hook Reference

Keep these classes unchanged when using the corresponding JavaScript components:

```text
yf-accordion-group

yf-sidebar
yf-sidebar-close
yf-sidebar-overlay

yf-modal
yf-modal-close
yf-modal-backdrop

yf-toast-container
yf-toast-close
```

These hooks are part of the connection between the framework's HTML structure and its JavaScript components.

---

# 📝 Recommended Workflow

A typical YF Framework project can follow this workflow:

```text
1. Include yf.min.css
        ↓
2. Include theme.css
        ↓
3. Build your HTML
        ↓
4. Add YF component classes/hooks
        ↓
5. Include yf.min.js
        ↓
6. Use yf() for DOM manipulation
        ↓
7. Use YF components for interactive UI
        ↓
8. Add your own application JavaScript
        ↓
9. Deploy
```

---

# 🤝 Contributing

Contributions, suggestions, bug reports, and improvements are welcome.

When contributing:

1. Keep the framework lightweight.
2. Avoid unnecessary dependencies.
3. Follow the existing coding style.
4. Keep components modular.
5. Test changes before submitting them.
6. Update the documentation when adding new features.

---

# 🐛 Bug Reports

When reporting a bug, include:

- Browser and version
- Operating system
- Framework version
- Relevant HTML
- Relevant JavaScript
- Relevant CSS
- Expected behavior
- Actual behavior
- Steps to reproduce the issue

Example:

```text
Browser: Google Chrome
Version: 140
OS: Windows

Component: YFModal

Expected:
Modal should close when clicking the close button.

Actual:
Modal remains visible.

Steps:
1. Open the modal.
2. Click the close button.
3. Observe that the modal does not close.
```

---

# 📄 License

Add your chosen license information here.

For example:

```text
MIT License
```

If the project is released under the MIT License, include the complete license text in a separate `LICENSE` file.

---

# 👨‍💻 Author

**Obada Abbas**

YF Framework — A lightweight modular UI framework built from scratch with clean CSS and object-oriented JavaScript.

---

# ⭐ YF Framework

If you find YF Framework useful, consider giving the repository a ⭐ on GitHub.

```text
YF Framework
├── Clean CSS
├── Responsive Utilities
├── Modular Components
├── Object-Oriented JavaScript
├── Lightweight DOM Engine
├── Sidebar
├── Modal
├── Accordion
└── Toast Notifications
```

**Designed to be lightweight. Made for developers.**
