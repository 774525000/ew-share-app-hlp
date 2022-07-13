const container = document.querySelector('.container')
const content = document.querySelector('.content')


const options = {
    root: container,
    rootMargin: '0px',
    threshold: 0
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
    })
}, options)


observer.observe(content)