const btn = document.querySelector('button')
const div = document.querySelector('div')


const getPosition = () => {
    navigator.geolocation.getCurrentPosition(res => {
        doSomething(res)
    }, () => {
        console.log('糟糕，你拒绝了位置权限')
    })
}

const doSomething = ({coords: {latitude, longitude}})=> {
    div.textContent = `你所在的 纬度：${latitude}, 经度：${longitude}`
}

const requestPermission = () => {
    const res = confirm('此操作需要获取用户权限')
    if(res) {
        getPosition()
    } else {
        console.log('用户不想被我们知道位置')
    }
}

btn.addEventListener('click', async () => {
    const result = await navigator.permissions.query({
        name: 'geolocation'
    })

    switch (result.state) {
        case 'prompt':
            console.log('未申请过，需要申请')
            requestPermission()
            break
        case 'granted':
            console.log('申请过了，同意了')
            getPosition()
            break
        case 'denied':
            console.log('申请过了，拒绝了')
            break
        default:
            throw new Error('unknown state')
    }
})