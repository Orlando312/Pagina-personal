const frases = [
    "Me encanta programar",
    "Soy desarrollador web",
    "Apasionado por el código",
    "Me encantan los deportes y actividad física",
    "Proactivo",
    "Apasionado de los juegos de mesa",
    "Amante de los paisajes selváticos",
    "Amante de los gatos",
    "Mi gato es mi compañero de código"
  ];  
  
  let i = 0;
  let j = 0;
  let textoActual = "";
  let escribiendo = true;
  
  const escribir = () => {
    const display = document.getElementById("escribiendo");
  
    if (escribiendo) {
      textoActual = frases[i].slice(0, ++j);
      if (j === frases[i].length) escribiendo = false;
    } else {
      textoActual = frases[i].slice(0, --j);
      if (j === 0) {
        escribiendo = true;
        i = (i + 1) % frases.length;
      }
    }
  
    display.textContent = textoActual;
    setTimeout(escribir, 100);
  };
  
  document.addEventListener("DOMContentLoaded", escribir);
  
AOS.init();

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

