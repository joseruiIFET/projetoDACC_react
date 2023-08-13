// src/models/Professor.js

class Professor {
    constructor(nome = '', sexo = '', idade = 0, cpf = '') {        
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.cpf = cpf;
    }
}

export default Professor;
