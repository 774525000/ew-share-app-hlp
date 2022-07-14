const readBtn = document.querySelector('.read-btn')
const saveBtn = document.querySelector('.save-btn')
const txt = document.querySelector('#txt')


readBtn.addEventListener('click', async () => {
    const options = {
        types: [
            {
                description: 'txt文件选取',
                accept: {
                    'txt/*': ['.txt']
                }
            },
        ],
        excludeAcceptAllOption: true,
        multiple: true
    }

    const handlerList = await window.showOpenFilePicker(options)

    txt.textContent = ''
    for (const handler of handlerList) {
        if (handler.kind !== 'file' || !handler.name.endsWith('.txt')) {
            return
        }
        const file = await handler.getFile()
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = function () {
            txt.textContent += `${this.result}\n`
        }
    }

})


saveBtn.addEventListener('click', async () => {
    const options = {
        types: [
            {
                accept: {
                    'txt/*': ['.txt']
                }
            }
        ]
    }
    const handle = await window.showSaveFilePicker(options)
    const stream = await handle.createWritable()
    await stream.write(txt.textContent)
    stream.close()
})