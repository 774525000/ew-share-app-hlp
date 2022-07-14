const readBtn = document.querySelector('.read-btn')
const saveBtn = document.querySelector('.save-btn')
const txt = document.querySelector('#txt')


readBtn.addEventListener('click', async () => {
    const handlerList = await window.showOpenFilePicker()

    txt.textContent = ''

    for await (const handler of handlerList) {
        if(handler.kind !== 'file' || !handler.name.endsWith('.txt')) {
            return
        }
        const file = await handler.getFile()
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = function () {
            txt.textContent += this.result.toString()
        }
    }

})