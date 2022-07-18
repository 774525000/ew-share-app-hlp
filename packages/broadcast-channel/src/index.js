const loginBtn = document.querySelector('#login')
const existBtn = document.querySelector('#exist')
const loginInfo = document.querySelector('#info')


const channel = new BroadcastChannel('loginChannel')

const onMessage = ({type, data}) => {
    if (type === 'login') {
        loginInfo.textContent = data
    }
}

const changeLoginInfo = info => {
    onMessage(info)
    channel.postMessage(info)
}

channel.onmessage = function (params) {
    onMessage(params.data)
}

loginBtn.addEventListener('click', () => {
    const info = {
        type: 'login',
        data: '用户已登录'
    }
    changeLoginInfo(info)
})


existBtn.addEventListener('click', () => {
    const info = {
        type: 'login',
        data: '用户未登录'
    }
    changeLoginInfo(info)
})