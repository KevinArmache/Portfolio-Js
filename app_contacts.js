window.onload = function () {
  const icone_contacts__logo = document.querySelector(".icone_contacts--logo");
  fetch("http://localhost:3000/contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let content = document.createTextNode(`${i.icones_contacts__logo}`);
        icone_contacts__logo.appendChild(content);
      }
    });

  const mes_contacts_texte = document.querySelector(".mes_contacts--texte");
  fetch("http://localhost:3000/contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let content = document.createTextNode(`${i.mes_contacts__texte}`);
        mes_contacts_texte.appendChild(content);
      }
    });

  const mes_contacts__images = document.querySelector(
    ".mes_contacts__reseaux_sociaux"
  );
  fetch("http://localhost:3000/contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        console.log(i);

        if (i.facebook === "./logo/fb.svg") {
          let mes_contacts__images__images = document.createElement("a");
          let content = document.createElement("img");
          mes_contacts__images__images.setAttribute(
            "class",
            "mes_contacts__images"
          );
          content.setAttribute("src", `${i.facebook}`);
          mes_contacts__images__images.setAttribute(
            "href",
            "https://www.facebook.com/kevinarmache"
          );
          mes_contacts__images.appendChild(mes_contacts__images__images);
          mes_contacts__images__images.appendChild(content);
        }
        if (i.whatsapp === "./logo/wa.svg") {
          let mes_contacts__images__images = document.createElement("a");
          let content = document.createElement("img");
          mes_contacts__images__images.setAttribute(
            "class",
            "mes_contacts__images"
          );
          content.setAttribute("src", `${i.whatsapp}`);
          mes_contacts__images__images.setAttribute(
            "href",
            "https://wa.me/+243816864164"
          );
          mes_contacts__images.appendChild(mes_contacts__images__images);

          mes_contacts__images__images.appendChild(content);
        }
        if (i.twitter === "./logo/twitter.svg") {
          let mes_contacts__images__images = document.createElement("a");
          let content = document.createElement("img");
          mes_contacts__images__images.setAttribute(
            "class",
            "mes_contacts__images"
          );

          content.setAttribute("src", `${i.twitter}`);
          mes_contacts__images__images.setAttribute(
            "href",
            "https://twitter.com/OnizukaSix"
          );
          mes_contacts__images.appendChild(mes_contacts__images__images);
          mes_contacts__images__images.appendChild(content);
        }
        if (i.gmail === "./logo/mail.svg") {
          let mes_contacts__images__images = document.createElement("a");
          let content = document.createElement("img");
          mes_contacts__images__images.setAttribute(
            "class",
            "mes_contacts__images"
          );
          content.setAttribute("src", `${i.gmail}`);
          mes_contacts__images__images.setAttribute(
            "href",
            "mailto:kevinarmache@gmail.com"
          );
          mes_contacts__images.appendChild(mes_contacts__images__images);
          mes_contacts__images__images.appendChild(content);
        }
        if (i.discord === "./logo/discord.svg") {
          let mes_contacts__images__images = document.createElement("a");
          let content = document.createElement("img");
          mes_contacts__images__images.setAttribute(
            "class",
            "mes_contacts__images"
          );
          content.setAttribute("src", `${i.discord}`);
          mes_contacts__images__images.setAttribute("href", "google.fr");
          mes_contacts__images.appendChild(mes_contacts__images__images);
          mes_contacts__images__images.appendChild(content);
        }
        if (i.twitch === "./logo/twitch.svg") {
          let mes_contacts__images__images = document.createElement("a");
          let content = document.createElement("img");
          mes_contacts__images__images.setAttribute(
            "class",
            "mes_contacts__images"
          );
          content.setAttribute("src", `${i.twitch}`);
          mes_contacts__images__images.setAttribute(
            "href",
            "https://google.fr"
          );
          mes_contacts__images.appendChild(mes_contacts__images__images);
          mes_contacts__images__images.appendChild(content);
        }
      }

      //
      const CV = document.querySelector(".CV");
      fetch("http://localhost:3000/contacts")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          for (let i of data) {
            let link = document.createElement("a");
            let content = document.createElement("img");
            link.setAttribute("href", "https://www.google.fr");
            CV.appendChild(link);
            CV.appendChild(content);
            link.appendChild(content);
            content.setAttribute("src", `${i.CV_icone}`);
          }
        });
    });
};
