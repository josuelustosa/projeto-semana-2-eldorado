console.log("OS JS TÃO SENDO CHAMADOS!!!")

class Cliente {
    constructor (nome, cpf, telefone, endereco) {
      this._nome = nome
      this._cpf = cpf
      this._telefone = telefone
      this._endereco = endereco
    }
  
    getNome() {
      return this._nome
    }
  
    getCpf() {
      return this._cpf
    }
  
    getTelelfone() {
      return this._tel
    }
  
    getEndereco() {
      return this._endereco
    }
}