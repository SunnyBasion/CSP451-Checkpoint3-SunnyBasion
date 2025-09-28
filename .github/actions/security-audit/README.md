# Security Audit Action

Runs a security audit on your Node.js project and creates a GitHub issue if vulnerabilities are found.

## Inputs

- `node-version` (default: 18) – Node.js version for the workflow.

## Usage

```yaml
steps:
  - name: Run Security Audit
    uses: ./.github/actions/security-audit
    with:
      node-version: 18
```
