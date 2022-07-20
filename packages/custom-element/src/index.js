class CustomElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })

        const tpl = document.querySelector('#tpl')
        const tplCloned = document.importNode(tpl.content, true)
        this.shadowRoot.appendChild(tplCloned)
    }


    applyStyle() {
        const color = this.getAttribute('color') || 'lightblue'
        const slot = this.shadowRoot.querySelector('slot')
        const p = slot.ownerDocument.querySelector('p')
        p.style.color = color
    }

    attributeChangedCallback(attr, value) {
        console.log(`attr '${attr}' changed：${value}`)
        this.applyStyle()
    }

    static get observedAttributes() {
        return ['color']
    }
}


customElements.define('custom-element', CustomElement)


const customElm = document.querySelector('custom-element')

const randomInt = () => Math.floor(Math.random() * 256)

document.body.addEventListener('click', () => {
    const rgb = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`
    customElm.setAttribute('color', rgb)
})