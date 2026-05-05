class ModalManager {
	constructor() {
		this.openButtons = document.querySelectorAll('[data-modal-target]');
		this.closeButtons = document.querySelectorAll('[data-modal-close]');

		this._bindEvents();
	}

	_bindEvents() {
		this.openButtons?.forEach(button => {
			button.addEventListener('click', () => {
				const targetSelector = button.getAttribute('data-modal-target');
				if (targetSelector) {
					const modal = document.querySelector(targetSelector);
					this.open(modal);
				}
			});
		});

		this.closeButtons.forEach(button => {
			button.addEventListener('click', () => {
				const modal = button.closest('.modal-overlay');
				this.close(modal);
			});
		});

		document.addEventListener('click', (event) => {
			if (event.target instanceof Element && event.target.classList.contains('modal-overlay')) {
				this.close(event.target);
			}
		});

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				const activeModal = document.querySelector('.modal-overlay.is-open');
				if (activeModal) {
					this.close(activeModal);
				}
			}
		});
	}

	open(modal) {
		if (!modal) return;
		modal.classList.add('is-open');
		modal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';

		modal.focus();
	}

	close(modal) {
		if (!modal) return;
		modal.classList.remove('is-open');
		modal.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
	}
}

const modal = new ModalManager();