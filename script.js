var decisao = 1,
  contador = 1,
  saldoTotal = 0,
  maiorValor = 0,
  media = 0,
  valores = [],
  index = 0,
  nome = prompt(" Bem-Vindo ao banco ! Digite seu Nome"),
  cpf = prompt(" Agora digite seu CPF ");

while (decisao == 1) {
  var Escolha = prompt(" Você gostária de fazer um Saque ou Depósito ? "),
    valor = parseInt(prompt(" Qual valor ?")),
    media = parseFloat(valor / contador);

  if (valor > maiorValor) {
    maiorValor = valor;
  }

  if (Escolha == "Saque") {
    if (valor > saldoTotal || valor < 0) {
      alert(" Você não tem Dinheiro pra Sacar ou Inseriu um valor negativo");
      contador = 1;
    }
    saldoTotal = saldoTotal - parseInt(valor);
  } else {
    saldoTotal = saldoTotal + parseInt(valor);
    valores[index] = valor;
    index++;
  }

  decisao = prompt("Insira 1 para continuar e 2 para parar");

  if (decisao == "2") {
    decisao = 2;
  }

  if (decisao == "1") {
    decisao = 1;
  }

  contador++;
}

if (saldoTotal < 0) {
  saldoTotal = 0;
}

console.log(
  `O Saldo Total É: ${saldoTotal} 
  \nO Maior Valor Inserido Foi: ${maiorValor} 
  \n A média dos valores inseridos foi: ${media} 
  \n O ${nome} De CPF: ${cpf} Inseriu os valores: ${valores} `
);
