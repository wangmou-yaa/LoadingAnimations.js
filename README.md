---
# LoadingAnimations - 炫酷的图片加载动画库
## 🚀 为什么要使用 LoadingAnimations？
在数字时代，用户体验是王道。LoadingAnimations 库可以帮助你提供无缝的加载体验，让你的网站或应用在用户心中留下深刻印象。无论是简单的图片加载，还是复杂的资源管理，这个库都能帮你轻松搞定。
## 🌟 库的优势
- **简单易用**：只需几行代码，就能让你的加载动画焕然一新。
- **定制自由**：通过丰富的配置选项，你可以自定义加载动画的每一个细节。
- **性能优化**：库内部使用现代 JavaScript 技术和事件监听，确保加载过程既快又稳。
- **资源管理**：自动检测并处理动态添加的图片，确保资源得到充分利用。

还在等什么？让我们开始吧！

## ✨ 安装方法
### 通过 script 标签直接引入
1. 通过 CDN 引入：
   ```html
   <script src="https://fasttool.pages.dev/js/LoadingAnimations.js"></script>
   ```
   或者：
   ```html
   <script src="https://wangmou_yaa.github.io/js/LoadingAnimations.js"></script>
   ```
2. 通过 npm 安装：
   ```bash
   npm install loading-animations
   ```
   然后在项目中引入：
   ```javascript
   import LoadingAnimations from 'loading-animations';
   ```
## 📖 初始化 LoadingAnimations
在页面加载完成后，你可以通过以下代码初始化 LoadingAnimations 库：
```javascript
class LoadingAnimations {
    // ...
}
const loader = new LoadingAnimations({
    observeImages: true,
    customCSS: '/* your custom CSS here */',
    customSpinnerClass: 'custom-spinner',
    customErrorClass: 'custom-error',
    customTransitionClass: 'custom-transition',
    onImageLoaded: (img) => { console.log(`图片已加载: ${img.src}`); },
    onError: (img) => { console.error(`图片加载失败: ${img.src}`); },
    onFinishLoading: () => { console.log('所有图片加载完成'); },
    onProgress: (loaded, total) => { console.log(`图片加载进度: ${loaded}/${total}`); },
    retryOnError: true,
    maxRetries: 3, // 设置最大重试次数
    retryDelay: 1000, // 重试延迟时间（毫秒）
});
```
## 📜 具体功能介绍
### 1. 图片加载事件处理
通过事件监听器，LoadingAnimations 可以自动处理图片的加载和错误事件。
```javascript
loader.addImageListeners(document.querySelectorAll('img'));
```
### 2. 动态图片监听
使用 `MutationObserver` 监听页面变化，确保新添加的图片也能被正确处理。
```javascript
loader.observeImages();
```
### 3. 资源清理
使用 `destroy` 方法来清理资源，避免内存泄漏。
```javascript
loader.destroy();
```
### 4. 自定义样式
通过 `insertCustomCSS` 方法，你可以插入自定义的 CSS 来定制加载动画的样式。
```javascript
loader.insertCustomCSS();
```
### 5. 加载动画显示与隐藏
```javascript
loader.showSpinner();
loader.hideSpinner();
```
### 6. 加载错误处理
```javascript
loader.showLoadError();
loader.hideLoadError();
```
### 7. 图片加载进度更新
```javascript
loader.updateProgress();
```
### 8. 重试机制
```javascript
loader.loadImage(img);
```
### 9. 图片加载事件处理
当图片加载成功时，`imageLoadHandler` 方法会被调用，并将加载成功的图片作为参数传递。这允许你执行自定义操作，比如显示加载成功的提示。
```javascript
loader.imageLoadHandler(img);
```
当图片加载失败时，`imageErrorHandler` 方法会被调用，并将加载失败的图片作为参数传递。这允许你执行自定义操作，比如显示加载失败的提示。
```javascript
loader.imageErrorHandler(img);
```
### 10. 动态图片监听
`observeImages` 方法使用 `MutationObserver` 来监听页面变化，并在新添加的图片上自动添加事件监听器。
```javascript
loader.observeImages();
```
### 11. 资源清理
`destroy` 方法可以用来清理所有的事件监听器和资源，例如移除 `MutationObserver` 和从 DOM 中移除加载动画元素。
```javascript
loader.destroy();
```
### 12. 自定义样式
通过 `insertCustomCSS` 方法，你可以插入自定义的 CSS 来定制加载动画的样式。这允许你根据你的网站设计来定制加载动画的外观。
```javascript
loader.insertCustomCSS();
```
### 13. 加载动画显示与隐藏
`showSpinner` 方法用于在图片开始加载时显示加载动画，而 `hideSpinner` 方法用于在所有图片加载完成后隐藏加载动画。
```javascript
loader.showSpinner();
loader.hideSpinner();
```
### 14. 加载错误处理
`showLoadError` 方法用于在图片加载失败时显示加载错误的动画，而 `hideLoadError` 方法用于在图片重新加载成功后隐藏加载错误的动画。
```javascript
loader.showLoadError();
loader.hideLoadError();
```
### 15. 图片加载进度更新
`updateProgress` 方法用于在图片加载过程中更新加载进度，并通过 `onProgress` 回调函数通知用户。
```javascript
loader.updateProgress();
```
### 16. 重试机制
`loadImage` 方法用于在图片加载失败时进行重试。它会在重试次数达到最大重试次数之前不断尝试重新加载图片。
```javascript
loader.loadImage(img);
```
### 🌐 HTML 实例
在这个 HTML 实例中，我们创建了一个简单的图片元素，并使用 LoadingAnimations 库来处理图片的加载过程。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LoadingAnimations Example</title>
    <link rel="stylesheet" href="path/to/your/custom.css">
</head>
<body>
    <img src="path/to/your/image.jpg" alt="Description">
    <script src="https://fasttool.pages.dev/js/LoadingAnimations.js"></script>
    <script>
        const loader = new LoadingAnimations({
            // ...
        });
    </script>
</body>
</html>
```
---