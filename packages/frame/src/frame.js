const app = document.querySelector('#app')
let startTime
let count = 0

const anim = (timestamp) => {
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


export const run = () => {
    requestAnimationFrame(anim)
}
