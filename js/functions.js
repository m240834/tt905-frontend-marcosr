let url = "https://tt905-atividade7-marcosr.herokuapp.com/books/"

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
        console.log("O request GET funcionou");
        output.innerHTML = await response.text();
       
    } else {
        console.log("O request GET deu errado");
    }
    
}

async function callFetchWithPost(title, author, originalyear) {
    const options = {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept' : 'application/json',
            'content-type': 'application/json'
        },
        body : JSON.stringify( {
            'title': title,
            'author': author,
            'originalYearOfPublication': originalyear
        })
    }
    await fetch(url, options);
}
async function callFetchWithPut(id, title, author, originalyear) {
    const options = {
        method: 'PUT',
        mode: 'cors',
        headers:{
            'Accept' : 'application/json',
            'content-type': 'application/json'
        },
        body : JSON.stringify( {
            'title': title,
            'author': author,
            'originalYearOfPublication': originalyear
        })
    }
    await fetch(`${url}${id}`, options);
}
async function callFetchWithDelete(id) {
    const options = {
        method: 'DELETE',
        mode: 'cors',
        headers:{
            'Accept' : 'application/json',
            'content-type': 'application/json'
        },
    }
    await fetch(`${url}${id}`, options);
}

function submitPost(){
    const form = document.forms['postForm'];
    const title = form["title"].value;
    const author = form["author"].value;
    const originalyear = form["originalyear"].value;
    callFetchWithPost(title, author, originalyear);
    return false;
}

function submitPut() {
    const form = document.forms['putForm'];
    const id = form["id"].value;
    const title = form["title"].value;
    const author = form["author"].value;
    const originalyear = form["originalyear"].value;
    callFetchWithPut(id, title, author, originalyear);
    return false;
}
function submitDelete() {
    const form = document.forms['deleteForm'];
    const id = form["id"].value;
    callFetchWithDelete(id);
    return false;
}
