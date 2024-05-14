# PreloaderGFX.js

LoadingAnimations 是一个轻量级的 JavaScript 库，用于在网页上实现加载动画。它提供了一个简洁的 API 来自定义和控制加载指示器（spinner），适用于各种场景，包括页面加载、图片加载以及异步操作的等待提示。

## 安装
你可以通过以下方式安装 LoadingAnimations：

### 直接下载
下载 [loadingAnimations.min.js](https://example.com/path/to/loadingAnimations.min.js) 并引入到你的项目中。

### npm
如果你使用 npm 包管理器，可以通过运行以下命令来安装：
```bash
npm install loadinganimations --save
```

## 使用说明
在 HTML 文件中引入 `loadingAnimations.min.js` 后，可以通过以下步骤使用 LoadingAnimations：

1. 创建 LoadingAnimations 实例，并传入配置选项。
2. 使用提供的 API 来控制加载动画。

### 示例
```javascript
const loader = new LoadingAnimations({ observeImages: true });

// 自定义 CSS
const customCSS = `
    .custom-spinner {
        border-left-color: #3498db;
    }
`;

// 设置自定义 CSS 和类名
loader.setCustomCSS(customCSS);
loader.setCustomSpinnerClass('custom-spinner');
```

## API 文档
### 构造函数
```javascript
new LoadingAnimations(options)
```
创建 LoadingAnimations 实例。`options` 是一个对象，包含以下属性：
- `observeImages`: `boolean` 类型，如果设置为 `true`，则自动监听所有 `<img>` 标签的加载事件。

### 方法
- `showSpinner()`: 显示加载动画。
- `hideSpinner()`: 隐藏加载动画。
- `setCustomCSS(css)`: 应用自定义 CSS 样式。`css` 必须是字符串类型。
- `setCustomSpinnerClass(className)`: 为加载动画元素添加自定义类名。
- `show()`: 手动显示加载动画。
- `hide()`: 手动隐藏加载动画。
- `bindToPromise(promise)`: 将加载动画绑定到一个 Promise 对象。当 Promise 解决或拒绝时，隐藏加载动画。

### 事件处理
LoadingAnimations 还提供了事件处理函数，用于在图片加载完成或失败时执行特定操作：
- `onImageLoaded(img)`: 当图片加载完成时调用。
- `onError(img)`: 当图片加载失败时调用。

## 浏览器兼容性
LoadingAnimations 兼容所有现代浏览器，包括 Chrome、Firefox、Safari、Edge，以及 Internet Explorer 11。

## 许可证
LoadingAnimations 基于 MIT 许可证发布。

## 贡献
欢迎任何形式的贡献，包括 issue 的报告和 pull request 的提交。