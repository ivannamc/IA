var frase = "ivanna"; //cifrar... search, replace
var mueva = 2;
var cesar = "";
//z + 2 = b
// b - 2 = z
for(var i = 0; i < frase.length; i++)
{
	var tmp = frase.charAt(i);
	var ascii = tmp.charCodeAt() + mueva;
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
alert("Original: " + frase);
alert("Cesar: " + cesar);