//alert("estoy vinculando")

let inputPesoUsuario=document.getElementById("pesousuario")
let inputAlturaUsuario=document.getElementById("alturausuario")
let botonFormulario=document.getElementById("boton")


//detectando de clic eventos en pantalla
//un evento es una interación del usuario (humano) con el codigo (la pagina web)
botonFormulario.addEventListener("click",function(evento){

    //1. se inicia desactivando el comportamiento por defecto
    evento.preventDefault()

    //2. probamos que el evento se esta escuchando con exito 
    /*Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });*/

      let pesoUsuario=inputPesoUsuario.value
      let estaturaUsuario=inputAlturaUsuario.value

      let resultado=document.getElementById("resultado")

      resultado.textContent=(estaturaUsuario)
      let calculoIMC=pesoUsuario/(estaturaUsuario*estaturaUsuario)
      //6A
      let imagenes=document.getElementById("foto")
      resultado.textContent=(calculoIMC)

      //7. se debe decidir sobre el resultado 
      if(calculoIMC<18.5){
        resultado.textContent="ESTAS MUY BAJO PESO..ALERTAAA,alimentateEEE"
       imagenes.src="./img/IMC BAJO PESO"
      }
      else if (calculoIMC>=18.5 && calculoIMC<24.9){
         resultado.te
        resultado.textContent="ESTAS MUY BIENN,TE FELICITO"
      }
      else if (calculoIMC>=24.9 && calculoIMC<29.9){
        resultado.textContent="TE ESTAS SUBISTE DE PESO, DEJA LOS ANTOJOSSSSS"
      }
      else if (calculoIMC>=29.9 && calculoIMC<34.9){
        resultado.textContent="TE PASASTE MUCHOOO, ESTAS OBES@" 
       }
       else {
        resultado.textContent="DEJAR DE COMER TANTOOOS ANTOJOS, QUE SI NO DIOSITO TE VA A RECOJERRR....."
       }
})
