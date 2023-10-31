if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

function Aleatorio() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "https://youtu.be/YacrKDzDJo4?si=vDvvXnncspBV7UOC&t=60";
}
