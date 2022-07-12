##  Navigator.sendBeacon

---

### 作用
Navigator.sendBeacon 方法可用于通过 HTTP POST 将少量数据 异步 传输到 Web 服务器。
它主要用于将统计数据发送到 Web 服务器，同时避免了用传统技术（如：XMLHttpRequest）发送分析数据的一些问题。

### 传统发送统计数据的方法
- 发起一个同步 XMLHttpRequest 来发送数据
- 创建一个 <img> 元素并设置 src，大部分用户代理会延迟卸载（unload）文档以加载图像
- 创建一个几秒的 no-op 循环

### 传统方法的缺点
- 上述的所有方法都会迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚。下一个页面对于这种较差的载入表现无能为力

### Navigator.sendBeacon 的优点
1. 很好的在文档卸载期间发送数据
2. 异步发送，不会阻止页面卸载

### API链接
[Navigator.sendBeacon](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon)

### 基本用法
```javascript
navigator.sendBeacon(url, data)
```
