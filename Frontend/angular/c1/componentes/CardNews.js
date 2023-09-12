class CardNews extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        //criando a div
        const componentRoot = document.createElement("div");
        // adicionando uma classe
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card-left");

        const autor = document.createElement("span");
        autor.textContent = "By" + (this.getAttribute("autor") || "By Anonimo");

        const titulo = document.createElement("h1");
        titulo.textContent = this.getAttribute("titulo");

        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute("conteudo");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(conteudo);     

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card-right");
       
        const figura = document.createElement("img");
        figura.src = this.getAttribute("photo") || "foto-default.jpg"
        figura.alt = "descrição da imagem";

        cardRight.appendChild(figura);

        //Especificando que que as outras divs estão dentro de uma div principal
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }
    style(){
        const style = document.createElement("style");
        style.textContent = ` 
        
            .card {
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow:9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background-color: white;
                margin-bottom: 10px;
            }
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            .card-left span {
                font-weight: 400;
            }
            .card-left h1 {
                margin-top: 15px;
                font-size: 25px;
            }
            .card-left p {
                color: rgb(70, 70, 70);
            }
            `;
        return style;
    }
}
customElements.define('card-news', CardNews);