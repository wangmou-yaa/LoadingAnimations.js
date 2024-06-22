// Don't know what to do with this javascript class? Please visit 'https://github.com/wangmou-yaa/LoadingAnimations.js' for more info. (OR in 'https://gitee.com/wangmou-yaa/LoadingAnimations.js')

class LoadingAnimations {
    constructor(options = {}) {
        this.options = {
            observeImages: false,
            onProgress: null,
            onFinishLoading: null,
            onError: null,
            retryOnError: false,
            maxRetries: 3,
            retryDelayInMilliseconds: 1000,
            customCSS: '',
            customSpinnerClass: 'my-custom-spinner-class',
            customErrorClass: 'my-custom-error-class',
            animationType: 'spinner',
            animationSpeed: 1000,
            animationColor: '#fff',
            animationSize: '50px',
            animationEasing: 'ease-in-out',
            ...options
        };
        this.imagesLoaded = 0;
        this.totalImages = 0;
        this.retryCounts = {};
        this.init();
    }

    init() {
        this.insertCustomCSS();
        this.bindEvents();
        if (this.options.observeImages) {
            this.observeImages();
        }
    }
    insertCustomCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
            .loading-spinner {
                display: inline-block;
                width: ${this.options.animationSize};
                height: ${this.options.animationSize};
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                border-top-color: ${this.options.animationColor};
                animation: spin ${this.options.animationSpeed}ms linear infinite;
            }
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            .loading-error {
                color: red;
                font-size: 16px;
                display: none;
            }
            .loading-transition {
                transition: opacity 0.5s ease;
            }
            ${this.options.customCSS}
        `;
        document.head.appendChild(style);
    }

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => this.showSpinner());
        window.addEventListener('load', () => this.hideSpinner());
    }showSpinner() {
        if (!this.spinnerElement) {
            this.spinnerElement = document.createElement('div');
            this.spinnerElement.className = 'loading-spinner';
            if (this.options.customSpinnerClass) {
                this.spinnerElement.classList.add(this.options.customSpinnerClass);
            }
            document.body.appendChild(this.spinnerElement);
        }
    }

    hideSpinner() {
        if (this.spinnerElement) {
            this.spinnerElement.classList.add('loading-transition');
            setTimeout(() => {
                this.spinnerElement.remove();
                this.spinnerElement = null;
            }, 500);
        }
    }

    showLoadError() {
        if (!this.errorElement) {
            this.errorElement = document.createElement('div');
            this.errorElement.className = 'loading-error';
            if (this.options.customErrorClass) {
                this.errorElement.classList.add(this.options.customErrorClass);
            }
            this.errorElement.textContent = 'Loading failed, please try again.';
            document.body.appendChild(this.errorElement);
        }
        this.errorElement.style.display = 'block';
    }

    hideLoadError() {
        if (this.errorElement) {
            this.errorElement.style.display = 'none';
        }
    }
onImageLoaded(img) {
        this.imagesLoaded++;
        this.updateProgress();
        if (this.imagesLoaded === this.totalImages) {
            this.onFinishLoading();
        }
        if (this.options.onImageLoaded) {
            this.options.onImageLoaded(img);
        }
    }

    onError(img) {
        this.updateProgress();
        if (this.options.retryOnError && this.retryCounts[img.src] < this.options.maxRetries) {
            this.retryCounts[img.src] = (this.retryCounts[img.src] || 0) + 1;
            this.loadImage(img);
        } else {
            this.showLoadError();
            if (this.options.onError) {
                this.options.onError(img);
            }
        }
    }

    onFinishLoading() {
        this.hideSpinner();
        if (this.options.onFinishLoading) {
            this.options.onFinishLoading();
        }
    }

    updateProgress() {
        if (this.options.onProgress) {
            this.options.onProgress(this.imagesLoaded, this.totalImages);
        }
    }

    observeImages() {
        if (document.body) {
            this.totalImages = document.querySelectorAll('img').length;
            this.addImageListeners(document.querySelectorAll('img'));
            this.observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    Array.from(mutation.addedNodes).forEach((node) => {
                        if (node.tagName === 'IMG') {
                            this.totalImages++;
                            this.addImageListeners([node]);
                        }
                    });
                });
            });

            this.observer.observe(document.body, { childList: true, subtree: true });
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                this.observeImages();
            });
        }
    }

    addImageListeners(images) {
        images.forEach((img) => {
            img.addEventListener('load', this.imageLoadHandler.bind(this, img));
            img.addEventListener('error', this.imageErrorHandler.bind(this, img));
        });
    }

    imageLoadHandler(img) {
        this.onImageLoaded(img);
        this.removeImageListeners(img);
    }

    imageErrorHandler(img) {
        if (this.retryCounts[img.src] < this.options.maxRetries) {
            this.retryCounts[img.src]++;
            this.loadImage(img);
        } else {
            this.onError(img);
        }
    }

    loadImage(img) {
        const newSrc = img.src.includes('?') ? img.src + '&_=' : img.src + '?_';
        img.src = newSrc;
        this.addImageListeners(img);
    }

    removeImageListeners(img) {
        img.removeEventListener('load', this.imageLoadHandler);
        img.removeEventListener('error', this.imageErrorHandler);
    }

showPageLoadAnimation() {
        if (!this.pageLoadAnimationElement) {
            this.pageLoadAnimationElement = document.createElement('div');
            this.pageLoadAnimationElement.className = 'page-load-animation';
            this.pageLoadAnimationElement.style.backgroundColor = this.options.animationColor;
            this.pageLoadAnimationElement.style.width = this.options.animationSize;
            this.pageLoadAnimationElement.style.height = this.options.animationSize;
            if (this.options.animationType === 'spinner') {
                this.pageLoadAnimationElement.classList.add('loading-spinner');
            }
            document.body.appendChild(this.pageLoadAnimationElement);
        }
    }

    hidePageLoadAnimation() {
        if (this.pageLoadAnimationElement) {
            this.pageLoadAnimationElement.classList.add('loading-transition');
            setTimeout(() => {
                this.pageLoadAnimationElement.remove();
                this.pageLoadAnimationElement = null;
            }, 500);
        }
    }

    destroy() {
        this.unbindEvents();
        if (this.observer) {
            this.observer.disconnect();
        }
        if (this.spinnerElement) {
            this.spinnerElement.remove();
        }
        if (this.errorElement) {
            this.errorElement.remove();
        }
        if (this.pageLoadAnimationElement) {
            this.pageLoadAnimationElement.remove();
        }
    }

    unbindEvents() {
        document.removeEventListener('DOMContentLoaded', this.showSpinner);
        window.removeEventListener('load', this.hideSpinner);
    }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
    const loader = new LoadingAnimations({
        observeImages: true,
        onProgress: (loaded, total) => { console.log(`Image loading progress: ${loaded} / ${total}`); },
        onFinishLoading: () => { console.log('All images loaded'); },
        onError: (img) => { console.error(`Error loading image: ${img.src}`); },
        retryOnError: true,
        maxRetries: 3,
        retryDelayInMilliseconds: 1000,
        animationType: 'spinner',
        animationSpeed: 1500,
        animationColor: '#0f0',
        animationSize: '75px',
        animationEasing: 'ease-in',
        customCSS: '/* Custom CSS goes here */',
    });
});

// YOU CAN USE IT:
// loader.destroy();