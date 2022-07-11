##  MutationObserver

---

### 作用
MutationObserver 接口提供了监视对 DOM 树所做更改的能力

### 优点
1. MutationObserver是异步的，不会阻止浏览器渲染
2. MutationObserver是弱引用的，不会阻止目标节点被垃圾回收

### API链接
[MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)

### 基本用法
```javascript
// 创建observer实例
const observer = new MutationObserver(callback);

// 用config配置监听targetNode目标节点的变化
observer.observe(targetNode, config);

// 之后，可停止观察
observer.disconnect();
```

### 配置项
- childList: 设为 true 以监视目标节点（如果 subtree 为 true，则包含子孙节点）添加或删除新的子节点。默认值为 false
- subtree: 将监视范围扩展至目标节点整个节点树中的所有节点
- attributes: 观察受监视元素的属性值变更
- attributeFilter: 要监视的特定属性名称的数组。如果未包含此属性，则对所有属性的更改都会触发变动通知。无默认值
