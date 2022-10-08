class Stack extends HTMLElement {
	constructor() {
		super();

		// Create a Shadow Dom
		this.attachShadow({ mode: "open" });
		// Create an element
		const template = document.querySelector("#text-stack-template");
		const clone = template.content.cloneNode(true);

		// Append to Shadow Dom
		this.shadowRoot.appendChild(clone);

		// Find element to insert into
		this.headline = this.shadowRoot.querySelector("h3");
		this.headline.innerHTML = this.headlineAttribute;

		this.body = this.shadowRoot.querySelector(".text-stack__body");
		this.body.innerHTML = this.bodyAttribute;
	}

	// This method is called when the element in inserted into the document
	connectedCallback() {}

	// This method is called when the element is removed from the document
	disconnectedCallback() {}

	// Where we list attributes that should be observed
	static get observedAttributes() {}

	// Runs when one of the observed attributes changes
	attributeChangedCallback(attrName, oldVal, newVal) {}

	// Calls when the element is moved to a new document
	// Very rarely used
	adoptedCallback() {}

	// To use an attribute you need a getter and/or setter
	get headlineAttribute() {
		return this.getAttribute("headline");
	}

	get bodyAttribute() {
		return this.getAttribute("body");
	}
}

window.customElements.define("nma-text-stack", Stack);
