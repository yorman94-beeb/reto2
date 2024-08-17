let nombre = prompt ("escribe tu nombre");
let edad = prompt("escribe tu edad");
let lenguaje = prompt ("¿cual es tu lenguaje de programacion favorito?");



alert(`Hola ${nombre} tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`)


let gusto = prompt (`¿te gusta estudiar ${lenguaje}? pon el #1 si te gusta de lo contario pon el #2`);

 if(gusto ==1)
    {alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")  }

  else{
    if(gusto==2){
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
    }
  }