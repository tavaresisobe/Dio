function iguais(a, b){ 
    if (a === b)
    {
      return "Os números " + a + " e " + b + " são iguais." ;
    }
    return "Os números " + a + "e" + b + " não são iguais." ;
  }
  
  function somar(a, b){
    var dez = 'menor', vinte = 'menor' ;
    const soma = a + b ;
    if (soma > 20)
    {
      dez = 'maior' ;
      vinte = 'maior' ;
      return "Sua soma é "+soma+", que é "+dez+" do que 10 e "+vinte+" do que 20." ;
    }else if (soma > 10 && soma < 20)
          {
            dez = 'maior' ;
            vinte = 'menor' ;
            return "Sua soma é "+soma+", que é "+dez+" do que 10 e "+vinte+" do que 20." ;
          }else if (soma < 10)
                {
                  dez = 'menor' ;
                  vinte = 'menor' ;
                  return "Sua soma é "+soma+", que é "+dez+" do que 10 e "+vinte+" do que 20.";
                  }
  }
  
  var a = Number (prompt ("Digite o primeiro número: ")), b = Number (prompt ("Digite o segundo número: ")) ;
  iguais(a,b) ;
  somar(a,b) ;
  
  console.log("" + iguais(a,b) + " " + somar(a,b)) ;