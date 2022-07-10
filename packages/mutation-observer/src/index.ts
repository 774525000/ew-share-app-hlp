import AutoObserver from "./observer"

const app: HTMLElement = document.querySelector('#app')
const btnList: HTMLElement = document.querySelector('.btn-list')


const addChildFn = () => {
    const p = document.createElement('p')
    p.innerHTML = new Date().getTime().toString()
    app.appendChild(p)
}

const removeChildFn = () => {
    if (app.children.length > 0) {
        app.removeChild(app.lastElementChild)
    }
}

const addAttrFn = () => {
    app.dataset.t = new Date().getTime().toString()
}

const removeAttrFn = () => {
    app.removeAttribute('data-t')
}

const map = new Map(
    [
        ['addChild', addChildFn],
        ['removeChild', removeChildFn],
        ['addAttr', addAttrFn],
        ['removeAttr', removeAttrFn],
    ]
);

btnList.addEventListener('click', (evt: Event) => {
    const target = <HTMLElement>evt.target
    if (target.nodeName.toLowerCase() !== 'button') {
        return
    }
    map.get(target.dataset.type)()
})


new AutoObserver({el: '#app'}).observe()