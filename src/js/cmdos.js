function cmdUm(){

    var pegaDivUm = document.getElementById("msg-principal")

pegaDivUm.style.display = "none"

var pegaDivDois = document.getElementById("msg-secundaria")

pegaDivDois.style.display = "block"

}

function cmdDois(){

    var pegaDivDois = document.getElementById("msg-secundaria")

pegaDivDois.style.display = "none"

var pegaDivTres = document.getElementById("form")

pegaDivTres.style.display = "block"

}

function gotowhatsapp() {


    if(document.getElementById("nome").value === ''){
        alert("Preencha o nome completo!")
    }else{

        var nome = document.getElementById("nome").value;
        var acpum = document.getElementById("acpum").value;
        var acpdois = document.getElementById("acpdois").value;
        var acptres = document.getElementById("acptres").value;
        var acpquatro = document.getElementById("acpquatro").value;
    
       
    
    
        var url = "https://wa.me/5581988533296?text=" 
    + " 🙊 Olá Mamãe, eu "+nome+" estou confirmando a minha presença no *2º aninho de Ryan*!! 🎂 " + "E estarei levando comigo os seguintes acompanhantes:" + "%0a"
    + "" + "%0a"
    + "*Acompanhante 01:* " + acpum + "%0a"
    + "*Acompanhante 02:* " + acpdois + "%0a"
    + "*Acompanhante 03:* " + acptres + "%0a"
    + "*Acompanhante 04:* " + acpquatro + "%0a"
    + "" + "%0a"
    + "*Obrigado por me convidar neste momento tão especial na vida do Ryan, nos veremos no dia 9 de setembro para comemorar essa data do jeitinho que o Ryan pediu, juntinhos(as)*. 💙" + "%0a"

    
    
    
        window.open(url, '_blank').focus();

    }
    
   
}


