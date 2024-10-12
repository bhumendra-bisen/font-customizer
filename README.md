# Font Customizer Chrome Extension

Font Customizer is a Chrome extension that allows users to customize the font of web pages they visit. Users can change the font family, size, and color of text on any website.

## Features

- Change font family
- Adjust font size
- Modify font color
- Apply changes to specific websites or all websites
- Save and load custom presets

## Installation

1. Clone this repository or download the ZIP file.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the `font-customizer` folder.

## Usage

1. Click on the Font Customizer icon in the Chrome toolbar to open the popup.
2. Use the dropdown menu to select a font family.
3. Adjust the font size using the slider.
4. Choose a font color using the color picker.
5. Click "Apply" to see the changes on the current website.
6. Use the "Save Preset" and "Load Preset" features to manage your favorite font configurations.

## File Structure

- `manifest.json`: Extension configuration file
- `popup.html`: HTML structure for the popup interface
- `popup.js`: JavaScript for popup functionality
- `content.js`: Content script for applying font changes to web pages
- `styles.css`: Styles for the popup interface

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
