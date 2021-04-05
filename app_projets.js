window.onload = function () {
  let mes__projets = document.querySelector(".mes__projets");
  for (let i = 1; i <= 4; i++) {
    let mes__projets__apercu = document.createElement("div");
    mes__projets__apercu.setAttribute("id", "mes__projets__apercu" + i);
    mes__projets.appendChild(mes__projets__apercu);
    let iframe = document.createElement("iframe");
    iframe.setAttribute("id", "mes__projets__apercu" + i + "__site" + i);
    iframe.src =
      "https://kevinarmache.github.io/5.-Reproduction-de-la-page-d-accueil-et-la-page-Emploi-du-site-web-de-KDA/";
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    mes__projets__apercu.appendChild(iframe);
  }
//

  const mes__competences__mot = document.querySelector(".mes__competences__mot");
  fetch("http://localhost:3000/mes__competences")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let content = document.createTextNode(`${i.mes__competences__mot}`);
        mes__competences__mot.appendChild(content);
      }
});

//
const box_logos = document.querySelector(".box_logos");
fetch("http://localhost:3000/box_logos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i of data) {
      let content1 = document.createElement("img");
      let content2 = document.createElement("img");
      let content3 = document.createElement("img");
      let content4 = document.createElement("img");
      content1.setAttribute("src", `${i["box_logo__logo1"]}`);
      content2.setAttribute("src", `${i["box_logo__logo2"]}`);
      content3.setAttribute("src", `${i["box_logo__logo3"]}`);
      content4.setAttribute("src", `${i["box_logo__logo4"]}`);
      box_logos.appendChild(content1);
      box_logos.appendChild(content2);
      box_logos.appendChild(content3);
      box_logos.appendChild(content4);




    }
})
}
