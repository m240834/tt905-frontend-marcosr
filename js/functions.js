let url = "https://tt905-atividade7-marcosr.herokuapp.com/books"

async function callFetchWithGet() {
    let headers = new Headers();
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost(title) {
    const options = {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept' : 'application/json',
            'content-type': 'application/json'
        },
        body : JSON.stringify( {
            'title': title
        })
    }
    await fetch(url, options);
}