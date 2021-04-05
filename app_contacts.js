window.onload = function () {
  const icone_contacts__logo = document.querySelector(".icone_contacts__logo");
  fetch("http://localhost:3000/icone_contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let content = document.createTextNode(`${i.icones_contacts__logo}`);
        icone_contacts__logo.appendChild(content);
      }
    });

  const mes_contacts_texte = document.querySelector(".mes_contacts__texte");
  fetch("http://localhost:3000/mes_contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let content = document.createTextNode(`${i.mes_contacts__texte}`);
        mes_contacts_texte.appendChild(content);
      }
    });

  const mes_contacts__images = document.querySelector(".mes_contacts__reseaux_sociaux");
  fetch("http://localhost:3000/mes_contacts__reseaux_sociaux")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let mes_contacts__images__images = document.createElement("a");
        let content = document.createElement("img");
        mes_contacts__images__images.setAttribute(
          "id",
          "mes_contacts__images__images" + i
        );
        mes_contacts__images__images.setAttribute("href", "https://www.google.fr")
        content.setAttribute("src", `${i}`);
        mes_contacts__images.appendChild(mes_contacts__images__images);
        mes_contacts__images.appendChild(content);
        mes_contacts__images__images.appendChild(content);
      }
    });
};
