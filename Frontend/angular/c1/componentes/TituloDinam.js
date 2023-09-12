class TituloDinam extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode:"open"});

        // base do componente
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        // outra forma de criar base para o componente
        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Hello World</h1>";

        // estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
         h1 {
            color: red;
         }
        `
        // enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinam);