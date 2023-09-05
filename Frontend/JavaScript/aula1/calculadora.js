function calculadora() {
    const operacao =  Number (prompt('Escolha uma operação:\n1-Adição\n2-Subtração\n3-Multiplicação\n4-Divisão real\n5-Divisão inteira\n6-Potenciação'));
    console.log(operacao);

    //Validando a escolha da operação
    if (!operacao || operacao>= 7) {
        alert('Operação inválida');
        calculadora();
    } else{
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 =  Number(prompt('Insira o segundo valor valor'));
        let resultado;
        
        //Validando a entrada dos números
        //Como as variáveis foram definidas dentro do bloco else, defini as funções dentro do próprio else para que os valores pudessem ser acessadps.
        if(!n1 || !n2){
            alert(`Parâmetros inválidos`)
        } else{
        //Definindo as funções
        function adicao() {
            resultado =n1 + n2;
            alert (`${n1} + ${n2}= ${resultado}`);  
            again();
        }
        function subtracao() {
            resultado =n1 - n2;
            alert (`${n1} - ${n2}= ${resultado}`);
            again();  
        }
        function multiplicacao() {
            resultado =n1 * n2;
            alert (`${n1} * ${n2}= ${resultado}`);
            again();  
        }
        function divReal() {
            resultado =n1 / n2;
            alert (`${n1} / ${n2}= ${resultado}`);
            again();  
        }
        function divInteira() {
            resultado =n1 % n2;
            alert (`${n1} % ${n2}= ${resultado}`);
            again();  
        }
        function potenciacao(){
            resultado =n1 ** n2;
            alert (`${n1} elevado a ${n2} = ${resultado}`);
            again();   
        }
        //Nova operação automático (sem precisar atualizar)
        function again(){
          decisao = Number(prompt('Deseja fazer uma nova operação?\n1-Sim.\n2-Não.')); 
          //Agindo com a decisao
          if(decisao==1){
            calculadora();
          } else if(decisao == 2){
            alert('Entao tabo, tchau tchau :)');
          } else{
            alert('Parâmetros errados :(');
            again();
          }
        }
     
        }   
    }   

    //Definindo quando cada função será usada
    if(operacao == 1) {
        adicao();
    }
    if(operacao == 2){
        subtracao();
    }
    if(operacao == 3){
        multiplicacao();
    }
    if(operacao == 4){
        divReal();
    }
    if(operacao == 5){
        divInteira();
    }
    if(operacao == 6){
        potenciacao();
    }
    
}
calculadora();