# HeadFirstGroup Assignment

This repository contains the test scenario written as part of the assignment from HeadFirstGroup. 

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

### Notes 
These are future improvements that were not included into results of this assignment:
- After all tests run remove user's address and payment method via API call.
- Create solution to avoid hard code for Total price.
- Docker setup
- 

Please follow the instruction below to run the tests locally.

## Instruction to run tests

#### Step 1
Clone repository:

```bash
git clone https://github.com/yuliia-kuprii/headfirstgroup-assignment.git
```
#### Step 2
Install dependencies
Open tab in terminal and run command in juice-shop folder:

```bash
npm i
```

Build the project
```bash
npm run build:server
```

```bash
npm build:frontend
```

```bash
npm start
```

#### Step 3
Run tests

Open second tab in terminal and run command in juice-shop folder:
```bash
npm run cypress:run
```
Or run tests in UI mode:
```bash
 npm run cypress:open
```


**Author:** Yuliia Kuprii (Senior QA Engineer)