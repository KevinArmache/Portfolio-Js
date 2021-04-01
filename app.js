window.onload = function () {
  const box__presentation = document.querySelector(".box__presentation");
  fetch("http://localhost:3000/box")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let content = document.createTextNode(`${i.box__presentation}`);
        box__presentation.appendChild(content);
      }
    });
//
  const brief__projets__texte = document.querySelector(
    ".brief__projets__texte"
  );

  fetch("http://localhost:3000/brief__projets")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let content = document.createTextNode(`${i.brief__projets__texte}`);
        brief__projets__texte.appendChild(content);
      }
    });
//
  const brief__apropos__texte = document.querySelector(
    ".brief__apropos__texte"
  );
  fetch("http://localhost:3000/brief__apropos")
  .then(function(response){
    return response.json();
  }) 
  .then(function(data){
    for (let i of data) {
      let content = document.createTextNode(`${i.brief__apropos__texte}`);
      brief__apropos__texte.appendChild(content);
    }
  })
// projets.html
let mes__projets = document.querySelector(".mes__projets");
for (let i=1; i<=4; i++) {
let mes__projets__apercu = document.createElement("div")
mes__projets__apercu.setAttribute("id", "mes__projets__apercu"+i)
mes__projets.appendChild(mes__projets__apercu)
let iframe = document.createElement("iframe");
iframe.setAttribute("id", "mes__projets__apercu"+i+"__site"+i);
iframe.src = "https://kevinarmache.github.io/5.-Reproduction-de-la-page-d-accueil-et-la-page-Emploi-du-site-web-de-KDA/";
iframe.frameBorder = "0";
iframe.scrolling = "no";
mes__projets__apercu.appendChild(iframe)
}
//


};
