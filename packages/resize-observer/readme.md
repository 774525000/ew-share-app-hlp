##  Resize Observer API

---

### 作用
<p>Resize Observer API 提供了一种高性能的机制，通过该机制，代码可以监视元素的大小更改，并且每次大小更改时都会向观察者传递通知</p>
<p>存在大量的响应式设计（以及其他相关）技术，它们可以响应元素大小的变化，但是以前，它们的实现常常很笨拙或者说生硬</p>
<p>比如以前经常通过window.resize来观察视口的变化，这样的解决方案仅适用于有限的场景，对性能不利（不断调用上述方法会导致性能严重下降），并且在不更改浏览器窗口大小的情况下通常不起作用</p>

### 优点
1. 能够轻松观察和响应<b>元素内容</b>或<b>边框的大小</b>变化，并以高效的方式做出响应

### API链接
[Resize Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Resize_Observer_API)

### 基本用法
```javascript
// 创建observer实例
const observer = new ResizeObserver(callback);

// 用config配置监听targetNode目标节点的变化
observer.observe(targetNode);

// 之后，可停止观察
observer.disconnect();
```
