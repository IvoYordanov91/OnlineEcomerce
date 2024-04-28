class hCaptcha {
    constructor(siteKey, containerId, options = {}) {
      this.siteKey = siteKey;
      this.containerId = containerId;
      this.options = options;
      this.widgetId = null;
    }

    render() {
      const container = document.getElementById(this.containerId);
      if (!container) {
        console.error('Container element not found.');
        return;
      }

      const widgetContainer = document.createElement('div');
      widgetContainer.id = 'hCaptchaWidget';
      container.appendChild(widgetContainer);

      if (this.options.invisible) {
        this.options.callback = this.execute.bind(this);
        this.widgetId = window.hcaptcha.render('hCaptchaWidget', {
          sitekey: this.siteKey,
          ...this.options
        });
      } else {
        this.widgetId = window.hcaptcha.render('hCaptchaWidget', {
          sitekey: this.siteKey,
          ...this.options
        });
      }
    }

    execute() {
      if (!this.widgetId) {
        console.error('hCaptcha widget not rendered.');
        return;
      }

      window.hcaptcha.execute(this.widgetId);
    }

    reset() {
      if (!this.widgetId) {
        console.error('hCaptcha widget not rendered.');
        return;
      }

      window.hcaptcha.reset(this.widgetId);
    }
}

export default hCaptcha;