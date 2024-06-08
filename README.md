# LoadingAnimations.js - 页面加载动画库
`LoadingAnimations.js` 是一个简单易用的 JavaScript 库，它为您的网页提供优雅的加载动画。当页面内容正在加载时，它能够提高用户体验，让等待变得更加愉快。
## 为什么使用 LoadingAnimations.js？
- **用户体验优先**：为用户提供即时的反馈，让他们知道内容正在加载中。
- **简单集成**：无需复杂的配置，快速集成到您的项目中。
- **高度可定制**：支持自定义 CSS，轻松适配您的网站风格。
- **图像加载监控**：可选择性地监控图像加载状态，提升页面性能感知。
## 安装
通过 script 标签直接引入：
1.
```html
<script src="https://fasttool.pages.dev/js/LoadingAnimations.js"></script>
```
2.
```html
<script src="https://wangmou_yaa.gityub.io/js/LoadingAnimations.js"></script>
```
## 使用方法
### 基础用法
创建一个 `LoadingAnimations` 实例，并配置您的选项。
```javascript
const loader = new LoadingAnimations({
  observeImages: true // 可选，默认为 false
});
```
### 自定义 CSS
您可以轻松地设置自定义 CSS，以匹配您的网站风格。
```javascript
loader.setCustomCSS('.custom-spinner { border-left-color: blue; }');
```
### 自定义 Spinner 类名
为加载动画添加自定义类名，进一步个性化您的 Spinner。
```javascript
loader.setCustomSpinnerClass('custom-spinner');
```
### 动态更新配置
在实例创建后，您可以通过 `updateOptions` 方法动态更新配置。
```javascript
loader.updateOptions({ observeImages: false });
```
## 示例代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>LoadingAnimations.js 示例</title>
    <script src="https://cdn.jsdelivr.net/npm/LoadingAnimations.js"></script>
</head>
<body>
    <h1>页面加载中...</h1>
    <script>
        const loader = new LoadingAnimations({
            observeImages: true
        });
        // 设置自定义CSS
        loader.setCustomCSS('.custom-spinner { border-left-color: red; }');
        // 设置自定义类名
        loader.setCustomSpinnerClass('custom-spinner');
    </script>
</body>
</html>
```
## 为什么要使用加载动画？
在现代的网络应用中，用户体验至关重要。当页面内容加载缓慢时，用户可能会感到沮丧并离开。`LoadingAnimations.js` 通过提供反馈，即在内容准备就绪时以动画形式展现，从而提升用户体验，减少等待的焦虑。
让用户知道系统正在工作，即使是在短暂的延迟期间，也是一种向用户传达关怀的方式。使用 `LoadingAnimations.js`，您可以轻松实现这一点，同时为您的网站增添一丝专业的风采。
开始使用 `LoadingAnimations.js`，让等待变得不再单调，让用户体验更加流畅愉悦。您还在等什么呢？加入我们，让加载变得更有趣！
---
感谢您对 `LoadingAnimations.js` 的关注，我们欢迎任何形式的贡献和建议。如果您有任何问题或需要帮助，请随时提出 Issue。让我们一起打造更好的网络体验！
