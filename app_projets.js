window.onload = function () {
  const mes__projets = document.querySelector(".mes__projets");
  fetch("https://607071e685c3f0001747026c.mockapi.io/portfolio/V1/projets")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        if (i.kda_image === "./images/kda.png") {
          let mes__projets__apercu = document.createElement("a");
          mes__projets.appendChild(mes__projets__apercu);
          mes__projets__apercu.setAttribute("class", "mes__projets__apercu");
          mes__projets__apercu.setAttribute("href", `${i.kda_link}`);
          mes__projets__apercu.classList.add("animate__animated");
          mes__projets__apercu.classList.add("animate__backInLeft");

          let mes__projets__apercu__images = document.createElement("img");
          mes__projets__apercu.appendChild(mes__projets__apercu__images);
          mes__projets__apercu__images.setAttribute(
            "class",
            "mes__projets__apercu--site"
          );
          mes__projets__apercu__images.setAttribute("src", `${i.kda_image}`);
        } //
        if (i.liste_de_contact_image === "./images/ldc.png") {
          let mes__projets__apercu = document.createElement("a");
          mes__projets.appendChild(mes__projets__apercu);
          mes__projets__apercu.setAttribute("class", "mes__projets__apercu");
          mes__projets__apercu.setAttribute(
            "href",
            `${i.liste_de_contact_link}`
          );
          mes__projets__apercu.classList.add("animate__animated");
          mes__projets__apercu.classList.add("animate__backInRight");
          //finition avec lien
          let mes__projets__apercu__images = document.createElement("img");
          mes__projets__apercu.appendChild(mes__projets__apercu__images);
          mes__projets__apercu__images.setAttribute(
            "class",
            "mes__projets__apercu--site"
          );
          mes__projets__apercu__images.setAttribute(
            "src",
            `${i.liste_de_contact_image}`
          );
        }

        //

        if (i.kda_image === "./images/kda.png") {
          let mes__projets__apercu = document.createElement("a");
          mes__projets.appendChild(mes__projets__apercu);
          mes__projets__apercu.setAttribute("class", "mes__projets__apercu");
          mes__projets__apercu.setAttribute("href", `${i.kda_link}`);
          mes__projets__apercu.classList.add("animate__animated");
          mes__projets__apercu.classList.add("animate__backInLeft");

          let mes__projets__apercu__images = document.createElement("img");
          mes__projets__apercu.appendChild(mes__projets__apercu__images);
          mes__projets__apercu__images.setAttribute(
            "class",
            "mes__projets__apercu--site"
          );
          mes__projets__apercu__images.setAttribute("src", `${i.kda_image}`);
        }

        //

        if (i.liste_de_contact_image === "./images/ldc.png") {
          let mes__projets__apercu = document.createElement("a");
          mes__projets.appendChild(mes__projets__apercu);
          mes__projets__apercu.setAttribute("class", "mes__projets__apercu");
          mes__projets__apercu.setAttribute(
            "href",
            `${i.liste_de_contact_link}`
          );
          mes__projets__apercu.classList.add("animate__animated");
          mes__projets__apercu.classList.add("animate__backInRight");
          //finition avec lien
          let mes__projets__apercu__images = document.createElement("img");
          mes__projets__apercu.appendChild(mes__projets__apercu__images);
          mes__projets__apercu__images.setAttribute(
            "class",
            "mes__projets__apercu--site"
          );
          mes__projets__apercu__images.setAttribute(
            "src",
            `${i.liste_de_contact_image}`
          );
        }
      }
    });

  //

  const mes__competences__mot = document.querySelector(
    ".mes__competences--texte"
  );
  fetch("https://607071e685c3f0001747026c.mockapi.io/portfolio/V1/projets")
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
  fetch("https://607071e685c3f0001747026c.mockapi.io/portfolio/V1/accueil")
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

        // Progess bars 1

        let barre_de_progression1 = document.createElement("div");
        box_logos.appendChild(barre_de_progression1);
        barre_de_progression1.setAttribute("class", "barre_de_progression1");

        let barre_de_progression__jauge1 = document.createElement("progress");
        barre_de_progression__jauge1.setAttribute(
          "class",
          "barre_de_progression--jauge1"
        );
        barre_de_progression__jauge1.setAttribute("max", "100");
        barre_de_progression__jauge1.setAttribute("value", "40");
        barre_de_progression1.appendChild(content1);
        box_logos.appendChild(barre_de_progression__jauge1);
        barre_de_progression1.appendChild(barre_de_progression__jauge1);

        // Progess bars 2

        let barre_de_progression2 = document.createElement("div");
        box_logos.appendChild(barre_de_progression2);
        barre_de_progression2.setAttribute("class", "barre_de_progression2");

        let barre_de_progression__jauge2 = document.createElement("progress");
        barre_de_progression__jauge2.setAttribute(
          "class",
          "barre_de_progression--jauge2"
        );
        barre_de_progression__jauge2.setAttribute("max", "100");
        barre_de_progression__jauge2.setAttribute("value", "30");
        barre_de_progression2.appendChild(content2);
        box_logos.appendChild(barre_de_progression__jauge2);
        barre_de_progression2.appendChild(barre_de_progression__jauge2);

        // Progess bars 3

        let barre_de_progression3 = document.createElement("div");
        box_logos.appendChild(barre_de_progression3);
        barre_de_progression3.setAttribute("class", "barre_de_progression3");

        let barre_de_progression__jauge3 = document.createElement("progress");
        barre_de_progression__jauge3.setAttribute(
          "class",
          "barre_de_progression--jauge3"
        );
        barre_de_progression__jauge3.setAttribute("max", "100");
        barre_de_progression__jauge3.setAttribute("value", "80");
        barre_de_progression3.appendChild(content3);
        box_logos.appendChild(barre_de_progression__jauge3);
        barre_de_progression3.appendChild(barre_de_progression__jauge3);
        // Progess bars 4
        let barre_de_progression4 = document.createElement("div");
        box_logos.appendChild(barre_de_progression4);
        barre_de_progression4.setAttribute("class", "barre_de_progression4");
        let barre_de_progression__jauge4 = document.createElement("progress");
        barre_de_progression__jauge4.setAttribute(
          "class",
          "barre_de_progression--jauge4"
        );
        barre_de_progression__jauge4.setAttribute("max", "100");
        barre_de_progression__jauge4.setAttribute("value", "70");
        barre_de_progression4.appendChild(content4);
        box_logos.appendChild(barre_de_progression__jauge4);
        barre_de_progression4.appendChild(barre_de_progression__jauge4);
      }
    });
};

// let mes__projets = document.querySelector(".mes__projets");
// for (let i = 1; i <= 4; i++) {
//   let mes__projets__apercu = document.createElement("a");
//   mes__projets__apercu.setAttribute("id", "mes__projets__apercu");
//   mes__projets__apercu.setAttribute(
//     "href",
//     "https://kevinarmache.github.io/5.-Reproduction-de-la-page-d-accueil-et-la-page-Emploi-du-site-web-de-KDA/"
//   );
//   mes__projets.appendChild(mes__projets__apercu);
//   let mes__projets__apercu__images = document.createElement("img");
//   mes__projets__apercu__images.setAttribute(
//     "id",
//     "mes__projets__apercu" + i + "--site" + i
//   );
//   mes__projets__apercu__images.setAttribute("src", "./images/kda.png");
//   mes__projets__apercu.appendChild(mes__projets__apercu__images);
//   if (i == 1) {
//     mes__projets__apercu.classList.add("animate__animated");
//     mes__projets__apercu.classList.add("animate__backInLeft");
//   } else if (i == 2) {
//     mes__projets__apercu.classList.add("animate__animated");
//     mes__projets__apercu.classList.add("animate__backInRight");
//   } else if (i == 3) {
//     mes__projets__apercu.classList.add("animate__animated");
//     mes__projets__apercu.classList.add("animate__backInLeft");
//   } else if (i == 4) {
//     mes__projets__apercu.classList.add("animate__animated");
//     mes__projets__apercu.classList.add("animate__backInRight");
//   }
// }
