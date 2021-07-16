var itens = [];

function inserirTarefa(){ 

    var tarefa = document.getElementById('tarefa').value;        
    document.getElementById('conteudo').innerHTML = tarefa;

    itens.push(tarefa+'<br>'); 
    var todos = itens.join('');
    document.getElementById('quadro').innerHTML = todos;
    
}

function zerarTarefa() { 

    document.getElementById('conteudo').innerHTML = '';
    document.getElementById('quadro').innerHTML = '';  
    itens.splice(length); //remove todos os elementos
}