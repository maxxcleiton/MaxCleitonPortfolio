// Imagens <img>
let imgLogicaProgramacao = document.querySelector("#imgLogicaProgramacao");
let imgDOM = document.querySelector("#imgDOM");
let imgCRUD = document.querySelector("#imgCRUD");

// Legendas <figcaption>
let legLogicaProgramacao = document.querySelector("#legLogicaProgramacao");
let legDOM = document.querySelector("#legDOM");
let legCRUD = document.querySelector("#legCRUD");

// Links <a>
let aLogicaProgramacao = document.querySelector("#aLogicaProgramacao");
let aDOM = document.querySelector("#aDOM");
let aCRUD = document.querySelector("#aCRUD");

// Contador
let i = 0

// mudarTudo1() - Logica de Programacao
function mudarTudo1() {
i++;
if(i == 1){
    imgLogicaProgramacao.setAttribute("src", "./assets/gifs/mod1proj2.gif");
    imgLogicaProgramacao.setAttribute("alt", "Jogo do Pedra, papel e tesoura")
    aLogicaProgramacao.setAttribute("href", "https://github.com/maxxcleiton/projetosBlueEdtech/blob/main/M%C3%B3dulo%201%20-%20L%C3%B3gica%20de%20Programa%C3%A7%C3%A3o/Projeto%2002%20-%20Pedra%2C%20papel%20e%20tesoura.js");
    legLogicaProgramacao.innerHTML = "<figcaption>Jogo do Pedra, papel e tesoura</figcaption>";
} else if (i == 2){
    imgLogicaProgramacao.setAttribute("src", "./assets/gifs/mod1proj3.gif");
    imgLogicaProgramacao.setAttribute("alt", "Jogo de Ficção Interativa usando JScript")
    aLogicaProgramacao.setAttribute("href", "https://github.com/maxxcleiton/projetosBlueEdtech/blob/main/M%C3%B3dulo%201%20-%20L%C3%B3gica%20de%20Programa%C3%A7%C3%A3o/Projeto%2003%20-%20Fic%C3%A7%C3%A3o%20Interativa.js");
    legLogicaProgramacao.innerHTML = "<figcaption>Jogo de Ficção Interativa</figcaption>";
} else if (i == 3){
    imgLogicaProgramacao.setAttribute("src", "./assets/gifs/mod1proj1.gif");
    imgLogicaProgramacao.setAttribute("alt", "Gif do Projeto Jornada do Herói feito em JavaScript onde ele reage a respostas relativas ao sucesso da missão")
    aLogicaProgramacao.setAttribute("href", "https://github.com/maxxcleiton/projetosBlueEdtech/blob/main/M%C3%B3dulo%201%20-%20L%C3%B3gica%20de%20Programa%C3%A7%C3%A3o/Projeto%2001%20-%20Jornada%20do%20Her%C3%B3i.js");
    legLogicaProgramacao.innerHTML = "<figcaption>Jornada do Herói</figcaption>";
} else {
    i = 0;
    mudarTudo1();
}
}

// mudarTudo2() - HTML, CSS, DOM
function mudarTudo2() {
    i++
    if (i == 2){
    legDOM.innerHTML = `<figcaption>Projeto "Jogo do Humor"</figcaption>`;
    }
    if (i == 1){
    legDOM.innerHTML = "<figcaption>Só tem esse mesmo, rsrs</figcaption>";
    } else {
        i = 0
        // mudarTudo2()
    }
}

// mudarTudo3() - HTML, CSS, JS, CRUDx  
function mudarTudo3(){
    i++
    if (i == 1){
        imgCRUD.setAttribute("src", "./assets/gifs/mod2proj3.gif");
        imgCRUD.setAttribute("alt", "Site CRUD com BD feito via PostGres");
        aCRUD.setAttribute("href", "https://github.com/maxxcleiton/projeto3modulo2-BlueEdTech");
        legCRUD.innerHTML = "<figcaption>Site CRUD com BD feito via PostGres</figcaption>";
    } else if (i == 2){
        imgCRUD.setAttribute("src", "./assets/gifs/mod3proj1.gif");
        imgCRUD.setAttribute("alt", "Site CRUD usando JS Puro e consumindo uma API");
        aCRUD.setAttribute("href", "https://github.com/maxxcleiton/projetosBlueEdtech/tree/main/M%C3%B3dulo%203%20-%20Frontend/Projeto%201%20-%20CRUD%20com%20JS%20Vanilla");
        legCRUD.innerHTML = "<figcaption>Site CRUD usando JS Puro e consumindo uma API</figcaption>";
    } else if (i == 3){
        imgCRUD.setAttribute("src", "./assets/gifs/mod3proj2.gif");
        imgCRUD.setAttribute("alt", "Site CRUD usando React.js");
        aCRUD.setAttribute("href", "https://github.com/maxxcleiton/projeto2modulo3BlueEdTech");
        legCRUD.innerHTML = "<figcaption>Site CRUD usando React.js</figcaption>";
    } else if (i == 4){
        imgCRUD.setAttribute("src", "./assets/gifs/mod2proj2.gif");
        imgCRUD.setAttribute("alt", "Gif do Projeto Pokedex utilizando CRUD");
        aCRUD.setAttribute("href", "https://github.com/maxxcleiton/projeto2modulo2");
        legCRUD.innerHTML = "<figcaption>Pokedex utilizando CRUD</figcaption>";
    } else {
        i = 0;
        mudarTudo3();
    }
}