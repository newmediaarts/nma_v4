class Stack extends HTMLElement {
  constructor() {
    super();

    // Create a Shadow Dom
    this.attachShadow({ mode: 'open' });
    // Create an element
    const template = document.querySelector('#text-stack-template');
    const clone = template.content.cloneNode(true);

    // Append to Shadow Dom
    this.shadowRoot.appendChild(clone);

    // Find element to insert into
    this.headline = this.shadowRoot.querySelector('.text-stack__headline');
    this.headline.innerHTML = this.headlineAttribute;

    this.body = this.shadowRoot.querySelector('.text-stack__body');
    this.body.innerHTML = this.bodyAttribute;
  }

  // To use an attribute you need a getter and/or setter
  get headlineAttribute() {
    return this.getAttribute('headline');
  }

  get bodyAttribute() {
    return this.getAttribute('body');
  }
}

window.customElements.define('nma-text-stack', Stack);
