function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

function clicou(){
    //    alert("Obrigada por clicar");
        document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    }

function redirecionar(){
    window.location.href = "https://globallabs.academy/";  //mesma aba
//    windows.open("https://globallabs.academy/"); //outra aba
}


function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

/*exemplo alterando varios objetos passando o parametro elemento
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
*/



/*exemplo alterando um unico objeto mousemove
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
*/




/*exemplo de print na tela
function clicou(){
    //    alert("Obrigada por clicar");
        document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    }
*/


/* teste 
var nome = "Erika";
var idade = 44;
var idade2 = 1;
var frase = "O Japão é o melhor time do mundo"
//alert(nome + " tem "+ idade + " anos.");
//alert(idade+idade2)
console.log(nome);
console.log(idade+idade2);
//console.log(frase.replace("Japão","Brasil"));
console.log(frase.toLowerCase());
*/

/*array
var lista = ["maça","pera","laranja"];
lista.push("uva");
//console.log(lista.length);
//console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/

//dicionario
/*var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "maça", cor:"vermelha"},{nome: "uva", cor:"vinho"}]
alert(frutas[1].nome);

*/

/*condicionais
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/
//repetição
/*var count = 0;
while (count < 5) {
    console.log(count);
//    count = count + 1;
    count++;
}

var count;
for(count=0;count <=5;count++){
    console.log(count);
};
*/
/*date
var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());
*/

/*funcoes
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome,novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão","Japão","Brasil"));




function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("qual sua idade?");
console.log(validaIdade(idade));

*/