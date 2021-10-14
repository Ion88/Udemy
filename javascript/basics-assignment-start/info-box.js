class InfoBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
        <button>Show</button>
        <p id="info-box">
            <slot></slot>
        </p>
        `;
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector("button");
    const infoEl = this.shadowRoot.querySelector("#info-box");
    infoEl.style.display = "none";
    let isHidden = true;
    button.addEventListener("click", () => {
      if (isHidden) {
        infoEl.style.display = "block";
        button.textContent = "Hide";
        isHidden = false;
      } else {
        infoEl.style.display = "none";
        button.textContent = "Show";
        isHidden = true;
      }
    });
    this.shadowRoot.appendChild(button);
  }
}

customElements.define("iv-infobox", InfoBox);
