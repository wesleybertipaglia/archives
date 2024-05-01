import DataPosts from '/src/data/DataPosts.js'

class ListPosts extends HTMLElement {
    constructor() {
        super()
        this.appendChild(this.build())
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.appendChild(this.List())

        return componentRoot
    }

    List() {
        const list = document.createElement('div')
        list.classList.add('d-flex', 'flex-column', 'gap-3')
        DataPosts.forEach(post => {
            list.appendChild(this.Item(post))
        })

        return list
    }

    Item(post) {
        let postComponent = document.createElement('post-component')
        postComponent.setAttribute('title', post.title)
        postComponent.setAttribute('author', post.author)
        postComponent.setAttribute('summary', post.summary)
        postComponent.setAttribute('href', post.url)
        
        return postComponent
    }
}
customElements.define('list-posts', ListPosts)

export default ListPosts