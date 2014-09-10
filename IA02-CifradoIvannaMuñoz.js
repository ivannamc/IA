var frase = "CIFRADO IVANNA"; 
var corrimiento = 2;
var cesar = "";
var frase1 = frase.toLowerCase();

for(var i = 0; i < frase1.length; i++)
{	

	var tmp = frase1.charAt(i);
	var ascii = tmp.charCodeAt() + corrimiento;
	if(ascii >= 97 && ascii <= 122)
	{
		var fraseCifrada = String.fromCharCode(ascii);
		cesar += fraseCifrada;
	}
	else
	{
		
		cesar += " ";
	}
}
alert("Frase: " + frase);
alert("Cesar: " + cesar);