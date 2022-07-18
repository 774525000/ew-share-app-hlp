##  requestAnimationFrame

---

### 作用
requestAnimationFrame 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。

### 优点
1. 回调函数执行次数通常是每秒 60 次左右，性能比定时器更优，动画更流畅
2. 当requestAnimationFrame() 运行在后台标签页或者隐藏的\<iframe\> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命

### API链接
[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame)

### 基本用法
```javascript
// 在下一次重绘前调用callback函数
const frame = requestAnimationFrame(callback)

// 取消animationFrame
cancelAnimationFrame(frame)
```




---

##  requestIdleCallback 幕后任务协作调度 API

---

### 作用
requestIdleCallback 方法插入一个函数，这个函数将在浏览器空闲时期被调用。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应

### 优点
1. 在浏览器空闲时间调用回调函数，避免主线程卡顿现象

### API链接
[requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Background_Tasks_API)

### 基本用法
```javascript
// 在下一次重绘前调用callback函数
const idle = requestIdleCallback(callback, config)

// 取消animationFrame
cancelIdleCallback(idle)
```

### react中requestIdleCallback的使用
由于该方法比较新，react内部实现了该方法。 fiber是react的核心算法，其实就是借助了requestIdleCallback的思想，将任务划分成不同优先级。 重要的任务优先执行，不重要的任务，可以在浏览器有空闲时间再去处理，从而达到性能的优化。