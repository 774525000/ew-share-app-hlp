interface IObserver {
    observe: () => void,
    disconnect: () => void
}

interface IOptions {
    el: string
}


export default class AutoObserver implements IObserver {
    private element: HTMLElement
    private container: HTMLElement
    private observer: MutationObserver

    constructor(
        private options: IOptions
    ) {
        this.init()
    }

    private init() {
        this.element = document.querySelector(this.options.el)
        if (!this.element) {
            throw new Error('invalid dom')
        }

        this.observer = new MutationObserver(this.callback.bind(this))
        this.container = document.createElement('div')
        this.container.classList.add('observer-container')
        const style = document.createElement('style')
        style.appendChild(document.createTextNode(
            `
                .observer-container {
                    margin: 0;
                    position: fixed;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    max-height: 90vh;
                    box-sizing: border-box;
                    overflow: auto;
                    padding: 20px;
                    white-space: pre;
                    box-shadow: 2px 2px 4px rgba(0, 0, 0, .12), -2px -2px 4px rgba(0, 0, 0, .12);
                }
                
                .observer-container:empty {
                    display: none;
                }
            `
        ))
        document.body.appendChild(this.container)
        document.head.appendChild(style)
        this.updateContainer()
    }

    private callback() {
        this.updateContainer()
    }

    private updateContainer() {
        this.container.textContent = this.element.outerHTML.replace(/></g, '>\n<')
    }

    observe() {
        this.observer.observe(this.element, {
            childList: true,
            subtree: true,
            attributes: true
        })
    }

    disconnect() {
        this.observer.disconnect()
    }
}