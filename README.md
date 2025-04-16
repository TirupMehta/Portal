# Portal: System Info

**Portal: System Info** is a modern, lightweight desktop application built with Electron, designed to provide real-time insights into your system, browser, and network environment. Featuring a clean, dark-themed user interface and responsive layout, it delivers detailed information while maintaining complete local privacy. Ideal for developers, tech enthusiasts, and system auditors.

---

## Overview

Portal: System Info offers a categorized, visually organized dashboard displaying everything from hardware specs and browser data to network performance metrics. With a built-in speed test, dynamic updates, and smooth transitions, the app prioritizes both utility and user experience.

---

## Key Features

### System & Hardware Information
- Operating system and platform
- CPU core count
- Estimated available memory
- Battery status and charge level
- GPU vendor and renderer (via WebGL)

### Display Metrics
- Screen resolution
- Device pixel ratio

### Browser Details
- User agent string
- Language settings
- Cookies enabled status

### Time & Clock
- Local time
- UTC time
- Timezone and offset

### Network & Connectivity
- Online/offline detection
- Connection type and RTT (Round-Trip Time)
- Built-in download and upload speed tests

### User Interface
- Responsive layout with adaptive columns (1–4 based on screen width)
- Smooth entry animations (fade, slide, spin)
- Custom loading screen for perceived performance
- Styled scrollbars for enhanced usability

### Privacy-First Architecture
- All data is collected and processed locally
- No external APIs or telemetry involved

---

## Installation

To get started, clone the repository and install dependencies.

```bash
git clone https://github.com/yourusername/Portal.git
cd Portal
npm install
npm start
```

---

## Getting Started

1. Run `npm start` to launch the app.
2. Explore the interface to view categorized system, browser, and network data.
3. Use the speed test modules to check your internet performance.
4. Data is updated in real-time and never leaves your device.

---

## Project Structure

- `index.js` — Main Electron entry point
- `src/index.html` — User interface
- Embedded CSS/JS — Handles layout, animation, and logic
- No third-party APIs or internet dependency (except for speed testing)

---

## Development & Contribution

This project is open to contributions. To contribute:

1. Fork the repository
2. Create a new feature or fix branch
3. Submit a pull request with a clear description of your changes

Issues and feature requests can be submitted through the [GitHub Issue Tracker](https://github.com/TirupMehta/Portal/issues).

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for full terms.
