import DataLinks from "/src/data/DataLinks.js"

class Header extends HTMLElement {
    constructor() {
        super()
        this.appendChild(this.build())
    }

    build() {
        const content = document.createElement('nav')
        content.classList.add('d-flex', 'justify-content-between', 'container', 'p-3')
        content.appendChild(this.home())
        content.appendChild(this.ListLinks())

        const componentRoot = document.createElement('header')
        componentRoot.classList.add('bg-light')
        componentRoot.appendChild(content)

        return componentRoot
    }

    home() {
        const logo = document.createElement('img')
        logo.classList.add('logo')
        logo.src = '/src/assets/favicon.svg'
        logo.alt = 'Home'
        logo.style = 'height: 2rem;'

        const logoText = document.createElement('span')
        logoText.textContent = 'Home'

        const home = document.createElement('a')
        home.classList.add('d-flex', 'gap-2', 'container', 'align-items-center')
        home.href = DataLinks.home.url
        home.append(logo)
        home.append(logoText)

        return home
    }

    ListLinks() {
        const list = document.createElement('ul')
        list.classList.add('d-flex', 'gap-2', 'list-unstyled', 'm-0')
        DataLinks.nav.map(linkItem => {
            let listItem = document.createElement('li')
            listItem.appendChild(this.NewLink(linkItem))
            list.appendChild(listItem)
        }).join('')

        return list
    }

    NewLink(linkItem) {
        let link = document.createElement('a')
        link.href = linkItem.url
        link.textContent = linkItem.name

        return link
    }
}
customElements.define('header-component', Header)

export default Header