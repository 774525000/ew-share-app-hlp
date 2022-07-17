// 路径匹配
const matchURL = () => {
    const url = 'https://www.baidu.com/login'
    const pattern = new URLPattern({pathname: '/login'})

    const matchSuccess = pattern.exec(url)
    console.log(matchSuccess)

    const errorUrl = 'https://www.baidu.com/login_1'
    const errorPattern = new URLPattern({pathname: '/login'})
    const matchError = errorPattern.exec(errorUrl)
    console.log(matchError)
}

/*matchURL()*/


// params 参数匹配
const matchParams = () => {
    const url = 'https://www.baidu.com/article/123'
    const pattern = new URLPattern({pathname: '/article/:id'})
    const res = pattern.exec(url)
    console.log(res.pathname.groups.id)

    // 通过正则
    const patternByRegExp = new URLPattern({pathname: '/article/:id(\\d+)'})
    const regRes = patternByRegExp.exec(url)
    console.log(regRes.pathname.groups.id)

    const errorUrl = 'https://www.baidu.com/article/123abc'
    const errorRes = patternByRegExp.exec(errorUrl)
    console.log(errorRes)
}

/*matchParams()*/

// 匹配所有
const matchAll = () => {
    const url = 'https://www.baidu.com/article/123'
    const pattern = new URLPattern({pathname: '/article/*'})
    console.log(pattern.exec(url).pathname.groups)

    const url2 = 'https://www.baidu.com/article/abc'
    console.log(pattern.exec(url2).pathname.groups)
}

// matchAll()


// 获取search（query） 参数
const matchQuery = () => {
    const url = 'https://www.baidu.com?page=1&limit=10'
    const pattern = new URLPattern({pathname: '/'})
    console.log(pattern.exec(url).search.groups)
}

matchQuery()