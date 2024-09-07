function search(){

    let resultSection = document.getElementById('results');

    let inputText = document.getElementById('search-bar').value;

    if(!inputText){
        resultSection.innerHTML = '<p>Camelada, você não digitou nada!</p>';
        return
    }
    
    inputText = inputText.toLowerCase();
    
    let results = '';

    for (let d of dataArray){
        
        let titulo = d.titulo.toLowerCase();
        let descricao = d.descricao.toLowerCase();
        let tags = d.tags;

        inputText = inputText.toLowerCase();
        
        if(titulo.includes(inputText) || descricao.includes(inputText) || tags.includes(inputText))
        results += `
        <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${d.titulo}</a>
                </h2>
                <p class="descricao-meta">${d.descricao}</p>
                <a href=${d.link} target="_blank">Ler mais</a>
            </div>
        `;
    }

    if(!results){
        results = `<p>Não encontrei nada sobre isso por aqui. Talvez em algum oásis...</p>`;
    }

    resultSection.innerHTML = results;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}