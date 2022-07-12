import axios from "axios"

const uploadUrl = 'http://127.0.0.1:5000/upload'
// 点击浏览器刷新按钮，会404
window.addEventListener('beforeunload', async () => {
    const data = await axios.post(uploadUrl)
    console.log(data)
})


/*window.addEventListener('beforeunload', async () => {
    const request = await fetch(uploadUrl, {
        method: 'post'
    })
    const res = await request.json()
    console.log(res)
})*/


// 点刷新按钮不会报404
/*window.addEventListener('beforeunload', () => {
    window.navigator.sendBeacon(uploadUrl)
})*/

