const box = document.querySelector('#box')


const observer = new ResizeObserver((entries) => {
    entries.forEach(entry => {
        const {inlineSize: contentBoxInlineSize, blockSize: contentBoxBlockSize} = entry.contentBoxSize[0]
        const {inlineSize: borderBoxInlineSize, blockSize: borderBoxBlockSize} = entry.borderBoxSize[0]
        entry.target.textContent = `正常盒模型：width: ${contentBoxInlineSize}，height: ${contentBoxBlockSize}  \n怪异盒模型：width: ${borderBoxInlineSize}，height：${borderBoxBlockSize}
        `
    })
})

observer.observe(box)


box.addEventListener('click', () => {
    box.style.border = '10px solid red';
})