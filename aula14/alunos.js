
fetch("./alunos.json")
    .then(response => response.json())  
    .then(data => {
        
        const dataList = document.getElementById('dataList');
        
        
        for (let disciplina in data) {
            if (Object.hasOwnProperty.call(data, disciplina)) {
                const alunos = data[disciplina];  
                const li = document.createElement('li');  
                li.textContent = `${disciplina}: ${alunos.join(', ')}`;  
                dataList.appendChild(li);  
            }
        }
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));  

