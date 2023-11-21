var gitHubUser = window.prompt('Qual seu usuário no GitHub?')
// var youtubeUser = window.prompt('Qual seu usuário no Youtube?')
// var facebookUser = window.prompt('Qual seu usuário no Facebook?')
// var instagramUser = window.prompt('Qual seu usuário no Instagram?')
// var twitterUser = window.prompt('Qual seu usuário no Twitter?')

const linksSocialMedia = {
    github: gitHubUser,
    youtube: gitHubUser,
    facebook: gitHubUser,
    instagram: gitHubUser,
    twitter: gitHubUser
}

function changeSocialMedia() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }    
}

changeSocialMedia()

function getGithubProfileInfo() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    fetch(url) //pega o conteudo da url
    .then(response => response.json()) //transforma o conteudo em json
    .then(data => {
        title.textContent = `${data.name} | Do While 2021`
        userName.textContent = data.name
        userId.textContent = data.name
        gitUrl.href = data.html_url
        location.textContent = data.location
        bio.textContent = data.bio
        profileImg.src = data.avatar_url

    })
}

getGithubProfileInfo()