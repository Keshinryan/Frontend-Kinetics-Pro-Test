# Frontend Kinetics Pro Test Project
This project is a React application that demonstrates form handling, validation, and routing with Redux and React Router. It includes a dynamic form with various fields, validation rules, and displays a loading animation during route transitions.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [API Reference](#api-reference)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Overview

This React application includes:

- A form with fields for Name, Phone Number, Email, Address, Education, and Message.
- Validation for form fields using Redux state.
- Navigation between different routes using React Router.
- A loading animation displayed during route transitions.

### Prerequisites

- Node.js and npm installed on your machine
- Basic understanding of React, Redux, and React Router

### Installation

1. **Clone the Repository**

   ```bash
   git clone  https://github.com/Keshinryan/Frontend-Kinetics-Pro-Test
   ```
   
2. **Navigate to the Project Directory**

    ```bash
    cd Frontend-Kinetics-Pro-Test
    ```


3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Run the Frontend in Development  **

    ```bash
    npm run dev
    ```
## Usage
### Navigation
- Array Manipulation Challenge: Navigate to /AMC to view the Array Manipulation Challenge component.
- String Anagram Detection: Navigate to /SAD to view the String Anagram Detection component.
- Form Using Redux: Navigate to /Form to access and submit the form.
- Submitted Data: Navigate to /submitted to view the data that was submitted through the form.

## Code Structure
    src/
        components/
            Form.jsx
            Submitted.jsx
            Loading.jsx
            FormField.jsx
        App.jsx
        main.js
        App.css

## Main Components

- **`App.jsx`**: Sets up routing and navigation for the application.
- **`Form.jsx`**: Manages form input, validation, and submission.
- **`Submitted.jsx`**: Displays the data submitted through the form.
- **`Loading.jsx`**: Shows a loading animation during route transitions.
- **`FormField.jsx`**: A reusable component for rendering form fields with labels and error messages.

## API Reference
- Repository : <a href="https://github.com/Keshinryan/Backend-Kinetics-Pro-Test" >Backend Repo</a>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to [React](https://reactjs.org/) and [Redux](https://redux.js.org/) for their powerful frameworks.
- Inspiration and guidance from various tutorials and community resources.

