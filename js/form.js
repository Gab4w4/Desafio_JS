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

function Enviar() {

    if (data && data.nome) {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
        window.location.reload();
    }

}