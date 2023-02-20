let INDEX_PREGUNTA = 0;
let score = 0;


(Swal.fire(
    'Bienvenido/a',
    'Esta es una de las primeras actividades',
    'suerte',
     
  ))

chargequestions(INDEX_PREGUNTA);

function chargequestions(index){
   preguntas = questions[index]
   opciones = [...preguntas.mas]
   opciones.push(preguntas.respuesta)
    
  for (let i = 0; i < 4; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

   document.getElementById("pregunta").innerHTML = preguntas.pregunta;
   document.getElementById("opcion-1").innerHTML = opciones[0];
   document.getElementById("opcion-2").innerHTML = opciones[1];
   document.getElementById("opcion-3").innerHTML = opciones[2];
   document.getElementById("opcion-4").innerHTML = opciones[3];

   if (preguntas.image) {
    document.getElementById("image").src = preguntas.image;
    document.getElementById("image").style.display = "";
  } else {
    document.getElementById("image").style.display = "none";
  }
}
/* desarrollar idea para utilizar solo 2 preguntas en vez de 4
function chargequestions2 (index){
document.getElementById("pregunta").innerHTML = preguntas.pregunta;
   document.getElementById("opcion-1").innerHTML = opciones[0];
   document.getElementById("opcion-2").innerHTML = opciones[1];
}
*/

async function selectoption(index){
    let validator = opciones[index] == preguntas.respuesta;
    if(validator){
    await Swal.fire({
            title:"Correcta",
            text:"Perfecto",
            icon: "success",
            timer: 1500,
            timerProgressBar:true,
        });
        score++;
    } else{
        await Swal.fire({
            title:"Incorrecta",
            text:`La respuesta es ${preguntas.respuesta}`,
            icon: "error",
            timer: 2000,
            timerProgressBar:true,
           
        })
    }
    INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= questions.length) {
    await Swal.fire({
      title: "Felicidades llegaste hasta el final",
      text: `Puntuacion: ${score}/${questions.length}`,
    });
    INDEX_PREGUNTA = 0;
    score = 0;
    
}
 chargequestions(INDEX_PREGUNTA);
    
}
/*
function puntuar(index){
  if(score > 5){
       Swal.fire({
            title:"Tu nota puede mejorar",
            
        });
        score++;
    } else{
         Swal.fire({
            title:"Repite",
            
        })
    }

  }
*/