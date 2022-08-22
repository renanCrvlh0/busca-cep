window.onload = () => {
    
    const btn = document.querySelector('.btn');
    const cep = document.querySelector('#cep');
    
    btn.addEventListener('click', async function(){
        let capturacep = document.querySelector('#cep').value;
        let url = `https://viacep.com.br/ws/${capturacep}/json/`
        try{
            let dados = await fetch(url);
            let retorno = await dados.json();
            for(let campo in retorno){
                if(document.querySelector(`#${campo}`)){
                    document.querySelector('#buscaCep').classList.add('esconde');
                    document.querySelector('#container-tabela').classList.add('container-tabela')
                    document.querySelector('.container-tabela').classList.remove('esconde');
                    document.querySelector('#textoResultado').classList.remove('esconde');
                    document.querySelector(`#${campo}`).innerHTML = retorno[campo]; //(`${campo}`[0].toUpperCase() + `${campo}`.substring(1) + ': ') + // retorno[campo];
                }
            }
            if(cep.value.length != 0){
                const divBtn = document.querySelector('#container-cep');
                const btnVoltar = document.createElement('button');
                divBtn.appendChild(btnVoltar);
                btnVoltar.classList.add('btn2');
                btnVoltar.textContent = 'VOLTAR';
            
                btnVoltar.addEventListener('click', function(){
                    location.reload();
                })
            }
        } 
        catch(error){
            alert('CEP não existe');
            cep.value = '';
        }
        
        // if(cep.value.length != 0){
        //     const divBtn = document.querySelector('#container-cep');
        //     const btnVoltar = document.createElement('button');
        //     divBtn.appendChild(btnVoltar);
        //     btnVoltar.classList.add('btn2');
        //     btnVoltar.textContent = 'VOLTAR';
        
        //     btnVoltar.addEventListener('click', function(){
        //         location.reload();
        //     })
        // }
        
    });   
    
    cep.addEventListener('keypress', async function(e){
        if (e.keyCode == 13){
            let capturacep = document.querySelector('#cep').value;
            let url = `https://viacep.com.br/ws/${capturacep}/json/`
            try{
                let dados = await fetch(url);
                let retorno = await dados.json();
                for(let campo in retorno){
                    if(document.querySelector(`#${campo}`)){
                        document.querySelector('#buscaCep').classList.add('esconde');
                        document.querySelector('#container-tabela').classList.add('container-tabela')
                        document.querySelector('.container-tabela').classList.remove('esconde');
                        document.querySelector('#textoResultado').classList.remove('esconde');
                        document.querySelector(`#${campo}`).innerHTML = retorno[campo]; //(`${campo}`[0].toUpperCase() + `${campo}`.substring(1) + ': ') + // retorno[campo];
                    }
                }
                if(cep.value.length != 0){
                    const divBtn = document.querySelector('#container-cep');
                    const btnVoltar = document.createElement('button');
                    divBtn.appendChild(btnVoltar);
                    btnVoltar.classList.add('btn2');
                    btnVoltar.textContent = 'VOLTAR';
                
                    btnVoltar.addEventListener('click', function(){
                        location.reload();
                    })
                }
            } 
            catch(error){
                alert('CEP não existe');
                cep.value = '';
            }
        }
    })
    
    }