# Test Plan
This Test Plan covers PART2 of the HeadFirst Group assignment.
## Overview

**Test data:** User credentials  
**Test environment:** Dev / Staging  
**Other test conditions:** Feature flags, permissions, test tools  
**Test platform:** Mobile & Desktop browsers  
**Operating systems:** Windows, macOS, iOS, Android  

---

## Preconditions

1. Open [https://striive.com/en](https://striive.com/en)  
2. Log in with valid credentials  
3. Navigate to **My profile → My resume & skills**

---

## Test Ideas (Base for Test Cases)

### File Type

| Type | Expected Result |
|------|------------------|
| `pdf`, `docx`, `html` | Positive check |
| `png`, `jpeg` | Negative check (error message) |

---

### File Amount

| Value | Expected Result |
|------|------------------|
| 0 | Positive (presumably cover letter is optional) |
| 1 | Positive |
| 2 | Negative (not allowed by design) |

---

### File Size

| Value | Expected Result |
|------|------------------|
| 0 MB | Positive (presumably cover letter is optional) |
| ≤ 5 MB | Positive |
| > 5 MB | Negative (error message) |

---

### Text Input

| Value | Expected Result |
|------|------------------|
| 0 symbols | If optional – profile saves successfully |
| 1000 symbols | Max valid input |
| 1001 symbols | Negative check (error/warning message) |

---

### Actions

#### Upload Cover Letter
1. First upload  
2. Second upload (replaces existing cover letter – same as resume behavior)

#### View Cover Letter
1. File thumbnail view  
2. File view in a new tab  
3. Non-editable text preview

#### Remove Cover Letter
- Ensure file and text data are removed successfully.

---

## Affected Functionality

- Dutch resume section (file upload) works as before  
- Text input in “Function” section works as before  

---

## Functional Testing Types

- UI  
- End-to-End (E2E)  
- Acceptance  
- Smoke  
- Regression  

---

## Non-Functional Testing

| Area | Notes |
|------|-------|
| **Security** | PDF/DOCX files may contain malicious scripts. Consider using a pre-verification library before upload to protect employers. |
| **Accessibility (a11y)** | Ensure screen reader support and keyboard navigation. |
| **Internationalization (i18n)** | Dutch, English support. |
| **Compatibility** | Verify across major browsers. |
| **Portability** | Test across OS versions (Windows, macOS, Android, iOS). |
| **Scalability** | Ensure component is reusable for other file types, sizes and sections in the portal |
| **API** | Validate correct API requests/responses. |
| **Analytics** | Confirm tracking events. |
| **UX** | Smooth interactions with elements. |

---

## Positive Testing Scenarios

- Upload valid cover letter (`pdf`, `docx`, `html`)  
- View uploaded file  
- Edit and save valid text input  
- Remove uploaded file successfully  

---

## Negative Testing Scenarios

- Upload invalid file type (`png`, `jpeg`)  
- Upload file larger than 5 MB  
- Enter more than 1000 characters in text input  
- Attempt to upload more than one file 

---

## Automation Strategy

Automate **positive golden path scenarios**:
1. Upload a cover letter file  
2. View the uploaded letter  
3. Fill text input  
4. View filled text  

> Tools: [Cypress](https://www.cypress.io/), [Playwright](https://playwright.dev/) for E2E testing

---

## XFN Collaboration (Sprint-wise)

**Roles involved:**  
- Product Owner (PO)  
- Business Analyst (BA)  
- Design  
- Software Engineers  
- QA Engineers  
- Customer Support  

### Collaboration Process

1. Collaborate with **PO, BA, and Design** to analyze the Product Requirement Document and Design.  
2. Clarify unclear outcomes and ensure high-fidelity requirements.  
3. Review **Frontend and Backend Tech Specs** for consistency. 

Once Tech Specs are presented and approved by the team, the Test Plan can be created (note: sometimes Test Plan can be created in parallel with Tech Specs prepared by Software Engineers). 

1. Draft a **Test Plan** describing:
   - Test approaches  
   - Acceptance criteria  
   - Risk mitigation plan  
   - Test cases, environments, data  
   - Automation, smoke, and regression strategy  
2. Present the Test Plan for team approval.  
3. Once the feature is code complete:
   - Software Engineers perform pre-QA verification.  
   - QA Engineers conduct multiple testing iterations (dynamic testing), report bugs.  
4. Team executes **acceptance testing** on the Release Candidate.  
5. Post-release, monitor production behavior and resolve issues promptly.  
6. Investigate any production bugs and document prevention measures.  

> These activities span one or multiple sprints, depending on feature complexity and team workflow.

---

**Author:** Yuliia Kuprii  
**Last Updated:** November 2025