# LoadingAnimations.js - 图片加载动画库
`LoadingAnimations.js` 是一款轻量级的 JavaScript 库，它为网页中的图片加载过程提供了优雅的动画效果。当图片正在加载时，库会显示一个旋转的加载指示器，直到所有图片加载完成。这不仅提升了用户体验，还增加了网页的互动性。
## 优势
- **提升用户体验：** 在图片加载期间提供视觉反馈，避免空白或突兀的页面布局。
- **灵活配置：** 允许自定义加载指示器的样式和动画，以匹配您的网站设计。
- **功能全面：** 自动监听新添加的图片元素，确保所有图片都被跟踪。
- **易于集成：** 快速集成到现有的 HTML 网站中，无需复杂的配置。

现在，让我们开始吧！

## 功能详解
### 安装
通过 script 标签直接引入：
```html
<script src="https://fasttool.pages.dev/js/LoadingAnimations.js"></script>
```
或者：
```html
<script src="https://wangmou_yaa.github.io/js/LoadingAnimations.js"></script>
```
### 初始化
创建一个 `LoadingAnimations` 实例，并传递配置对象。
```javascript
const loader = new LoadingAnimations({
    observeImages: true, // 是否监听图片加载
    customCSS: '/* 自定义 CSS */', // 自定义加载指示器样式
    customSpinnerClass: 'custom-spinner', // 自定义加载指示器类名
    onImageLoaded: (img) => { console.log(`图片已加载: ${img.src}`); }, // 图片加载回调
    onError: (img) => { console.error(`图片加载失败: ${img.src}`); }, // 图片错误回调
    onFinishLoading: () => { console.log('所有图片加载完成'); }, // 所有图片加载完成回调
    onProgress: (loaded, total) => { console.log(`图片加载进度: ${loaded}/${total}`); } // 图片加载进度回调
});
```
### 自定义样式
通过 `customCSS` 选项，您可以自定义加载指示器的外观。
```css
.custom-spinner {
    border-color: rgba(255, 255, 255, 0.2);
    border-left-color: #ffcc00;
    border-width: 8px;
}
```
### 监听图片加载
设置 `observeImages` 为 `true`，库会自动监听所有图片的加载情况。
```javascript
const loader = new LoadingAnimations({
    observeImages: true
});
```
### 图片加载回调
通过 `onImageLoaded` 回调函数，您可以捕获单个图片加载完成的事件。
```javascript
const loader = new LoadingAnimations({
    onImageLoaded: (img) => { console.log(`图片已加载: ${img.src}`); }
});
```
### 图片错误回调
通过 `onError` 回调函数，您可以捕获单个图片加载失败的事件。
```javascript
const loader = new LoadingAnimations({
    onError: (img) => { console.error(`图片加载失败: ${img.src}`); }
});
```
### 所有图片加载完成回调
通过 `onFinishLoading` 回调函数，您可以捕获所有图片加载完成的事件。
```javascript
const loader = new LoadingAnimations({
    onFinishLoading: () => { console.log('所有图片加载完成'); }
});
```
### 图片加载进度回调
通过 `onProgress` 回调函数，您可以捕获图片加载的进度。
```javascript
const loader = new LoadingAnimations({
    onProgress: (loaded, total) => { console.log(`图片加载进度: ${loaded}/${total}`); }
});
```
## 使用示例
在 HTML 网站中使用 `LoadingAnimations.js`：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>LoadingAnimations.js 示例</title>
    <script src="loading-animations.js"></script>
    <style>
        .custom-spinner {
            border-color: rgba(255, 255, 255, 0.2);
            border-left-color: #ffcc00;
            border-width: 8px;
        }
    </style>
</head>
<body>
    <img src="image1.jpg" alt="图片 1">
    <img src="image2.jpg" alt="图片 2">
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const loader = new LoadingAnimations({
                observeImages: true,
                customCSS: '.custom-spinner { border-color: rgba(255, 255, 255, 0.2); border-left-color: #ffcc00; border-width: 8px; }',
                customSpinnerClass: 'custom-spinner',
                onImageLoaded: (img) => { console.log(`图片已加载: ${img.src}`); },
                onError: (img) => { console.error(`图片加载失败: ${img.src}`); },
                onFinishLoading: () => { console.log('所有图片加载完成'); },
                onProgress: (loaded, total) => { console.log(`图片加载进度: ${loaded}/${total}`); }
            });
        });
    </script
