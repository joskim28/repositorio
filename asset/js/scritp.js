function encriptar(){
passSistema = "nikiniki";
msgError ="Error en la contraseña, vuelve a intentarlo";

var mensaje = document.getElementById("msg").value;
var password= document.getElementById("pass").value;
//alert(mensaje+"+"+password)
if(passSistema == password){
   alert("contraseña correcta");
   document.getElementById("error").innerHTML= "";
var encryted = btoa(mensaje);
//alert(encryted);
document.getElementById("demo1").innerHTML = encryted;

}else{

 alert("F, esa no es");
document.getElementById("Error").innerHTML = msgError;  
}
}
function desencriptar(){
    var mensajeCodigo=document.getElementById("msgcodigo").value;
    var decryted = atob(mensajeCodigo);
    document.getElementById("demo2").innerHTML=decryted;

}

