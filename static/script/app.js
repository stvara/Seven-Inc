

(async () => {
    const db = require("./db");
    console.log("come");
  //  const empregados = await db.selecionarEmpregados();
  //  console.log(empregados)  ||-> Teste do banco
    
    
    })();
    






async function inicio(){
    const container = document.getElementById('container');
                container.innerHTML=""
    
    
    } // zera o conteudo do container
    async function iniciar(){
        inicio()
        const opcoes=['Listar Empregados','Buscar Empregado', 'Criar Empregado']
        const funcao=['listar','buscar','criar']
     const inicializacao = document.createElement('div')
        inicializacao.className="botoes"
    
       let h3 = document.createElement('h3')
            h3.innerHTML="Modelo"
            container.appendChild(inicializacao)
            inicializacao.appendChild(h3)
            
            
    
        for(i =0;i <=2;i++){
          
            inicializacao.innerHTML += `<button class="botao" onclick=${funcao[i]}()> ${opcoes[i]} </button> `
        }
    } // cria a tela inicial
    async function buscar(){
        
    inicio()
            const busca = document.createElement('div')
                busca.className="botoes"
            const inputar = document.createElement('input')
                inputar.className="botao"
            const submeter = document.createElement('input')        
                submeter.type="submit"
                submeter.value="Buscar" 


    
            container.appendChild(busca)
                busca.innerHTML+=` 
                <h3> Buscar Matrícula</h3>
                <input type="number" class="botao" id="id">
                <input type="submit" value="buscar" onclick="buscarId()">                
                <button onclick="iniciar()">Voltar</button>` 
            } // faz a busca por ID
    async function criar(){
        inicio()
        const criar = document.createElement('div')
            criar.className= 'botoes'
            criar.innerHTML+= `
            <p> Nome:</p>  <input type="text" class="botao" id="name"> 
             <p>Data de nascimento:</p>
              <input type="date" class="botao" id="bornDate">
            <p>salario</p>
               <input type="number" class="botao" id="salary">
               <p>Cargo</p>
               <input type="text" class="botao" id="position">  
               <input type="submit" value="Cadastrar" onclick="efetuarCadastro()"> 
               <button onclick="iniciar()">Voltar</button>`
               
                
                container.appendChild(criar)
             
        
    } //chama a criação de usuarios
    async function listar(){

        inicio()
        
      let empregado={
          "id": 0,
          "name": "samuel",
          "bornDate":"1996-03-07",
          "position":"desenvolvedor",
          "salary": 1800

      }
        const listar = document.createElement('div')
            listar.className="lista"

            listar.innerHTML=` <p> Nome: ${empregado.name} Data de nascimento:${empregado.bornDate} Cargo:${empregado.position} Salário ${empregado.salary} <button>Editar</button> <button>Deletar</button>`
           
     
            container.appendChild(listar)
            
                
    }//chama a listagem de usuários
    async function efetuarCadastro(){
    const name = document.getElementById("name").value
    const bornDate = document.getElementById("bornDate").value
    const position = document.getElementById("position").value
    const salary = document.getElementById("salary").value

   
    const empregado= {
    "name": name,
    "bornDate": bornDate,
    "position" : position,
    "salary" : salary 
    }
    const db = require("./db")
    
    
    
    if(empregado.name != ""){
        if(empregado.bornDate != ""){
            if(empregado.salary != ""){
                if (empregado.position != ""){
                    let cadastrar = await db.inserirEmpregado(empregado);
                    
                }else{alert("preencha Cargo:")}
            }else{alert("preencha Salário:")}
        }else{alert("preencha Data de nascimento:")}
    }else{alert("preencha seu nome")}
    


} // efetua o cadastro através dos dados do front
    async function buscarId(){
    const id = document.getElementById("id").value
    const db = require('./db')
        if (id != ""){
    let buscaResultado = await db.selecionarEmpregado(id)
        console.log(buscaResultado);
        }else{alert("Digite o numero da matrícula")}
} // busca por id
  