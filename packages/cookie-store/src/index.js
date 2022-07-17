const setCookie = () => {
    const day = 24 * 60 * 60 * 1000

    cookieStore.set({
        name: "c1",
        value: "value",
        expires: Date.now() + day
    }).then(() => {
        console.log('set cookie success')
    }, err => {
        console.log(err)
        console.error('set cookie error')
    })
}

/*setCookie()*/


const deleteCookie = () => {
    cookieStore.delete('username').then(() => {
        console.log('success')
    }, err => {
        console.log(err)
    })
}

/*
deleteCookie()*/


const getAllCookie = () => {
    cookieStore.getAll().then(res => {
        console.log(res)
    }, err => {
        console.log(err)
    })
}

/*getAllCookie()*/


const listenCookieChange = () => {
    cookieStore.addEventListener('change', event => {
        console.log(event.changed)
    })
}

listenCookieChange()

setTimeout(() => {
    setCookie()
}, 2000)