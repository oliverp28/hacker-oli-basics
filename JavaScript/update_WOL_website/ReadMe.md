# Wake on LAN Server

## Overview

This repository contains two versions of a Wake on LAN (WoL) server webpage. The initial version (`index_old.html`) is the older implementation, while the updated version (`index.html`) represents improvements and refactoring for better functionality, readability, and user experience.

## Features

### Original Version (`index_old.html`)

1. **Styling:** The styling is primarily achieved through inline CSS, which may lead to a lack of consistency and maintainability.

2. **JavaScript Placement:** JavaScript code is embedded directly within the HTML file, leading to potential code duplication and reduced modularity.

3. **Accessibility:** The original version may not be fully accessible, as it lacks semantic HTML elements and proper structure.

4. **Button Styling:** Styling for buttons is done inline, making it less flexible for customization and consistency.

5. **Countdown Logic:** The countdown logic is implemented with global variables and could be optimized for better readability.

### Updated Version (`index.html` and `index.js`)

1. **Bootstrap Integration:** The updated version incorporates Bootstrap for improved styling, responsiveness, and consistent design across various devices.

2. **Separation of Concerns:** JavaScript code is moved to a separate file (`index.js`), promoting better code organization and maintainability.

3. **Improved Readability:** Code is refactored to enhance readability and maintainability, with meaningful function names and comments.

4. **Progress Bar Enhancement:** The progress bar logic is refined for a smoother user experience, providing better visual feedback during the countdown.

5. **Accessibility:** Bootstrap's components contribute to better accessibility, ensuring a more inclusive user experience.

6. **Ping Test Handling:** The ping test functionality is maintained, providing users with information about the server's status.



*Note: The provided URLs for Bootstrap and Popper.js are examples, and you may replace them with specific versions or use a content delivery network (CDN) of your choice.*
