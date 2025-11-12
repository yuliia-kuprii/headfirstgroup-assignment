# HeadFirst Group Assignment

This repository contains the test scenario written as part of the assignment from HeadFirst Group. 
As part of the assignment, I: 
- Replaced the initial `./test/cypress` directory files with my own
- Added `data-test-id`'s to frontend components

Please take note, I don't have much experience with Cypress.

API-driven scenario:
- Log in via API
- Add 3–5 items to the basket
- Remove one item
- Change quantity of another
- Validate total price
- Checkout
- Add a valid NL address (with valid postcode)
- Select a delivery method
- Add a valid NL payment option
- Review summary
- Place order
- Validate order success

### TODO: 
Here are some test improvements that I didn't include in this assignment, but are good to have:
- Remove user's address and payment method via API call after tests run.
- Calculate total price of all items in the basket (now it is hardcoded).
- Update Dockerfile to run tests that I just wrote.

Please follow the instruction below to run the tests locally.

## How to Run Tests

#### Step 1
Clone repository:

```bash
git clone https://github.com/yuliia-kuprii/headfirstgroup-assignment.git
```
#### Step 2
Go to the project root directory:
```bash
cd headfirstgroup-assignment
```

#### Step 3
From root directory install NodeJS dependencies: 
```bash
npm i
```

Build backend:
```bash
npm run build:server
```

Build frontend:
```bash
npm run build:frontend
```

Run the app:
```bash
npm start
```

#### Step 4
Run tests

In a separate terminal from root directory run tests in UI mode:
```bash
npm run cypress:open
```
Or run tests without cypress UI:
```bash
 npm run cypress:run
```


**Author:** Yuliia Kuprii (Senior QA Engineer)