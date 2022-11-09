//Para cambiar visualización de navbar
window.addEventListener("DOMContentLoaded", (event) => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

//TO DO
// Declare las variables del formulario login
  let correo = document.body.querySelector("#inputEmail");
  let password = document.body.querySelector("#inputPassword");
  let btn = document.body.querySelector("#send");
// Implemente el evento para validar
   btn.addEventListener("click", function (evt) {
     evt.preventDefault();
     if(correo === "admin" && password ==="12345"){
       prompt("Bienvenido");
     }else{
       prompt("Usuario o contraseña incorrectos");
     }
   }
  );