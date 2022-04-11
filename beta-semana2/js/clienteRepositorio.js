class ClienteRepositorio {
    // Classe (Repositório) utilizada para controle das informações
    constructor() {
        this._clientes = []
        this._chaveCliente = 'carros'
    
        if (localStorage.getItem(this._chaveCliente) === null) {
          localStorage.setItem(this._chaveCliente, JSON.stringify(this._clientes))
        }
      }
    
      _formatarClientes() {
        let clientesJson = localStorage.getItem(this._chaveCliente)
        let clientesSemClasse = JSON.parse(clientesJson)
        this._clientes = clientesSemClasse.map(
          cliente => new Cliente(cliente._nome, cliente._cpf, cliente._telefone, cliente._endereco)
        )
      }
    
      salvarCliente(cliente) {
        if (cliente instanceof Cliente) {
          this._formatarClientes()
    
          this._clientes.push(cliente)
          localStorage.setItem('clientes', JSON.stringify(this._clientes))
        }
      }
    
      listarClientes() {
        this._formatarClientes()
        return [...this._clientes]
      }
    
      filtrarClientesPorNome(nome) {
        this._formatarClientes()
    
        this._clientes.filter(cliente => cliente.getNome() === nome)
      }
    
      removerCliente(nome) {
        // Busca os clientes do localstorage
        this._formatarClientes()
    
        // Remove o cliente dos nossos clientes
        this._clientes = this._clientes.filter(cliente => cliente.getNome() !== nome)
    
        // Salva os clientes no localstorage
        localStorage.setItem('clientes', JSON.stringify(this._clientes))
      }
    
      editarCliente(novoCliente) {
        // Busca os clientes do localstorage
        this._formatarClientes()
    
        // Edita o carro dos nossos carros
        // let index = this._carros.findIndex(carro => carro.getModelo() === novoCarro.getModelo())
        // this._carros[index] = novoCarro
    
        this._clientes = this._clientes.map(cliente => {
          if (cliente.getNome() === novoCliente.getNome()) {
            return novoCliente
          } else {
            return cliente
          }
        })
    
        // Salva os clientes no localstorage
        localStorage.setItem(this._chaveCliente, JSON.stringify(this._clientes))
      }
}