class Contato {

    constructor(nome, sobrenome, email, cpf, telefone, contato, mensagem) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
       }
}

function Post(event, form) {

    event.preventDefault();

    let nome = form.elements.namedItem("nome").value;
    let sobrenome = form.elements.namedItem("sobrenome").value;
    let email = form.elements.namedItem("email").value;
    let cpf = form.elements.namedItem("cpf").value;
    let telefone = form.elements.namedItem("telefone").value;
    let contato = form.elements.namedItem("contato").value;
    let mensagem = form.elements.namedItem("mensagem").value;

    const campos = [nome, sobrenome, email, cpf, telefone, mensagem];

    if (campos.some(campo => campo.trim() === "")) {
        alert("Todos os campos precisam ser preenchidos!");
        return;
    }

    let data = new Contato(nome, sobrenome, email, cpf, telefone, contato, mensagem);
  
            console.log('Dados do usuario: ', data);

            Enviar(data.nome);

            form.reset();
}

function Enviar(User) {
    if (User && User.trim() !== "") {
        alert('Obrigado, sr(a) ' + User + '. Os seus dados foram encaminhados com sucesso');
    }
}