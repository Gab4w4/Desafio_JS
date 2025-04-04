let data;
//class contato

class Contato {
    
    constructor(nome, email, telefone, tipoContato, mensagem){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form){
    data = new Contato(
              form.elements.namedItem("nome").value,
              form.elements.namedItem("email").value, 
              form.elements.namedItem("telefone").value, 
              form.elements.namedItem("tipoContato").value, 
              form.elements.namedItem("mensagem").value
          );
      console.log(data);
  }

const button = document.getElementById('btnEnviar');
const popup = document.getElementById('pop-up');
const buttonConfirm = document.getElementById('buttonConfirm');
const closePopup = document.getElementById('closePopup');

button.addEventListener("click", function(event) {
    event.preventDefault();
    popup.style.display = "flex";
});

buttonConfirm.addEventListener("click", function(event) {
    Post(form);
    console.log(data);
    popup.style.display = "none";
});

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

function Enviar() {

    if (data && data.nome) {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
        window.location.reload();
    }

}