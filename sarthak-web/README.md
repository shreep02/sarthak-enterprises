# SarthakWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Angular 19 Project Setup Guide

This document outlines the steps to set up and configure your Angular 19 project. The project requires you to provide a few essential details, such as your company information and images.

## Project Structure

Ensure that the following file structure is followed for the project:

```
src/
├── assets/
│   ├── images/
│   │   ├── ceo.jpg
│   │   ├── favicon.ico
│   │   ├── logo.png
├── public/
│   ├── contact_info.json
└── private/
    └── contact_info.json
```

### Important Files

1. **contact_info.json** (located in `public/contact_info.json` or `private/contact_info.json`)

   The `contact_info.json` file holds essential company and contact information. Below is the structure of the JSON file that you need to customize.

```
{
  "GSTIN": "YOUR_GSTIN_HERE",
  "CIN": "YOUR_CIN_HERE",
  "COMPANY_NAME": "YOUR_NAME_HERE",
  "CEO_NAME": "YOUR_CEO_NAME_HERE",
  "ADDRESS": "YOUR_ADDRESS_HERE",
  "CONTACT_NO": "YOUR_CONTACT_NO_HERE",
  "EMAIL": "YOUR_EMAIL_HERE",
  "MAP": "YOUR_MAP"
}
```

Replace the placeholder values (`YOUR_GSTIN_HERE`, `YOUR_CIN_HERE`, etc.) with your actual company information.

2. **Images** (stored under `src/assets/images/`)

   Add the following images to the `assets/images/` directory:

   - `ceo.jpg`: A picture of your CEO.
   - `favicon.ico`: Your website's favicon.
   - `logo.png`: Your company logo.

Make sure these images are properly named and placed in the correct directory.

## Steps to Setup

### Step 1: Clone the repository

Clone the Angular 19 project repository to your local machine:

```
git clone <repository_url>
cd <project_directory>
```

### Step 2: Install dependencies

Once you've cloned the repository, navigate to the project folder and install the required dependencies using the following command:

```
npm install
```

### Step 3: Add Company Information

1. Create a `contact_info.json` file in either the `public/` or `private/` folder.
2. Populate the `contact_info.json` with your company details as shown earlier.

### Step 4: Add Images

Place the images (`ceo.jpg`, `favicon.ico`, and `logo.png`) in the `src/assets/images/` folder.

### Step 5: Run the Application

To run the application locally, execute the following command:

```
ng serve
```

Visit `http://localhost:4200` in your browser to see the application running.

### Step 6: Build the Application

To build the application for production, use the following command:

```
ng build --prod
```

This will generate an optimized production build in the `dist/` directory.

## Conclusion

After completing the above steps, your Angular 19 project should be set up and ready to use with the provided company information and images.
