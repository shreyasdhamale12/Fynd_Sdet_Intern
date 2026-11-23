# Test Plan – Mini Checkout Application

## 1. Introduction

### 1.1 Purpose

The purpose of this test plan is to verify the functionality, reliability, and correctness of the Mini Checkout Application. Testing focuses on shopping cart operations, quantity management, order calculations, customer validation, and order confirmation.

Playwright with TypeScript is used to automate the browser-based checkout scenarios.

### 1.2 Scope

The testing covers the following functionalities:

- Application loading and navigation.
- Adding products to the shopping cart.
- Increasing and decreasing product quantities.
- Removing products from the cart.
- Calculating individual line totals.
- Calculating the overall order total.
- Customer name validation.
- Successful order placement and confirmation.
- Empty-cart handling.
- Cart reset functionality.
- Prevention of duplicate order submissions.

The application is frontend-only. Backend, database, payment processing, and external service integrations are outside the testing scope.

## 2. Test Environment

| Component | Details |
|---|---|
| Operating System | Windows 11 |
| Application Type | Frontend web application |
| Frontend Technologies | HTML, CSS, JavaScript |
| Automation Tool | Playwright |
| Programming Language | TypeScript |
| Runtime Environment | Node.js |
| Package Manager | npm |
| Browser | Chromium |
| Test Framework | Playwright Test |
| Application Server | VS Code Live Server |
| Application URL | http://127.0.0.1:5500/app/ |

## 3. Test Data

The following products and values are used during testing:

| Product | Unit Price |
|---|---:|
| Coffee Mug | ₹250 |
| Notebook | ₹150 |

Additional test data:

| Field | Test Value |
|---|---|
| Valid Customer Name | Shreyas |
| Invalid Customer Name | Empty value |
| Coffee Mug Test Quantity | 4 |
| Notebook Test Quantity | 4 |
| Expected Combined Total | ₹1,600 |

## 4. Test Scenarios and Test Cases

### TC-01: Verify Successful Checkout

**Objective:** Verify that a customer can add products, enter the required customer name, and successfully place an order.

**Preconditions:**
- Application is running.
- Shopping cart is empty.
- Checkout page is accessible.

**Test Steps:**
1. Navigate to the checkout application.
2. Add Coffee Mug to the cart.
3. Verify the product count, item count, and order total.
4. Add Notebook to the cart.
5. Verify the updated product count, item count, and order total.
6. Enter a valid customer name.
7. Click the Place Order button.
8. Verify the order confirmation message.
9. Verify that an order reference is generated.

**Expected Results:**
- Both products should be added successfully.
- The order total should update correctly to ₹400.
- The customer should be able to place the order.
- A successful confirmation message should be displayed.
- A non-empty order reference should be generated.

### TC-02: Verify Required Customer Name Validation

**Objective:** Verify that checkout cannot be completed when the customer name is empty.

**Preconditions:**
- Application is running.
- Shopping cart is empty.

**Test Steps:**
1. Navigate to the checkout application.
2. Add Coffee Mug to the cart.
3. Add Notebook to the cart.
4. Verify the product count, item count, and order total.
5. Leave the customer name field empty.
6. Click the Place Order button.
7. Verify that the required-name validation message is displayed.
8. Verify that the confirmation section is not displayed.
9. Verify that the cart contents and order total remain unchanged.

**Expected Results:**
- Checkout should be prevented.
- An appropriate validation message should be displayed.
- No successful order confirmation should be generated.
- Existing cart contents and order total should be preserved.

### TC-03: Verify Quantity Changes Update the Exact Order Total

**Objective:** Verify that increasing product quantities updates the individual line totals and overall order total accurately.

**Preconditions:**
- Application is running.
- Shopping cart is empty.

**Test Steps:**
1. Navigate to the checkout application.
2. Add Coffee Mug to the cart.
3. Increase its quantity by three.
4. Verify that its quantity becomes four.
5. Verify that the line total becomes ₹1,000.
6. Verify that the total item count is four.
7. Add Notebook to the cart.
8. Increase its quantity by three.
9. Verify that its quantity becomes four.
10. Verify that the Notebook line total becomes ₹600.
11. Verify that the total item count becomes eight.
12. Verify that the overall order total becomes ₹1,600.

**Expected Results:**
- Coffee Mug quantity should be four.
- Notebook quantity should be four.
- Coffee Mug line total should be ₹1,000.
- Notebook line total should be ₹600.
- Total item count should be eight.
- Overall order total should be ₹1,600.

## 5. Additional Functional Test Coverage

The following application behaviours should also be verified. They are additional functional checks and are not part of the three required automated scenarios.

| Test Case ID | Test Scenario | Expected Result |
|---|---|---|
| TC-04 | Add a product to the cart | Selected product appears in the cart |
| TC-05 | Increase product quantity | Quantity and line total increase correctly |
| TC-06 | Decrease product quantity | Quantity and line total decrease correctly |
| TC-07 | Remove a product | Selected product is removed from the cart |
| TC-08 | Remove all products | Cart returns to its empty state |
| TC-09 | Reset cart | Cart, quantities, totals, and relevant checkout state are reset |
| TC-10 | Place order with an empty cart | Order placement is prevented |
| TC-11 | Submit Place Order repeatedly | Duplicate order confirmations are prevented |
| TC-12 | Enter whitespace-only customer name | Validation prevents checkout |

## 6. Test Execution and Reporting

The automated tests are executed using Playwright Test.

**Command to execute all tests:**

```bash
npx playwright test
```

**Command to execute tests in headed mode:**

```bash
npx playwright test --headed
```

**Command to view the HTML report:**

```bash
npx playwright show-report
```

The actual execution status, including passed and failed test cases, will be documented separately in `Test-Results.md`.
