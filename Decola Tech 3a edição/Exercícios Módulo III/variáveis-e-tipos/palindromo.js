// solução 1
function verificaPalindromo(string1) {
	if (!string1) return;
	console.log(string1 === string1.split('').reverse().join(''));
}
var string_1 = prompt ("Digite a primeira string: ") ;
verificaPalindromo(string_1);

// solução 2

function varificaPalindromo2(string2) {
	if (!string2) return;
	if (!string2.length) return;

	for (var i = 0; i < string2.length / 2; i++) {
		if (string2[i] !== string2[string2.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}
var string2 = prompt("Digite a segunda string: ") ;
varificaPalindromo2(string2);