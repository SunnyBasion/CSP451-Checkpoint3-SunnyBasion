
# Workflow Documentation

This document provides details about all GitHub Actions workflows in this repository, including purpose, triggers, job dependencies, secrets, and troubleshooting.

---

## 1. Advanced Workflow (Security Audit)

### Purpose
- Runs a **security audit** on project dependencies.
- Generates `audit-report.json`.
- Creates a **GitHub issue** if vulnerabilities are found.

### Trigger Conditions
- Scheduled **daily at 2:00 AM ET** (`cron: 0 6 * * *`).
- Can also be triggered **manually** via workflow_dispatch.

### Job Dependencies
- **security-check** job:
  1. Checkout repository.
  2. Set up Node.js environment.
  3. Install dependencies (`npm install`).
  4. Run `npm audit`.
  5. Create a GitHub issue if vulnerabilities are found.

### Secrets Required
- `${{ secrets.GITHUB_TOKEN }}` – automatically provided by GitHub for creating issues.

### Troubleshooting Guide
- **Workflow fails to run**: Ensure the workflow file is committed to `main` branch.
- **No GitHub issue created despite vulnerabilities**: Check that `GITHUB_TOKEN` has **write permissions** (Settings → Actions → Workflow permissions → Read & write).
- **audit-report.json missing**: Ensure `npm install` completes successfully.
- **Errors in audit script**: Verify the composite action is correctly used and paths are valid.

---

## 2. Deployment Workflow (GitHub Pages)

### Purpose
- Builds the project and deploys to **GitHub Pages**.
- Updates the `gh-pages` branch automatically.
- Provides a **status badge** in README.

### Trigger Conditions
- Push to `main` branch.
- Can also be triggered **manually** via workflow_dispatch.

### Job Dependencies
- **deploy** job:
  1. Checkout repository.
  2. Set up Node.js environment.
  3. Install dependencies.
  4. Build project (`npm run build`).
  5. Deploy build output to `gh-pages` branch.

### Secrets Required
- `${{ secrets.GITHUB_TOKEN }}` – must have **write permissions** for Actions.
- Optional environment variables for build (e.g., API keys).

### Troubleshooting Guide
- **403 Permission error**: Ensure Actions token has **read & write permissions**.
- **Build fails**: Verify Node.js version and dependencies.
- **Site not updating**: Confirm `publish_dir` matches build output folder.
- **Badge not updating**: Check workflow filename in README badge URL matches workflow file.

---
## 3. Security Audit Action (Custom Composite Action)

This repository includes a **custom composite action** that runs a security audit on Node.js project dependencies.

### Purpose
- The **Advanced Workflow** uses this **custom composite action** (`security-audit`) to:
  - Run `npm audit` and generate a JSON report (`audit-report.json`)
  - Automatically create a GitHub issue if any vulnerabilities are found
- By encapsulating these steps in a composite action, the workflow is **cleaner, reusable, and maintainable**.

### Inputs
- `node-version` (default: 18) – Node.js version used for the workflow.

### Usage
The composite action is called in the **Advanced Workflow**:

```yaml
steps:
  - name: Run Security Audit
    uses: ./.github/actions/security-audit
    with:
      node-version: 18
### Notes
- The two workflows are independent; Advanced Workflow does not depend on Deployment Workflow.
- Workflows are documented for clarity, maintainability, and reproducibility.
