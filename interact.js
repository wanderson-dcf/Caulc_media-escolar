// Evento click para efetuar o calculo.
$('#btnAply').click(
    function aplicar(){
    //Pegando os elementos no html, convertendo e somando numeros.
    let nota1 = $('#nota1').val();
    let nota2 = $('#nota2').val();
    let convertN1 = Number(nota1);
    let convertN2 = Number(nota2);
    let calc = (convertN1 + convertN2) / 2;
    
    // fazendo verificações nos campos.
    let diferent10OrEmpty = convertN1 > 10 || convertN1 == " " || convertN2 > 10 || convertN2 == " ";
    if( diferent10OrEmpty ){
        alert('Numero inserido maior que dez ou campo vazio, verifique e tente de novo!')
    }

    // Verificando a nota média e inserindo os resultados no html.
    let maiorOuIguala6 = calc >= 6;
    if (maiorOuIguala6){
        $('#cardMedia').text(`Nota Média: ${calc}\n`);;
        $('#cardSituation').text(`Situação: Aprovado.`);
    }else {
        $('#cardMedia').text(`Nota: ${calc}\n`);
        $('#cardSituation').text(`Situação: Reprovado.`);
    }
})


$('#reset').click( 
    function reset (){
    let nota1 = $('#nota1').val();
    let nota2 = $('#nota2').val();
   
    let getInput1 = nota1;
    let getInput2 = nota2;
    
    if(getInput1 != "" || getInput2 != ""){
       $('#nota1')
       $('#nota2')
        console.log(test1,test2)
    }
    }
)