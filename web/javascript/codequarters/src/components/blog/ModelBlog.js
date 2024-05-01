import DataPosts from '/src/data/DataPosts.js'

class ModelBlog extends HTMLElement {
    constructor() {
        super()
        this.appendChild(this.build())
    }

    getPostName() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('post');
    }

    getPostData(postPath) {
        return DataPosts.find(post => post.path === postPath)
    }

    build() {
        const postPath = this.getPostName()
        const post = this.getPostData(postPath)
        document.title = 'Blog | ' + post.title

        const componentRoot = document.createElement('div')
        componentRoot.classList.add('mx-auto')
        componentRoot.style = 'max-width: 1000px'
        componentRoot.appendChild(this.postHeader(post))
        componentRoot.appendChild(this.postBody(post))
        
        return componentRoot
    }

    postHeader(post) {
        const title = document.createElement('h1')
        title.innerHTML = post.title

        const author = document.createElement('span')
        author.innerHTML = 'by ' + post.author

        const date = document.createElement('span')
        date.innerHTML = 'in ' + post.date.toLocaleDateString()

        const baseHeader = document.createElement('div')
        baseHeader.classList.add('d-flex', 'gap-2', 'mb-3')
        baseHeader.appendChild(author)
        baseHeader.appendChild(date)

        const postHeader = document.createElement('div')
        postHeader.appendChild(title)
        postHeader.appendChild(baseHeader)

        return postHeader
    }

    postBody(post) {
        const postBody = document.createElement('div')
        postBody.innerHTML = post.content

        return postBody
    }
}
customElements.define('model-blog', ModelBlog)

export default ModelBlog