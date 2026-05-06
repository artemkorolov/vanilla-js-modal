# Vanilla JS Modal

A lightweight, scalable, and fully accessible modal window built with **OOP** principles.

## 🔗 Features

* **Class-Based Architecture:** Encapsulated logic using ES6 Classes for clean and maintainable code.
* **Universal Triggers:** Uses `data-attributes` to handle multiple modals with a single script instance.
* **Accessibility:** Full ARIA support (`aria-hidden` management) and keyboard navigation (Escape key).
* **UX Focused:** Background scroll locking and overlay click-to-close functionality.


## 🛠 Tech Stack

* **HTML5** 
* **CSS3**  
* **JavaScript**

## 💡 How It Works (Usage)

Unlike basic scripts, this manager doesn't rely on hardcoded IDs. Simply add the following attributes to your HTML:

1.  **Trigger Button:** Add `data-modal-target="#yourModalId"`.
2.  **Close Button:** Add `data-modal-close` to any element inside the modal.

### HTML Structure Example:

```html
<button data-modal-target="#modalOverlay">Open Modal</button>

<div id="modalOverlay" class="modal-overlay" aria-hidden="true">
  <div class="modal">
    <button class="close-btn" data-modal-close>&times;</button>
    <h2>Hello!</h2>
    <p>This is a professional, reusable modal window.</p>
  </div>
</div>

```

## 📷 Preview

[Live Demo on GitHub Pages](https://artemkorolov.github.io/vanilla-js-modal/)