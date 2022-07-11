const app = document.querySelector('#app')
let startTime
let count = 0

function anim(timestamp) {
    if (startTime === undefined) {
        startTime = timestamp
    }
    const t = timestamp - startTime

    app.style.transform = `translateX(${Math.min(0.1 * t, 200)}px)`

    if (t < 2000) {
        count++
        requestAnimationFrame(anim)
    } else {
        console.log(count)
    }
}

/*
requestAnimationFrame(anim)*/


const idle = () => {
    console.log(1)

    requestIdleCallback(() => {
        console.log(2)
    })

    setTimeout(() => {
        console.log(3)
    }, 0)

    Promise.resolve(4).then(val => {
        console.log(val)
    })
}

idle()