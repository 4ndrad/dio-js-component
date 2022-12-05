class Cardnews extends HTMLElement{

    //executado primeiro
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    //constrói os elementos
    build(){
        const componentRoot = document.createElement("div");
        
        //set um atrbuto, nesse caso a class
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url") || "#";

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("src-img") || "assets/img/default-photo.png";
        newsImage.alt = this.getAttribute("alt-img");
        cardRight.appendChild(newsImage);

        //agora são filhos do componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    //aplica os estilos
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 50px;
            box-shadow: 5px 5px rgba(0, 0, 0, 0.521);
            border: black solid 1.5px;
            border-radius: 5px;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span{
            font-weight: 400;
            font-style: italic;
        }
        
        .card__left > a{
            color: black;
            margin-top: 15px;
            font-size: 30px;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left > p{
            color: gray;
        }
        
        .card__right{
            display: flex;
            justify-content: end;
        }
        
        .card__right>img{
            width: 250px;
            padding: 3px;
        }
        `;

        return style;
    }
}

//tem que colocar o nome com traço
customElements.define("card-news", Cardnews);