function maioridade(){
    // declaração de variaveis
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;

    // output
    if (idade >= 18) { 
        alert(nome + ' é maior de idade.')
    }
    else {
        alert(nome + ' é menor de idade')
    }
}