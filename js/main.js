
const modalManager = {

	open() {
		this.overlay?.classList.add('is-open');
		document.body.style.overflow = 'hidden';
	},

	close() {
		this.overlay?.classList.remove('is-open');
		document.body.style.overflow = '';
	},

	init() {
		this.overlay = document.querySelector('#modalOverlay');
		if (!this.overlay) {
			console.warn("Element #modalOverlay not found in the DOM");
			return;
		}

		const openBtn = document.querySelector('#openModal');
		if (openBtn) {
			openBtn.addEventListener('click', () => this.open());
		}

		this.closeBtn = document.querySelector('#closeModal');
		if (this.closeBtn) {
			this.closeBtn.addEventListener('click', () => this.close());
		}

		this.overlay.addEventListener('click', (event) => {
			if (event.target === this.overlay) {
				this.close();
			}
		});
	}
};

modalManager.init();

