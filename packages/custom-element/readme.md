##  Web Components

---

### 作用
Web Components 是一套不同的技术，允许您创建可重用的定制元素（它们的功能封装在您的代码之外）并且在您的 web 应用中使用它们

### Web Components 优点
作为开发者，我们都知道尽可能多的重用代码是一个好主意,这对于自定义标记结构来说通常不是那么容易 — 想想复杂的 HTML（以及相关的样式和脚本），有时您不得不写代码来呈现自定义 UI 控件，并且如果您不小心的话，多次使用它们会使您的页面变得一团糟
Web Components 旨在解决这些问题 — 它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突

### API链接
[Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

### Web Component 组成
- Custom elements（自定义元素）：一组 JavaScript API，允许您定义 custom elements 及其行为，然后可以在您的用户界面中按照需要使用它们。
- Shadow DOM（影子 DOM）：一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- HTML templates（HTML 模板）： <template> 和 <slot> 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

### 实现 web component 的基本方法通常如下所示：
- 使用一个类继承 HTMLElement（或者HTMLElement的子类）
- 用 CustomElementRegistry.define() 方法注册您的新自定义元素 ，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素
- 如果需要的话，使用Element.attachShadow() 方法将一个 shadow DOM 附加到自定义元素上。使用通常的 DOM 方法向 shadow DOM 中添加子元素、事件监听器等等
- 如果需要的话，使用 <template> 和<slot> 定义一个 HTML 模板。再次使用常规 DOM 方法克隆模板并将其附加到您的 shadow DOM 中
- 在页面任何您喜欢的位置使用自定义元素，就像使用常规 HTML 元素那样
- 使用 web component 的生命周期函数