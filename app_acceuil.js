window.onload = function () {
  const box__ma_photo = document.querySelector(".box__ma_photo");
  const box__ma_photo__photo = document.createElement("img");
  box__ma_photo__photo.setAttribute("id", "box__ma_photo--photo");
  box__ma_photo.appendChild(box__ma_photo__photo);
  fetch("https://my-json-server.typicode.com/KevinArmache/Portfolio/acceuil")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        box__ma_photo__photo.setAttribute("src", `${i.box__ma_photo__photo}`);
      }
    });

  //
  const box__presentation = document.querySelector(".box--presentation");
  fetch("https://my-json-server.typicode.com/KevinArmache/Portfolio/acceuil")
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
    ".brief__projets--texte"
  );

  fetch("https://my-json-server.typicode.com/KevinArmache/Portfolio/acceuil")
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
    ".brief__apropos--texte"
  );
  fetch("https://my-json-server.typicode.com/KevinArmache/Portfolio/acceuil")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i of data) {
        let content = document.createTextNode(`${i.brief__apropos__texte}`);
        brief__apropos__texte.appendChild(content);
      }
    });
};
//logo

const box_logos = document.querySelector(".box_logos");
fetch("https://my-json-server.typicode.com/KevinArmache/Portfolio/acceuil")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i of data) {
      let content1 = document.createElement("img");
      let content2 = document.createElement("img");
      let content3 = document.createElement("img");
      let content4 = document.createElement("img");
      content1.setAttribute("class", "icon");
      content1.setAttribute("src", `${i["box_logo__logo1"]}`);
      content2.setAttribute("class", "icon");
      content2.setAttribute("src", `${i["box_logo__logo2"]}`);
      content3.setAttribute("class", "icon");
      content3.setAttribute("src", `${i["box_logo__logo3"]}`);
      content4.setAttribute("class", "icon");
      content4.setAttribute("src", `${i["box_logo__logo4"]}`);

      box_logos.appendChild(content1);
      box_logos.appendChild(content2);
      box_logos.appendChild(content3);
      box_logos.appendChild(content4);
    }
  });

// Image.eventListening('mousehover', ())=> {
//   Element.add.classList('border')
//   Image.add.classList('border')
// }
