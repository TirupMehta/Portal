Portal: System Info
Description
Portal: System Info is a lightweight Electron-based desktop application that provides detailed insights into your system, browser, and device. With a sleek, dark-themed interface, it offers real-time hardware and network information, including a unique speed test feature for download and upload speeds. Built with a focus on user experience, it includes smooth animations, a responsive card-based layout, and local data collection to ensure privacy.
Features

System Hardware Info: Displays platform, CPU cores, estimated RAM, battery level, charging status, GPU vendor, and renderer.
Display Details: Shows screen resolution and pixel ratio for a comprehensive view of your display.
Browser Information: Provides user agent, language, and cookie-enabled status.
Time Data: Includes local time, UTC time, and timezone information.
Network Insights: Checks online status, network type, connection RTT, and offers interactive download/upload speed tests.
Responsive Design: Adapts to various screen sizes with a grid layout (1 to 4 columns based on width).
Animations: Features fade-in, fade-up, and spin animations for a polished user experience.
Loading Screen: Includes a customizable loading spinner with a delay to enhance perceived performance.
Custom Scrollbar: Adds a styled scrollbar for better navigation.
Privacy-Focused: Collects data locally and never transmits it, as noted in the footer.

Installation

Clone the repository:
git clone https://github.com/yourusername/Portal-System-Info.git


Navigate to the project folder:
cd Portal-System-Info


Install dependencies:
npm install


Start the application:
npm start



Usage

Launch the app using npm start.
View system, browser, and network information organized in categorized cards.
Click the "Run Test" buttons under "Download Speed" and "Upload Speed" to measure your internet performance.
The app updates the timestamp dynamically and hides the loading screen once data is ready.

Development

Built with Electron and Electron Forge.
The project uses index.js for the main process and src/index.html with embedded CSS and JavaScript for the UI.
Features SVG icons for visual clarity and WebGL for GPU detection.
Contributions are welcome! Please fork the repository and submit pull requests.

License
This project is licensed under the MIT License. See the LICENSE file for details (add a LICENSE file if desired).
Contact
For issues or suggestions, please open an issue on the GitHub repository.
