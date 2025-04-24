# Product Hunt Dark Mode Extension

A Chrome extension that provides a comfortable dark mode experience for Product Hunt users, making it easier to browse products during night time or in low-light conditions.

## 🌙 Features

- Clean and modern dark theme for Product Hunt
- Seamless toggle between light and dark modes
- Preserves readability while reducing eye strain
- Consistent styling across all Product Hunt pages
- Automatically saves your preference

## 🎯 Why This Extension?

Product Hunt is a popular platform for discovering new products, but its default light theme can be harsh on the eyes, especially during night-time browsing. This extension solves that problem by:

- Reducing eye strain during extended browsing sessions
- Providing better contrast and readability
- Lowering battery consumption on devices with OLED screens
- Offering a modern, aesthetically pleasing dark interface

## 🛠️ Installation (Local Development)

### Prerequisites
- Google Chrome Browser
- Git (optional)
- Basic knowledge of Chrome extension development

### Steps to Install Locally

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/your-username/ProductHunt_dark.git
   ```
   Or download and extract the ZIP file

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner

3. **Load the Extension**
   - Click "Load unpacked"
   - Navigate to the extension directory
   - Select the folder containing the extension files

4. **Verify Installation**
   - Look for the extension icon in your Chrome toolbar
   - The extension should now be active and ready to use

## 🚀 Usage

1. Visit [Product Hunt](https://www.producthunt.com)
2. Click the extension icon in your Chrome toolbar
3. Click "Switch to Dark Mode" to toggle dark mode
4. Enjoy a comfortable browsing experience!

## 📁 Project Structure

```
ProductHunt_dark/
├── manifest.json        # Extension configuration
├── popup.html          # Extension popup interface
├── popup.js           # Popup functionality
├── content.js         # Dark mode implementation
├── background.js      # Background scripts
└── README.md          # Documentation
```

## 🔧 Development

To modify the extension:

1. Make changes to the relevant files
2. Go to `chrome://extensions/`
3. Click the refresh icon on your extension card
4. Test your changes on Product Hunt

## 🎨 Customization

You can customize the dark mode colors by modifying the CSS variables in `content.js`:

```javascript
// Main colors
background: #121212     // Main background
text: #e0e0e0          // Regular text
headings: #ffffff      // Headings and titles
links: #bb86fc         // Links and accents
```

## ⚠️ Known Issues

- Some dynamic content might briefly show original colors
- Certain third-party embedded content might not be affected by dark mode

## 📝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Product Hunt for their amazing platform
- Chrome Extension development community
- All contributors and users of this extension

## 📞 Support

If you encounter any issues or have suggestions:
- Open an issue on GitHub
- Contact: your-email@example.com

---

Made with ❤️ for the Product Hunt community