const banco = require('./index')


    async function inicio(){
        const container = document.getElementById('container');
                    container.innerHTML=""
                    alert("o2la")
        
        }
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
        }
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
                    busca.innerHTML+=` <h3> Buscar Matrícula</h3>`
                    busca.appendChild(inputar)
                    busca.appendChild(submeter)
                    busca.innerHTML += `<button onclick="iniciar()">Voltar</button>` 
                }
        async function criar(){
            inicio()
            const criar = document.createElement('div')
                criar.className= 'botoes'
                criar.innerHTML+= `<p> Nome:</p>  <input type="text" class="botao">  <p>Data de nascimento:</p> <input type="date" class="botao">
                    <p>salario</p>
                    <input type="number" class="botao">
                    <p>Cargo</p>
                    <input input="text" class="botao">
                    <input type="submit" value="Cadastrar"> 
                    <button onclick="iniciar()">Voltar</button>`
                   
                    
                    container.appendChild(criar)
                 
            
        }
        async function listar(){
    
            inicio()
            
          let teste = "velhobit"
            const listar = document.createElement('div')
                listar.className="lista"
                listar.innerHTML=` <p> Nome: ${teste} Data de nascimento:${teste} Cargo:${teste} Salário ${teste} <span>Editar</span> <span>Deletar</span>`
               
         
                container.appendChild(listar)
                
                    
        }