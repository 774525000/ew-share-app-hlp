##  URL Pattern API

---

### 作用
URL Pattern API 定义了用于创建 URL 模式匹配器的语法。这些模式可以与 URL 或单个 URL 组件进行匹配

### 优点
1. 能够很好的实现类似于vue-router那样进行路径的匹配，以及参数的获取

### API链接
[URL Pattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)

### 基本用法
```javascript
const url = 'https://www.baidu.com/login'
const pattern = new URLPattern({pathname: '/login'})
const matchSuccess = pattern.exec(url)
```
