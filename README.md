# Data Visualization PWA Application

## Overview

This project is a **Progressive Web Application (PWA)** designed to help users visualize data by uploading their own `.json` or `.csv` files. The application manages the saving and updating of data locally on the user's device, allowing for offline access and data persistence. Users can create spaces for data, add files, and view a file structure of their saved data.

The application is optimized for mobile devices and is built from scratch using **vanilla JavaScript, HTML, and CSS**, without any external libraries. A bundler is used to facilitate the build process for deployment on GitHub Pages and to enable local development without caching issues.

Additionally, the application provides a clean API that allows developers to create their own visualizations for the data, promoting extensibility and customization.

## Features

- **Data Upload**: Users can upload `.json` or `.csv` files up to 1 MB in size.
- **Local Data Management**: Data is saved and updated locally on the device, providing offline access.
- **File Structure Visualization**: Displays a file structure to help users manage their data files and spaces.
- **Mobile-First Design**: Optimized for mobile devices to ensure a seamless user experience on smartphones and tablets.
- **Progressive Web App**: Installable on devices, works offline, and provides a native app-like experience.
- **Extensible Visualization API**: Offers a clean API for developers to create custom data visualizations.
- **No External Libraries**: Built entirely with vanilla JavaScript, HTML, and CSS to maintain full control over the codebase.
- **Bundler Integration**: Utilizes a bundler for building the project and managing assets, enabling efficient deployment and development workflows.

## Architectural Design

### High-Level Overview

The application follows a **component-based architecture**, emphasizing modularity, reusability, and maintainability. It leverages modern web technologies to create a responsive and performant user interface.

#### Key Components

1. **Data Management Module**: Handles file uploads, local storage, and data retrieval.
2. **File System Visualization**: Displays the hierarchical structure of saved data files and spaces.
3. **Visualization Engine**: Renders data visualizations and provides an API for custom visualization development.
4. **User Interface Components**: Modular UI elements for interaction and navigation.
5. **Service Worker**: Manages caching for offline functionality (enabled only in production builds).
6. **Web App Manifest**: Provides metadata for PWA features.
7. **Bundler Configuration**: Facilitates building the project and managing environment variables.

### Technology Stack

- **Languages**:
  - JavaScript (ES6+)
  - HTML5
  - CSS3

- **Tools**:
  - **Bundler**: Parcel (or alternative) for asset bundling and build process.
  - **Version Control**: Git and GitHub for source code management.
  - **Deployment Platform**: GitHub Pages for hosting the application.
  - **Development Server**: Provided by the bundler for local development.

### Design Considerations

- **Mobile Optimization**: The UI is designed with a mobile-first approach, ensuring usability on small screens.
- **Data Size Limitation**: Focus on handling files up to 1 MB to ensure performance and avoid storage limitations.
- **Offline Access**: Uses service workers to cache assets and data for offline use in production.
- **Modularity**: Code is organized into modules to promote reusability and ease of maintenance.
- **Extensibility**: Provides an API for developers to add custom visualizations.

### Project Structure

```
touch ./viz
│
├── /src
│   ├── /assets
│   │   ├── /icons
│   │   └── /images
│   ├── /components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── FileUploader.js
│   │   ├── FileManager.js
│   │   ├── Visualization.js
│   │   └── [additional components]
│   ├── /css
│   │   ├── styles.css
│   │   └── [additional CSS files]
│   ├── /js
│   │   ├── app.js
│   │   ├── dataManager.js
│   │   ├── api.js
│   │   ├── serviceWorker.js
│   │   └── [additional JS modules]
│   ├── index.html
│   ├── manifest.json
│   └── [additional HTML files]
│
├── /docs
│   ├── architecture.md
│   └── [additional documentation]
│
├── /tests
│   └── [test scripts]
│
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

### Components Description

- **Header.js**: Manages the application's header and navigation elements.
- **Footer.js**: Contains footer information and links.
- **FileUploader.js**: Handles file upload functionality and validation.
- **FileManager.js**: Manages the display and organization of the user's data files and spaces.
- **Visualization.js**: Renders data visualizations and interfaces with the visualization API.
- **dataManager.js**: Provides functions for saving, retrieving, and updating data in local storage.
- **api.js**: Defines the API for developers to create custom visualizations.

### Development Workflow

- **Local Development**:
  - Use the bundler's development server (`npm start`) for running the application locally without caching.
  - Service worker registration is disabled in development mode to prevent caching issues.

- **Building for Production**:
  - Use the build script (`npm run build`) to generate optimized assets for deployment.
  - Service worker registration is enabled in production mode to provide offline functionality.

- **Deployment**:
  - Deploy the `dist` folder to GitHub Pages using GitHub Actions for continuous integration and deployment.
  - The application is accessible at `https://yourusername.github.io/yourapp/`.

### Bundler Configuration

- **Parcel** is used as the bundler to manage assets, environment variables, and build processes.
- **Scripts in package.json**:

  ```json
  {
    "scripts": {
      "start": "parcel src/index.html --no-cache",
      "build": "parcel build src/index.html --public-url ./"
    },
    "devDependencies": {
      "parcel": "^2.0.0"
    }
  }
  ```

- **Environment Variables**:
  - `NODE_ENV` is set to `development` or `production` to control service worker registration and other environment-specific settings.

### Service Worker

- **Purpose**: Enables offline functionality by caching assets and data.
- **Registration**: Conditionally registered only in production builds to avoid caching issues during development.
- **Caching Strategy**:
  - Assets and data are cached during the install event.
  - Fetch requests are intercepted to serve cached responses when offline.

### Progressive Web App Features

- **Web App Manifest (`manifest.json`)**:
  - Defines the application's name, icons, theme colors, and start URL.
- **Icons**: Located in `/src/assets/icons/` and referenced in the manifest.
- **Installability**: Users can install the app on their devices for a native-like experience.

### API for Custom Visualizations

- **Purpose**: Allows developers to create and integrate their own data visualizations.
- **Design**:
  - Exposes functions and interfaces for rendering data.
  - Documentation provided in `docs/api.md` (to be created).
- **Usage**:
  - Developers can add visualization modules in `/src/components/` and register them through the API.

### Coding Standards and Conventions

- **JavaScript**:
  - Use ES6 modules (`import`/`export`).
  - Follow camelCase for variables and functions, PascalCase for classes.
  - Include JSDoc comments for all functions and classes.

- **CSS**:
  - Use BEM (Block Element Modifier) naming convention for classes.
  - Organize styles hierarchically and use variables for consistency.

- **HTML**:
  - Utilize semantic elements.
  - Maintain consistent indentation and formatting.

- **Version Control**:
  - Use Git for source code management.
  - Write descriptive commit messages following the format:
    ```
    Type: Short description
    ```
    - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

### Deployment and Hosting

- **GitHub Pages**:
  - The application is hosted on GitHub Pages for public access.
  - Deployment is automated using GitHub Actions upon pushing to the `main` branch.

- **GitHub Actions Workflow**:
  - Located in `.github/workflows/deploy.yml`.
  - Defines steps for building the application and deploying to GitHub Pages.

### Testing and Quality Assurance

- **Local Testing**:
  - Use the bundler's development server for testing without caching interference.
  - Validate PWA functionality using browser developer tools and Lighthouse audits.

- **Automated Testing**:
  - Test scripts are located in `/tests/`.
  - Include unit tests for critical modules and components.

### Documentation

- **README.md**:
  - Provides an overview of the project, setup instructions, and usage guidelines.

- **Architecture Documentation**:
  - Detailed architectural information is available in `/docs/architecture.md`.
  - Includes diagrams and explanations of system components and data flow.

### License

The project is licensed under the MIT License (or other chosen license), detailed in the `LICENSE` file.

## Getting Started

### Prerequisites

- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/yourapp.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd yourapp
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

### Running the Application Locally

```bash
npm start
```

- Opens the application in development mode at `http://localhost:1234`.
- Hot Module Replacement (HMR) is enabled for live reloading.
- Service worker is not registered to prevent caching issues.

### Building for Production

```bash
npm run build
```

- Generates optimized assets in the `dist` directory.
- Service worker is registered for offline functionality.

### Deployment

- Push changes to the `main` branch to trigger the GitHub Actions workflow.
- The application will be built and deployed to GitHub Pages automatically.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) (to be created) for more information.

## Contact

For questions or feedback, please open an issue or contact [Your Name](mailto:youremail@example.com).