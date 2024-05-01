class ModelPost extends HTMLElement {
    constructor() {
        super()
        this.appendChild(this.build())
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.classList.add('card')
        componentRoot.appendChild(this.content())

        return componentRoot
    }

    content() {
        const title = document.createElement('h4')
        title.classList.add('title')
        title.textContent = this.getAttribute('title')

        const summary = document.createElement('p')
        summary.classList.add('summary')
        summary.textContent = this.getAttribute('summary')

        const author = document.createElement('span')
        author.classList.add('author')
        author.textContent = 'by: ' + (this.getAttribute('author') || 'Anonymous')

        const content = document.createElement('a')
        content.href = this.getAttribute('href')
        content.classList.add('card-body', 'text-decoration-none')
        content.appendChild(title)
        content.appendChild(summary)
        content.appendChild(author)

        return content
    }
}
customElements.define('post-component', ModelPost)

export default ModelPost