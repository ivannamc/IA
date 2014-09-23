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
 //Expresada...
 listadoPersonas = [];
 var indEdita = -1; //El índice de Edición...
	if(localStorage.getItem("listado"))
	{
	var objTMP = eval(localStorage.getItem("listado"));
	@@ -26,16 +19,8 @@ function inicio()
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
@@ -60,32 +45,82 @@ function inicio()
	{
	var ind = event.target.id.split("_");
	var idUser = listadoPersonas[ind[1]].identificacion;
 	alert("Edita: " + idUser);
 	//alert("Edita: " + idUser);
 	//accionPersona(idUser, 1);
 	ind = buscaIndice(idUser);
 	if(ind >= 0)
 	{
 		nom_div("identifica").value = listadoPersonas[ind].identificacion;
 		nom_div("nombre").value = listadoPersonas[ind].primernombre;
 		nom_div("apellido").value = listadoPersonas[ind].primerapellido;
 		nom_div("email").value = listadoPersonas[ind].email;
 		nom_div("fechanace").value = listadoPersonas[ind].fechanacimiento;
 		indEdita = ind;
 	}
 	else
 	{
 		alert("No existe el ID");
 	}
	
});
nom_div("d_" + i).addEventListener('click', function(event)
{
var ind = event.target.id.split("_");
var idUser = listadoPersonas[ind[1]].identificacion;
 alert("Edita: " + idUser);
 //alert("Elimina: " + idUser);
 //accionPersona(idUser, 2);
	 if(confirm("¿Está segur@ de realizar está acción?"))
 	{
	 	listadoPersonas.splice(listadoPersonas[ind],1); 
		localStorage.setItem("listado", JSON.stringify(listadoPersonas));
		window.onload = function()
{
 	}
});
}
}
 function existeUsuario(id, email)

 var buscaIndice = function(id)
{
 var existe = 0;
 var indice = -1;
	for(var i in listadoPersonas)
	{
 	//Cédula...
	if(listadoPersonas[i].identificacion === id)
	{
 	existe = 1; // la cédula existe...
 	indice = i;
	break;
	}
 //Correo existe...
 	if(listadoPersonas[i].email.toLowerCase() === email.toLowerCase())
 	}
 	return indice;
 }




 var limpiarCampos = function()
 {
 indEdita = -1; //No se está editando nada...
 for(var i = 0; i < elementos.length; i++)
 {
 nom_div(elementos[i]).value = "";
 }
 }

 function existeUsuario(id, email)
 {
 var existe = 0; //0 Ningún campo existe...
 for(var i in listadoPersonas)
 {
 //Cédula...
 if(i != indEdita)
{
 existe = 2; //El correo existe...
 break;
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
}
return existe;
@@ -106,6 +141,7 @@ function inicio()
return Math.floor((fecha_actual - fechaCompara) / 1000 / 3600 / 24 / 365);
//Milisegundos, segundos en una hora, horas en un día, días en un año...
}

this.imprime = function(cont)
{
var txt = "<td>" + this.identificacion + "</td>";
@@ -118,24 +154,12 @@ function inicio()
return txt;
}
}
 /*
- Ajax -> 2005
- Hotmail -> 2MB
- gmail.com -> 1GB -> Ajax
- Ajax -> WebSockets -> Comet...
- javascript
- XML
- CSS
- WebSockets -> WebRTC...
- Skype -> Microso
- Google Wave ->
- Orkut ->
- */
 //Función que ejecuta el clic del botón, através de un listener...

nom_div("guarda").addEventListener('click', function(event)
{
 var valores = []; //Guarda los datos ingresados...
 //alert("Presiona");
var correcto = true;
 var valores = [];
for(var i = 0; i < elementos.length; i++)
{
if(nom_div(elementos[i]).value == "")
@@ -150,16 +174,39 @@ function inicio()
valores[i] = nom_div(elementos[i]).value;
}
}
 //Almacenamiento en la clase...
 if(correcto == true)
 //Si correcto es verdadero...
 if(correcto)
{
var existeDatos = existeUsuario(valores[0], valores[3]);
 if(existeDatos == 0) //
 if(existeDatos == 0) //No existe...
{
 if(ValidaEmail(valores[3]) == true) //
 /*
+ NoSQL -> JSON -> BSON, MongoDB, CouchDB
+ SQL -> Relacionales,
+ SQL -> ID
+ XML -> Json
+ select -> find
+ update -> update
+ delete ->
+ insert
+ upsert ->
+ */
 if(ValidaEmail(valores[3]))
{
 var nuevaPersona = new persona(valores[0], valores[1], valores[2], valores[3], valores[4]);
 listadoPersonas.push(nuevaPersona);
 //No se estaba editando...
 if(indEdita < 0)
 {
 var nuevaPersona = new persona(valores[0], valores[1], valores[2], valores[3], valores[4]);
 listadoPersonas.push(nuevaPersona);
 }
 else
 {
 listadoPersonas[indEdita].identificacion = valores[0];
 listadoPersonas[indEdita].primernombre = valores[1];
 listadoPersonas[indEdita].primerapellido = valores[2];
 listadoPersonas[indEdita].email = valores[3];
 listadoPersonas[indEdita].fechanacimiento = valores[4];
 }
//globaltmp = listadoPersonas;
localStorage.setItem("listado", JSON.stringify(listadoPersonas));
imprimeUsuarios();
@@ -186,17 +233,16 @@ function inicio()
}
}
});

function ValidaEmail(email)
{
 var correcto = true;
var emailReg = /^([\da-zA-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
if(!emailReg.test(email))
{
 return false;
 }
 else
 {
 return true;
 correcto = false;
}
 return correcto;
}
function nom_div(div)