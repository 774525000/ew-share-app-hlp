##  Permissions

---

### 作用
和安卓，苹果APP一样，一些敏感操作，需要获取用户权限。怎么友好的进行权限的交互和提示很有必要

### 优点
1. 防止网站随意获取用户的敏感信息（比如随意获取地理位置）
2. 防止网站随意骚扰用户（比如乱弹通知等）

### API链接
[Permissions](https://developer.mozilla.org/zh-CN/docs/Web/API/Permissions)

### 基本用法
```javascript
// 获取授权信息
navigator.permissions.query(config)

// 撤销授权信息
navigator.permissions.revoke(config)
```

### 获取权限的一般流程
1. 通过query方法查询授权信息
2. 如果为 prompt 状态，则代表未授权过，需要引导用户去授权
3. 如果为 granted 状态，则代表授权过，可以直接获取信息
4. 如果为 denied 状态，则代表授权过，但是被拒绝了，需要对用户做出相应的提示（比如提示拒绝过后不能使用该功能，或者再次引导授权等操作）

