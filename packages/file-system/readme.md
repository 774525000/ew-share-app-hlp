##  File System Access API

---

### 作用
文件系统访问 API 允许读取、写入和文件管理功能

### File System Access API 优点
极大的方便我们读取或者保存文件等功能

### API链接
[File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)

### 基本用法
```javascript
// 选取文件
const options = {
    types: [
        {
            description: 'Images',
            accept: {
                'image/*': ['.png', '.gif', '.jpeg', '.jpg']
            }
        },
    ],
    excludeAcceptAllOption: true,
    multiple: true
}

const [fileHandle] = await window.showOpenFilePicker(options)
const fileData = await fileHandle.getFile();
```

```javascript
// 保存文件
const handler = await self.showOpenFilePicker()
const relativePaths = await handler.createWritable()
await writableStream.write("this is content")
await writableStream.close();
```

### 配置项说明
- types: 文件类型。和 input accept 一个意思
- excludeAcceptAllOption: 表示是否排除下面 types 中的所有的accept文件类型
-  multiple: 是否可以多选