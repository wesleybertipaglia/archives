function register() {
    event.preventDefault()
    let url = 'http://localhost:3000/posts'
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    console.log(name, email)

    let body = {
        "name":name, "email":email
    }
    makePost(url, body)
}

function makePost(url, body) {
    console.log("Body", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}