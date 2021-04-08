//---------------LIGHT & DARK MODE --------------------------------

const light_mode = document.querySelector(".light");

light_mode.addEventListener("click", function () {
  const html = document.querySelector(":root");
  html.style.filter = "invert(100%)";

  let light_mot = document.querySelector(".light_mot");

  light_mot.innerHTML = light_mot.innerHTML.replace("Light", "Dark");

  if (light_mot.innerHTML == "Dark") {
    light_mode.addEventListener("click", function () {
      const html = document.querySelector(":root");
      html.style.filter = null;


      let light_mot = document.querySelector(".light_mot");

      light_mot.innerHTML = light_mot.innerHTML.replace("Dark", "Light");
    });
  } else if (light_mot.innerHTML == "Light") {
    light_mode.addEventListener("click", function () {
      const html = document.querySelector(":root");
      html.style.filter = "invert(100%)";


      let light_mot = document.querySelector(".light_mot");
  
      light_mot.innerHTML = light_mot.innerHTML.replace("Light", "Dark");
    });
  }
});
