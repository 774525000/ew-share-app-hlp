##  CookieStore API

---

### 作用
CookieStore API 接口提供了从页面或service worker异步获取和设置 Cookie 的方法

### 优点
1. 很方便的存取cookie

### API链接
[CookieStore API](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore)

### 基本用法
```javascript
// 设置
cookieStore.set(config)

// 删除
cookieStore.delete(cookie)

// 获取
cookieStore.getAll()

// 监听变化
cookieStore.addEventListener('change', handler)
```
