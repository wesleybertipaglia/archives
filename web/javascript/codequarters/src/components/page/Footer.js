class Footer extends HTMLElement {
    constructor() {
        super()
        this.appendChild(this.build())
    }

    build() {
        const textContent = document.createElement('p')
        textContent.innerHTML = '&copy; 2023 Made for fun 😎'

        const content = document.createElement('div')
        content.classList.add('container', 'mx-auto')
        content.appendChild(textContent)

        const componentRoot = document.createElement('footer')
        componentRoot.appendChild(content)

        return componentRoot
    }
}
customElements.define('footer-component', Footer)

export default Footer