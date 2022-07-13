##  Intersection Observer API

---

### 作用
<p>Intersection Observer API 提供了一种异步检测目标元素与祖先元素或 viewport(视口) 相交情况变化的方法</p>
<p>
过去，相交检测通常要用到事件监听，并且需要频繁调用 <code>Element.getBoundingClientRect()</code> 方法以获取相关元素的边界信息。事件监听和调用 <code>Element.getBoundingClientRect()</code> 都是在主线程上运行，因此频繁触发、调用可能会造成性能问题。这种检测方法极其怪异且不优雅
</p>

### 优点
- Intersection Observer API 会注册一个回调函数，每当被监视的元素进入或者退出另外一个元素时 (或者 viewport )，或者两个元素的相交部分大小发生变化时，该回调方法会被触发执行。这样，我们网站的主线程不需要再为了监听元素相交而辛苦劳作，浏览器会自行优化元素相交管理

### API链接
[Intersection Observer](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

### 基本用法
```javascript
// 创建oberserver
const options = {
    root: document.querySelector('xxx'),
    rootMargin: '0px',
    threshold: 0.1
}
const observer = new IntersectionObserver(callback, options);

// 观察目标元素
observer.observe(targetElement);
```

### options 配置项
- root： 指定根 (root) 元素，用于检查目标的可见性。必须是目标元素的父级元素。如果未指定或者为null，则默认为浏览器视窗
- rootMargin： 根 (root) 元素的外边距。类似于 CSS 中的 margin 属性，比如 "10px 20px 30px 40px" (top, right, bottom, left)。如果有指定 root 参数，则 rootMargin 也可以使用百分比来取值。该属性值是用作 root 元素和 target 发生交集时候的计算交集的区域范围，使用该属性可以控制 root 元素每一边的收缩或者扩张。默认值为 0
- threshold：可以是单一的 number 也可以是 number 数组，target 元素和 root 元素相交程度达到该值的时候 IntersectionObserver 注册的回调函数将会被执行
