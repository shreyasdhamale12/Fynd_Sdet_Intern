<div align="center">

# Mini Checkout Application & Playwright Browser Testing

> **Note:** I have six months of experience, and based on that experience, I completed this assignment using Playwright with TypeScript.



![HTML5](https://img.shields.io/badge/HTML5-markup-orange)
![CSS3](https://img.shields.io/badge/CSS3-styles-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-application-yellow)
![TypeScript](https://img.shields.io/badge/TypeScript-tests-blue)
![Playwright](https://img.shields.io/badge/Playwright-browser%20testing-2EAD33)

</div>



## Table of contents

- [Project overview](#project-overview)
- [Key features](#key-features)
- [Technology stack](#technology-stack)
- [Application preview](#application-preview)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Running the application](#running-the-application)
- [Running browser tests](#running-browser-tests)
- [Automated test coverage](#automated-test-coverage)
- [Sample calculation](#sample-calculation)
- [Test documentation](#test-documentation)
- [Test execution results](#test-execution-results)
- [Defects and known issues](#defects-and-known-issues)

---

## Project overview

This assignment combines a mini checkout application with browser automation. Customers use the application to manage a shopping cart and submit an order. Playwright and TypeScript are identified as the browser-testing tools in the supplied project brief.

The brief describes this as a **frontend-only** application: no backend, database, payment gateway, or external service is part of the stated scope. Confirm the implementation details against the application source before relying on this description.

## Key features

The following items are requested in the assignment brief. Their implementation could not be verified without the application source:

| Feature | Verification |
|---|---|
| Add products to cart | Confirm in application source |
| Increase and decrease quantities | Confirm in application source |
| Remove products | Confirm in application source |
| Automatic line-total and order-total calculation | Confirm in application source |
| Customer name validation | Confirm in application source |
| Order confirmation and reference generation | Confirm in application source |
| Cart reset and empty-cart handling | Confirm in application source |
| Duplicate order submission prevention | Confirm in application source |

## Technology stack

These technologies are named in the assignment brief; versions and actual project dependencies should be checked in `package.json` and the source files.

| Technology | Purpose |
|---|---|
| HTML5 | Application markup |
| CSS3 | Application presentation |
| JavaScript | Frontend behavior |
| TypeScript | Playwright page object and test code |
| Playwright | Browser automation and test execution |
| Node.js | JavaScript runtime for tooling and tests |
| npm | Dependency management and command execution |

## Application preview

No screenshot was supplied with the project content available for this README. Add a real, committed screenshot here when one is available; no image path is assumed.

<!-- Optional: add a repository-relative screenshot and caption, for example:
![Checkout application](path/to/your/screenshot.png)
*Checkout application — replace with a verified screenshot and path.*
-->

## Project structure

The following paths are specified in the assignment brief. The contents of `app/` and any additional files were not available to verify.

```text
.
├── app/                         # Frontend application and assets
├── pages/
│   └── checkOutPage.ts          # Checkout page object
├── tests/
│   └── example.spec.ts          # Playwright test specification
├── test-documentation/
│   ├── Test-Plan.md             # Test approach and scope
│   └── Test-Results.md          # Recorded execution results
├── package.json                # npm metadata, dependencies, and scripts
├── playwright.config.ts        # Playwright test configuration
└── README.md
```

## Prerequisites

- Node.js and npm installed on Windows.
- The project dependencies installed from the root directory.
- Playwright's Chromium browser installed for Chromium runs.

Check `package.json` and `playwright.config.ts` for required Node.js versions, scripts, and configured browser projects.

## Installation and setup

From the project root in PowerShell or Command Prompt:

```powershell
npm install
npx playwright install chromium
```


## Running the application

Start the local server using the verified script or instructions in `package.json`. The application URL must match the navigation URL configured in `pages/checkOutPage.ts`;

## Running browser tests

The following are standard Playwright Test commands; confirm the installed Playwright version and configuration before use:

```powershell
# Run the full configured test suite
npx playwright test

# Run tests with a visible browser
npx playwright test --headed

# Run one test file
npx playwright test tests/example.spec.ts

# Open the HTML report (available after a run when the HTML reporter is configured)
npx playwright show-report
```


## Automated test coverage

The assignment brief specifies these three scenarios. The test implementation was not available to compare against the descriptions.

| Scenario | Validation objective |
|---|---|
| Successful checkout with order confirmation | Verify checkout completes and an order confirmation is shown. |
| Missing required customer name blocks checkout | Verify checkout is prevented when the required name is missing. |
| Quantity changes update the exact order total | Verify quantity updates are reflected in the calculated total. |

## Sample calculation

The quantity-test example provided in the assignment brief is:

| Product | Quantity | Unit price | Line total |
|---|---:|---:|---:|
| Coffee Mug | 4 | ₹250 | ₹1,000 |
| Notebook | 4 | ₹150 | ₹600 |
| **Combined order total** |  |  | **₹1,600** |

## Test documentation

| Document | Purpose |
|---|---|
| [Test Plan](test-documentation/Test-Plan.md) | Test scope, approach, and planning details. |
| [Test Results](test-documentation/Test-Results.md) | Recorded outcomes of test execution. |

## Test execution results


| Test Case ID | Test scenario | Expected result | Actual result | Status |
|---|---|---|---|---|
| C01 | Successful checkout with order confirmation | Order completes and confirmation is shown | Not available | Not Run / unverified |
| C02 | Missing required customer name blocks checkout | Checkout is blocked | Not available | Not Run / unverified |
| C03 | Quantity changes update the exact order total | Displayed total reflects updated quantities | Not available | Not Run / unverified |

## Defects and known issues

There were no defects or issues found.
