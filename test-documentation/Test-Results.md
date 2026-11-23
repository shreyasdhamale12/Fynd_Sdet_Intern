# Test Execution Results – Mini Checkout Application

## 1. Overview

This document records the execution results of the automated browser tests for the Mini Checkout Application.

The test suite is developed using **Playwright with TypeScript** and follows the Page Object Model (POM) design pattern.

The objective is to verify successful checkout, customer name validation, and accurate order-total calculations when product quantities change.

## 2. Test Environment

| Component | Details |
|---|---|
| Operating System | Windows 11 |
| Automation Framework | Playwright |
| Programming Language | TypeScript |
| Browser | Chromium |
| Runtime | Node.js |
| Test Execution | Playwright Test Runner |
| Application Server | VS Code Live Server |

## 3. Test Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 3 |
| Passed | All 3 test cases |
| Failed | Zero test cases |
| Skipped | Zero test cases |
| Execution Status | Ran all test cases |

## 4. Detailed Test Results

### TC-01: Successful Checkout with Confirmation

**Objective:** Verify that a customer can add products to the cart, enter a valid customer name, and successfully place an order.

| Attribute | Details |
|---|---|
| Test Case ID | TC-01 |
| Test Scenario | Successful Checkout |
| Test Type | Functional / Automation |
| Priority | High |

**Test Execution Steps:**

1. Navigate to the checkout application.
2. Add Coffee Mug to the cart.
3. Verify product count, total item count, and order total.
4. Add Notebook to the cart.
5. Verify updated cart counts and order total.
6. Enter customer name: Shreyas.
7. Click Place Order.
8. Verify the confirmation message.
9. Verify that an order reference is generated.

**Expected Result:**
- Both products should be added successfully.
- Product count should be 2.
- Total item count should be 2.
- Order total should be ₹400.00.
- Checkout should complete successfully.
- Confirmation message and a non-empty order reference should be displayed.

**Actual Result:** Order confirmation was provided at the end with order reference.

**Status:** Passed

---

### TC-02: Missing Required Customer Name

**Objective:** Verify that the application prevents checkout when the customer name field is empty.

| Attribute | Details |
|---|---|
| Test Case ID | TC-02 |
| Test Scenario | Required Field Validation |
| Test Type | Negative Testing / Automation |
| Priority | High |

**Test Execution Steps:**

1. Navigate to the checkout application.
2. Add Coffee Mug to the cart.
3. Add Notebook to the cart.
4. Verify product count, total item count, and order total.
5. Leave the customer name field empty.
6. Click Place Order.
7. Verify the validation message.
8. Verify that the order confirmation is not displayed.
9. Verify that cart contents and order total remain unchanged.

**Expected Result:**
- Checkout should be blocked.
- A customer name validation message should be displayed.
- No successful order confirmation should be generated.
- Existing cart contents should be preserved.
- Order total should remain ₹400.00.

**Actual Result:** Order was not generated. A error was shown to input the name.

**Status:** Passed

---

### TC-03: Quantity Change Updates the Exact Order Total

**Objective:** Verify that increasing product quantities updates individual line totals and the overall order total accurately.

| Attribute | Details |
|---|---|
| Test Case ID | TC-03 |
| Test Scenario | Quantity and Order Total Validation |
| Test Type | Functional / Automation |
| Priority | High |

**Test Execution Steps:**

1. Navigate to the checkout application.
2. Add Coffee Mug to the cart.
3. Increase its quantity three times.
4. Verify that its quantity becomes 4.
5. Verify that the total item count becomes 4.
6. Verify that the order total becomes ₹1,000.00.
7. Add Notebook to the cart.
8. Increase its quantity three times.
9. Verify that its quantity becomes 4.
10. Verify that the total item count becomes 8.
11. Verify that the combined order total becomes ₹1,600.00.

**Expected Result:**

| Product | Quantity | Unit Price | Line Total |
|---|---:|---:|---:|
| Coffee Mug | 4 | ₹250 | ₹1,000.00 |
| Notebook | 4 | ₹150 | ₹600.00 |
| **Grand Total** | **8** | | **₹1,600.00** |

The application should correctly update the quantities, line totals, and overall order total.

**Actual Result:** Exact amount was calculated.

**Status:** Passed

---

## 5. Defect Summary

| Defect ID | Description | Severity | Status |
|---|---|---|---|
| - | No defects recorded yet | - | All  test cases were passed |

Only genuine defects discovered during test execution should be added to this section.

## 6. Overall Test Conclusion

The automated test suite is designed to validate the three primary checkout scenarios:

- Successful order placement and confirmation.
- Prevention of checkout when the required customer name is missing.
- Accurate order-total calculation following quantity changes.

All test cases were passed without any defects.

## 7. Test Execution Command

To execute the automated test suite:

```bash
npx playwright test
```

To execute tests with the browser visible:

```bash
npx playwright test --headed
```

To view the HTML test report:

```bash
npx playwright show-report
```