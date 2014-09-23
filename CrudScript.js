window.onload = function()
{
inicio();
}
var globaltmp = "";
//Clousure...
function inicio()
{
//localStorage...
//Guarda a los usuarios...
var listadoPersonas = [];
// si localStorage tiene algo...
if(localStorage.getItem("listado"))
{
var objTMP = eval(localStorage.getItem("listado"));
var id = pn = pa = em = fn = "";
for(var i in objTMP)
{
var id = objTMP[i].identificacion;
var pn = objTMP[i].primernombre;
var pa = objTMP[i].primerapellido;
var em = objTMP[i].email;
var fn = objTMP[i].fechanacimiento;
var nuevaPersona = new persona(id, pn, pa, em, fn);
listadoPersonas.push(nuevaPersona);
}
imprimeUsuarios();
}
//globaltmp = listadoPersonas;
var elementos = ["identifica", "nombre", "apellido", "email", "fechanace"];
var limpiarCampos = function()
{
for(var i = 0; i < elementos.length; i++)
{
nom_div(elementos[i]).value = "";
}
}
//Declarada...
function imprimeUsuarios()
{
var ediElimina = "";
var txt = "<table border = '0' width = '100%'>";
txt += "<tr><td width = '5%'>ID</td>";
txt += "<td width = '25%'>Usuario</td>";
txt += "<td width = '20%'>E-mail</td>";
txt += "<td width = '10%'>Fecha</td>";
txt += "<td width = '10%'>Edad</td>";
txt += "<td width = '10%'>EDITAR</td>";
txt += "<td width = '10%'>ELIMINA</td></tr>";
for(var i = 0; i < listadoPersonas.length; i++)
{
txt += "<tr>"+(listadoPersonas[i].imprime(i))+"</tr>";
}
txt += "</table>";
nom_div("imprime").innerHTML = txt;
//Poner el listener para editar y eliminar...
for(var i = 0; i < listadoPersonas.length; i++)
{
nom_div("e_" + i).addEventListener('click', function(event)
{
var ind = event.target.id.split("_");
var idUser = listadoPersonas[ind[1]].identificacion;
alert("Edita: " + idUser);
});
nom_div("d_" + i).addEventListener('click', function(event)
{
var ind = event.target.id.split("_");
var idUser = listadoPersonas[ind[1]].identificacion;
alert("Edita: " + idUser);
});
}
}
function existeUsuario(id, email)
{
var existe = 0;
for(var i in listadoPersonas)
{
//Cédula...
if(listadoPersonas[i].identificacion === id)
{
existe = 1; // la cédula existe...
break;
}
//Correo existe...
if(listadoPersonas[i].email.toLowerCase() === email.toLowerCase())
{
existe = 2; //El correo existe...
break;
}
}
return existe;
}
function persona(id, pn, pa, em, fe)
{
this.identificacion = id;
this.primernombre = pn;
this.primerapellido = pa;
this.email = em;
this.fechanacimiento = fe;
this.calculaEdad = function()
{
var fecha_actual = new Date();
var parteFn = this.fechanacimiento.split("-");
var fechaCompara = new Date(parteFn[0], parteFn[1], parteFn[2]); //año, mes día
return Math.floor((fecha_actual - fechaCompara) / 1000 / 3600 / 24 / 365);
//Milisegundos, segundos en una hora, horas en un día, días en un año...
}
this.imprime = function(cont)
{
var txt = "<td>" + this.identificacion + "</td>";
txt += "<td>" + this.primernombre + " " + this.primerapellido + "</td>";
txt += "<td>" + this.email + "</td>";
txt += "<td>" + this.fechanacimiento + "</td>";
txt += "<td>" + this.calculaEdad() + "</td>";
txt += "<td><a href = 'javascript:;' id = 'e_"+cont+"'>[EDITAR]</a></td>";
txt += "<td><a href = 'javascript:;' id = 'd_"+cont+"'>[ELIMINAR]</a></td>";
return txt;
}
}
/*
Ajax -> 2005
Hotmail -> 2MB
gmail.com -> 1GB -> Ajax
Ajax -> WebSockets -> Comet...
javascript
XML
CSS
WebSockets -> WebRTC...
Skype -> Microso
Google Wave ->
Orkut ->
*/
//Función que ejecuta el clic del botón, através de un listener...
nom_div("guarda").addEventListener('click', function(event)
{
var valores = []; //Guarda los datos ingresados...
var correcto = true;
for(var i = 0; i < elementos.length; i++)
{
if(nom_div(elementos[i]).value == "")
{
alert("Digite todos los campos");
nom_div(elementos[i]).focus();
correcto = false;
break;
}
else
{
valores[i] = nom_div(elementos[i]).value;
}
}
//Almacenamiento en la clase...
if(correcto == true)
{
var existeDatos = existeUsuario(valores[0], valores[3]);
if(existeDatos == 0) //
{
if(ValidaEmail(valores[3]) == true) //
{
var nuevaPersona = new persona(valores[0], valores[1], valores[2], valores[3], valores[4]);
listadoPersonas.push(nuevaPersona);
//globaltmp = listadoPersonas;
localStorage.setItem("listado", JSON.stringify(listadoPersonas));
imprimeUsuarios();
limpiarCampos();
}
else
{
alert("El correo no es válido");
nom_div(elementos[3]).focus();
}
}
else
{
if(existeDatos == 1)
{
alert("El usuario con la cédula: " + valores[0] + " Ya existe");
nom_div(elementos[0]).focus();
}
else
{
alert("El correo : " + valores[3] + " Ya existe");
nom_div(elementos[3]).focus();	
}
}
}
});
function ValidaEmail(email)
{
var emailReg = /^([\da-zA-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
if(!emailReg.test(email))
{
return false;
}
else
{
return true;
}
}
function nom_div(div)
{
return document.getElementById(div);
}
}