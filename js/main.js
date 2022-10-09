(() => {
  // src/js/elements/text-stack.js
  var Stack = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const template = document.querySelector("#text-stack-template");
      const clone = template.content.cloneNode(true);
      this.shadowRoot.appendChild(clone);
      this.headline = this.shadowRoot.querySelector(".text-stack__headline");
      this.headline.innerHTML = this.headlineAttribute;
      this.body = this.shadowRoot.querySelector(".text-stack__body");
      this.body.innerHTML = this.bodyAttribute;
    }
    connectedCallback() {
    }
    disconnectedCallback() {
    }
    static get observedAttributes() {
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
    }
    adoptedCallback() {
    }
    get headlineAttribute() {
      return this.getAttribute("headline");
    }
    get bodyAttribute() {
      return this.getAttribute("body");
    }
  };
  window.customElements.define("nma-text-stack", Stack);

  // src/js/main.js
  var App = class {
    constructor() {
      console.log("Hello this is using esbuild");
    }
  };
  new App();
})();
