class ModalManager {
	constructor() {
		this.overlay = document.querySelector('#modalOverlay');
		this.openBtn = document.querySelector('#openModal');
		this.closeBtn = document.querySelector('#closeModal');

		if (this.overlay) {
			this._bindEvents();
		}
	}

	_bindEvents() {
		this.openBtn?.addEventListener('click', () => this.open());

		this.closeBtn?.addEventListener('click', () => this.close());

		this.overlay?.addEventListener('click', (event) => {
			if (event.target === this.overlay) {
				this.close();
			}
		});

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				this.close();
			}
		});
	}

	open() {
		this.overlay?.classList.add('is-open');
		document.body.style.overflow = 'hidden';
	}

	close() {
		this.overlay?.classList.remove('is-open');
		document.body.style.overflow = '';
	}
}

const modal = new ModalManager();