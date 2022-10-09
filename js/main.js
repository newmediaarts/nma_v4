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

  // src/js/elements/picture.js
  var Picture = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const template = document.querySelector("#picture-template");
      const clone = template.content.cloneNode(true);
      this.shadowRoot.appendChild(clone);
      this.pictureElement = this.shadowRoot.querySelector("picture");
    }
    connectedCallback() {
      if (this.mobileSrcAttribute) {
        this.createSourceElement(this.mobileSrcAttribute, "(max-width: 600px)");
      }
      if (this.tabletSrcAttribute) {
        this.createSourceElement(
          this.tabletSrcAttribute,
          "(min-width:601px) and (max-width:1000px)"
        );
      }
      this.fallbackImage = document.createElement("img");
      this.fallbackImage.alt = this.altAttribute;
      this.fallbackImage.setAttribute("part", "image");
      if (!this.desktopSrcAttribute) {
        this.fallbackImage.src = this.fallbackSrcAttribute;
      } else {
        this.fallbackImage.src = this.desktopSrcAttribute;
      }
      this.pictureElement.appendChild(this.fallbackImage);
    }
    createSourceElement(value, breakpoint) {
      const sourceElement = document.createElement("source");
      sourceElement.setAttribute("srcset", value);
      sourceElement.setAttribute("media", breakpoint);
      this.pictureElement.appendChild(sourceElement);
    }
    get headlineAttribute() {
      return this.getAttribute("headline");
    }
    get altAttribute() {
      return this.getAttribute("alt");
    }
    get mobileSrcAttribute() {
      return this.getAttribute("mobile");
    }
    get tabletSrcAttribute() {
      return this.getAttribute("tablet");
    }
    get desktopSrcAttribute() {
      return this.getAttribute("desktop");
    }
    get fallbackSrcAttribute() {
      return this.getAttribute("src");
    }
  };
  window.customElements.define("nma-picture", Picture);

  // src/js/main.js
  var App = class {
    constructor() {
      console.log("Hello this is using esbuild");
    }
  };
  new App();
})();
