
# LoadingAnimations.js

欢迎使用LoadingAnimations.js库——您一站式提升网页加载阶段用户体验的解决方案。该库允许您添加优雅且可定制的加载动画，让您的用户在内容加载期间保持参与度。

## 特性

- **自动显示**：页面开始加载时自动显示旋转器，一切完全加载完成后消失。
- **可定制样式**：轻松应用自定义CSS以匹配您的网站主题和品牌。
- **图片监控**：选择性监控图片加载，并根据图片加载状态控制旋转器的可见性。
- **简单集成**：仅需几行代码即可将库集成到您的项目中。
- **回调函数**：使用提供的回调处理成功加载图片或错误场景。

## 开始使用

### 安装

通过下载文件并在HTML中链接它，或使用CDN链接将加载动画库包含到您的项目中。

```html
<script src="https://fasttool.pages.dev/LoadingAnimations.js"></script>
或
<script src="https://wangmou-yaa.github.io/LoadingAnimations.js"></script>
```

### 基本用法

创建一个 `LoadingAnimations` 类的实例来开始使用。

```javascript
const loader = new LoadingAnimations();
```

### 自定义旋转器

使用 `setCustomCSS` 方法应用自定义CSS到旋转器。

```javascript
loader.setCustomCSS(`
    .custom-spinner {
        border-top-color: #3498db;
    }
`);
loader.setCustomSpinnerClass('custom-spinner');
```

### 监控图片

启用图片监控以仅在图片加载时显示旋转器。

```javascript
const loader = new LoadingAnimations({ observeImages: true });
```

### 处理图片加载事件

覆盖 `onImageLoaded` 和 `onError` 方法来处理图片加载成功和错误场景。

```javascript
class LoadingAnimations {
    // ...
    onImageLoaded(img) {
        console.log(`图片已加载: ${img.src}`);
    }

    onError(img) {
        console.error(`加载图片失败: ${img.src}`);
    }
    // ...
}
```

## 方法

- `setCustomCSS(css)`：为旋转器设置自定义CSS。
- `setCustomSpinnerClass(className)`：为旋转器元素添加自定义类。
- `showSpinner()`：手动显示旋转器。
- `hideSpinner()`：手动隐藏旋转器。
- `onImageLoaded(img)`：图片加载成功时的回调函数。
- `onError(img)`：图片加载失败时的回调函数。

## 示例

### 基本旋转器

```javascript
const loader = new LoadingAnimations();
loader.setCustomCSS(`
    .custom-spinner {
        border-top-color: #3498db;
    }
`);
```

### 图片监控

```javascript
const loader = new LoadingAnimations({ observeImages: true });
// 旋转器将根据图片加载自动显示和隐藏。
```

## 贡献

我们欢迎对加载动画库的贡献！请随时提交拉取请求或创建问题以帮助改进库。

## 许可证

本项目根据MIT许可证授权——详见 [LICENSE](LICENSE) 文件。

## 致谢

感谢开源社区提供的灵感和资源，这些都有助于创建此库。