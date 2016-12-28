class Conta {

    constructor(nome) {
        this.nome = nome;
    }
}

function exibeNome(nome) {
    alert(this.nome);
}

class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

