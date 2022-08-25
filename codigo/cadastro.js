function cadastro(){
    var vnome = document.getElementById("nome");
    var vemail = document.getElementById("email");
    var vsenha = document.getElementById("senha");
    var vgenero = document.getElementById("genero");
    var vdate = document.getElementById("date");    

    var dados = JSON.parse(localStorage.getItem("dadosCadastro"));
    if(dados==null){
        localStorage.setItem("dadosCadastro","[]")
        dados=[];
    }
    var auxCadastro={
        nome: vnome.value,
        email: vemail.value,
        senha: vsenha.value,
        genero: vgenero.value,
        date: vdate.value
    }
    console.log("oi")
    dados.push(auxCadastro);
    localStorage.setItem("dadosCadastro",JSON.stringify(dados));
    atualizarlista();
}

function atualizarlista(){
    var lista = document.getElementById("filler");
    var dados = JSON.parse(localStorage.getItem("dadosCadastro"));
    if(dados==null){
        return;
    }
    var texto = ""
    dados.forEach(e => {
        texto += `<li><b>Nome:</b> ${e.nome}  <b>Email</b>: ${e.email}  <b>Senha</b>: ${e.senha}  <b>Data de Nascimento</b>: ${e.date}  <b>Genero</b>: ${e.genero} </li>`
    })
    lista.innerHTML=texto
}

window.onload=()=>{
    atualizarlista();
}