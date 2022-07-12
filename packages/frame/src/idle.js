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

export const run = () => {
    idle()
}