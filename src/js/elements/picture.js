class Picture extends HTMLElement {
  constructor() {
    super();

    // Create a Shadow Dom
    this.attachShadow({ mode: 'open' });
    // Create an element
    const template = document.querySelector('#picture-template');
    const clone = template.content.cloneNode(true);
    // Append to Shadow Dom
    this.shadowRoot.appendChild(clone);

    this.pictureElement = this.shadowRoot.querySelector('picture');
  }

  connectedCallback() {
    // Find element to insert into
    if (this.mobileSrcAttribute) {
      this.createSourceElement(this.mobileSrcAttribute, '(max-width: 600px)');
    }

    if (this.tabletSrcAttribute) {
      this.createSourceElement(
        this.tabletSrcAttribute,
        '(min-width:601px) and (max-width:1000px)'
      );
    }

    this.fallbackImage = document.createElement('img');
    this.fallbackImage.alt = this.altAttribute;
    this.fallbackImage.setAttribute('part', 'image');

    // If there is a desktop attribute set it to the fallback
    if (!this.desktopSrcAttribute) {
      this.fallbackImage.src = this.fallbackSrcAttribute;
    } else {
      this.fallbackImage.src = this.desktopSrcAttribute;
    }

    this.pictureElement.appendChild(this.fallbackImage);
  }

  createSourceElement(value, breakpoint) {
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('srcset', value);
    sourceElement.setAttribute('media', breakpoint);
    this.pictureElement.appendChild(sourceElement);
  }

  // To use an attribute you need a getter and/or setter
  get headlineAttribute() {
    return this.getAttribute('headline');
  }

  get altAttribute() {
    return this.getAttribute('alt');
  }

  get mobileSrcAttribute() {
    return this.getAttribute('mobile');
  }

  get tabletSrcAttribute() {
    return this.getAttribute('tablet');
  }

  get desktopSrcAttribute() {
    return this.getAttribute('desktop');
  }

  get fallbackSrcAttribute() {
    return this.getAttribute('src');
  }
}

window.customElements.define('nma-picture', Picture);
