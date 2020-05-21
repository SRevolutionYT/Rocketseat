var minhaPromisse = function(){
    //resolve=sucesso reject=falha
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/SRevolutionYT');
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject('ERROR na requisição');
                }
            }
        }
    });
}

minhaPromisse();
.then(function(response) {
    console.log(response);
})
.catch(function(error) {});