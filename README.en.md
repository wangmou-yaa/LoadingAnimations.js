# Loading Animations Library

Welcome to the Loading Animations Library – your one-stop solution to enhance the user experience during the loading phase of web pages. This library allows you to add elegant and customizable loading animations that keep your users engaged while the content is being loaded.

## Features

- **Automatic Display**: The spinner is automatically displayed when the page starts loading and disappears once everything is fully loaded.
- **Customizable Styling**: Easily apply custom CSS to the spinner to match your website's theme and branding.
- **Image Monitoring**: Optionally monitor the loading of images and control the spinner's visibility based on the status of image loading.
- **Simple Integration**: Integrate the library into your project with just a few lines of code.
- **Callback Functions**: Utilize provided callbacks to handle successful image load or error scenarios.

## Getting Started

### Installation

Include the Loading Animations library in your project by either downloading the file and linking to it in your HTML or by using a CDN link.

```html
<script src="https://fasttool.pages.dev/LoadingAnimations.js"></script>
or
<script src="https://wangmou-yaa.github.io/LoadingAnimations.js"></script>
```

### Basic Usage

Create an instance of the `LoadingAnimations` class to get started.

```javascript
const loader = new LoadingAnimations();
```

### Customizing the Spinner

Apply custom CSS to the spinner by using the `setCustomCSS` method.

```javascript
loader.setCustomCSS(`
    .custom-spinner {
        border-top-color: #3498db;
    }
`);
loader.setCustomSpinnerClass('custom-spinner');
```

### Observing Images

Enable image observation to show the spinner only while images are loading.

```javascript
const loader = new LoadingAnimations({ observeImages: true });
```

### Handling Image Load Events

Override the `onImageLoaded` and `onError` methods to handle image load success and error scenarios.

```javascript
class LoadingAnimations {
    // ...
    onImageLoaded(img) {
        console.log(`Image loaded: ${img.src}`);
    }

    onError(img) {
        console.error(`Failed to load image: ${img.src}`);
    }
    // ...
}
```

## Methods

- `setCustomCSS(css)`: Sets custom CSS for the spinner.
- `setCustomSpinnerClass(className)`: Adds a custom class to the spinner element.
- `showSpinner()`: Manually shows the spinner.
- `hideSpinner()`: Manually hides the spinner.
- `onImageLoaded(img)`: Callback function when an image is loaded.
- `onError(img)`: Callback function when an image fails to load.

## Examples

### Basic Spinner

```javascript
const loader = new LoadingAnimations();
loader.setCustomCSS(`
    .custom-spinner {
        border-top-color: #3498db;
    }
`);
```

### Image Monitoring

```javascript
const loader = new LoadingAnimations({ observeImages: true });
// The spinner will automatically show and hide based on image loading.
```

## Contributing

We welcome contributions to the Loading Animations Library! Feel free to submit pull requests or create issues to help improve the library.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Thank you to the open-source community for the inspiration and resources that have helped create this library.