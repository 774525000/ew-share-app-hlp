##  Broadcast Channel API

---

### 作用
Broadcast Channel API 可以实现同 源 下浏览器不同窗口，Tab 页，frame 或者 iframe 下的 浏览器上下文 (通常是同一个网站下不同的页面) 之间的简单通讯

### 优点
1. 很轻松的就能够在多个标签页或者窗口中进行通信（比如用户同时开了两个tab页，在一个tab页中退出登录了，可以使用此api更新另外一个tab页）

### API链接
[Broadcast Channel](https://developer.mozilla.org/zh-CN/docs/Web/API/Broadcast_Channel_API)

### 基本用法
```javascript
// 创建广播
const bc = new BroadcastChannel('test_channel')

// 发送广播
bc.postMessage('This is a test message.')

// 接收广播
bc.onmessage = function (ev) { 
    console.log(ev)
}

// 关闭广播
bc.close()
```
