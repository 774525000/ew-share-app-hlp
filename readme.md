## 分享比较新的 WEB API

---

### 导语
<p>
随着前端技术的发展，越来越多好用的WEB API逐渐内置到原生JS中，减少了第三方库的引入，也极大提高了我们的开发效率。其中一部分API由于比较新，
兼容性不尽如人意，不太适合用在我们现在的项目中，不过了解一下，不仅能拓展我们的视野，也许在不久的将来也许就可以很好的使用到我们的日常开发中来。
</p>

### 本仓库项目目录
```javascript
app
└─packages
    ├─animation-frame
    ├─broadcast-channel
    ├─cookie-store
    ├─custom-element
    ├─file-system
    ├─intersection-observer
    ├─mutation-observer
    ├─permission
    ├─resize-observer
    ├─send-beancon
    └─url-pattern
```

### 未列入本仓库的
<p>当然，还有部分API，虽然没有列入本仓库，但也挺有趣的，其中除了WEB API，还包括部分CSS等，比如：</p>

1. [structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone): JS终于内置深克隆的方法了
2[Element.animate()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate)：JS中定义动画，启动动画，暂停动画等操作

3. [aspect-ratio](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate)：CSS中保持元素宽高比的的属性
4. [backdrop-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio)：CSS中实现类似于IOS中的毛玻璃效果的属性
5. [@layer](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@layer)：自定义CSS的优先级，减少样式被覆盖的问题
6. [mask](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask)：图层蒙版，可以用来实现类似于B站的弹幕防挡效果的CSS属性



### 总结
新的WEB API主要有以下特点
1. 很多都是异步的，高性能的
2. 大量的使用观察者等设计模式，简单明了，容易上手
3. 越来越注重用户隐私，部分敏感的api在https下或者用户授权的前提下才可用