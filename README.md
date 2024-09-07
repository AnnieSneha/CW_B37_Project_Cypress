# ADD TO CART FUNCTIONALITY

## Introduction
Overview  
This project aims to automate the "Add to Cart" functionality on the TutorialsNinja demo e-commerce website using Cypress, a powerful JavaScript-based end-to-end testing framework. The automation script will simulate a user searching for a product, adding it to the cart, and verifying the addition. The project will follow best practices by using the Page Object Model (POM) to organize test code and ensure maintainability.

Purpose  
The primary goal of this project is to demonstrate the ability to automate common e-commerce interactions, which are essential for functional testing of web applications. By automating the "Add to Cart" process, we can ensure that this crucial functionality works correctly, enhancing the reliability and user experience of the website.

Core Functionality  
1. Search for a Product: Enter a product name into the search box and initiate the search.
2. Select Product: Click on the desired product from the search results.
3. Add to Cart: Add the selected product to the shopping cart.
4. Verify Addition: Ensure that the product has been successfully added to the cart by checking the shopping cart.
   
Problems Solved  
1. Automated Testing: Reduces the need for repetitive manual testing, saving time and effort.
2. Consistency: Ensures consistent test execution, minimizing human errors.
3. Early Bug Detection: Identifies issues early in the development cycle, improving the overall quality of the application.
4. Tools and Technologies

Programming Language: JavaScript  
Testing Framework: Cypress  
Text Editor/IDE:VSCode  
Web Browser: Chrome / Edge / Firefox / Electron

## Project Type
Frontend

## Deployed App
Frontend: https://tutorialsninja.com/demo/

## Directory Structure
```
PROJECT_CYPRESS/
├─ cypress/
│  ├─ fixtures/
│  ├─ integration/
|  |  ├─Project
│  │  |  ├─ framework
│  │  |  |  ├─ pagetest.js
│  ├─ plugins/
│  ├─ support/
|  |  ├─PageObjects
├─ node_modules/
├─ .gitignore
├─ cypress.config.json
├─ package-lock.json
├─ package.json
```
## Video Walkthrough of the project
https://drive.google.com/file/d/1TNAmmcdeG-xR-OhUbccj9buLslw3LikC/view?usp=sharing

## Video Walkthrough of the codebase
https://drive.google.com/file/d/17UR2wTohkzB4hOLQz99JSU_PC8U1apnZ/view?usp=sharing

## Features
1. Searches for a product
2. Selects a product from search results
3. Adds the selected product to the cart
4. Verifies that the product is successfully added to the cart

## Design Decisions
Used Page Object Model (POM) for better code organization and maintainability.

## Installation & Getting Started
Initialize Node.js Project  
To start a new Node.js project, you need to create a package.json file. Run the following command in your terminal:
```
npm init
```
Install Cypress  
Once you have your package.json file, you can install Cypress. Run the following command:
```
npm install cypress --save-dev
```
Configure Cypress (cypress.json)  
The cypress.json file is the main configuration file for Cypress. You can specify various settings here, such as the base URL for your tests and other configurations.

## Usage
```
# Open Cypress Test Runner
npx cypress open
```
```
# Run the tests
npx cypress run
```
## Technology Stack
Cypress: End-to-end testing framework  
JavaScript: Programming language  
VSCode: Integrated Development Environment  
Chrome/Edge/Firefox/Electron: Web browser for running tests





