let texto = document.querySelector("#texto");
texto.textContent = "Matheus";

let nome = prompt("Qual é o seu nome?");
texto.textContent = nome;

if (nome == null){
texto.textContent = 'Seja bem-vindo';
}else{
texto.textContent = nome;
}
