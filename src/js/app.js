// app.js
// Core functionality for data management and UI interactions

// Select DOM elements
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const fileUploadButton = document.getElementById('fileUploadButton');

// Check for local storage support
const supportsLocalStorage = () => typeof Storage !== 'undefined';

// Initialize data storage
const initDataStorage = () => {
  if (!supportsLocalStorage()) {
    alert('Local storage is not supported in your browser.');
    return;
  }
  if (!localStorage.getItem('fileSpaces')) {
    localStorage.setItem('fileSpaces', JSON.stringify({}));
  }
};

// Handle file upload
const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file && file.size <= 1024 * 1024) { // Limit file size to 1MB
    const fileContent = await file.text();
    saveFile(file.name, fileContent);
    displayFiles();
  } else {
    alert('Please upload a file less than 1MB.');
  }
};

// Save file to local storage
const saveFile = (fileName, fileContent) => {
  const fileSpaces = JSON.parse(localStorage.getItem('fileSpaces')) || {};
  fileSpaces[fileName] = fileContent;
  localStorage.setItem('fileSpaces', JSON.stringify(fileSpaces));
};

// Display files in the UI
const displayFiles = () => {
  const fileSpaces = JSON.parse(localStorage.getItem('fileSpaces')) || {};
  fileList.innerHTML = ''; // Clear current list
  Object.keys(fileSpaces).forEach((fileName) => {
    const listItem = document.createElement('li');
    listItem.textContent = fileName;
    fileList.appendChild(listItem);
  });
};

// Initialize app
const initApp = () => {
  initDataStorage();
  displayFiles();
  fileInput.addEventListener('change', handleFileUpload);
  fileUploadButton.addEventListener('click', () => fileInput.click());
};

// Start the application
document.addEventListener('DOMContentLoaded', initApp);