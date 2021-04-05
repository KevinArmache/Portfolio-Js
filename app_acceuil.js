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
});

// Image.eventListening('mousehover', ())=> {
//   Element.add.classList('border')
//   Image.add.classList('border')
// }
