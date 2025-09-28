# CSP451 Checkpoint 3

![Security Audit Workflow](https://github.com/SunnyBasion/CSP451-Checkpoint3-SunnyBasion/actions/workflows/advanced.yml/badge.svg)
![Deployment Workflow](https://github.com/SunnyBasion/CSP451-Checkpoint3-SunnyBasion/actions/workflows/deploy.yml/badge.svg)

# Week 3: GitHub Actions and CI/CD Automation | By Sunny Basion 

## Learning Objectives  
This checkpoint focuses on implementing automation through **GitHub Actions**. By the end of this week, you should be able to:  

- Implement Continuous Integration (CI) workflows  
- Automate testing and deployment processes  
- Utilize the GitHub Actions Marketplace  
- Integrate security scanning and code quality checks  

---

## Assignment Overview  

### Part 1: Basic CI Pipeline   
Create a workflow file:  
`.github/workflows/ci.yml`  

**Workflow name:** `CI Pipeline`  
**Triggers:**  
- On push to `main` or `develop`  
- On pull requests targeting `main`  

#### Required Jobs  
- **Linting Job**  
  - Set up Node.js environment  
  - Install dependencies  
  - Run ESLint and Prettier checks  

- **Testing Job**  
  - Run unit tests  
  - Generate and upload coverage report to Codecov  
  - Fail if coverage < 80%  

- **Build Job**  
  - Build the application  
  - Cache dependencies  
  - Upload build artifacts  

---

### Part 2: Advanced Workflows  

#### Scheduled Workflow  
- Run daily dependency check  
- Perform security audit  
- Automatically create an issue if vulnerabilities are found  

#### Deployment Workflow  
- Deploy to **GitHub Pages** on push to `main`  
- Include environment variables  
- Add deployment status badge to this README  

#### Custom Action  
- Create a composite action for reusable steps  
- Document it in its own README  
- Reference it in the main workflow  

---

### Part 3: Workflow Documentation 
Create a `WORKFLOWS.md` file including:  
- Purpose of each workflow  
- Trigger conditions  
- Job dependencies  
- Secrets required  
- Troubleshooting guide  

---

## Deliverables  
✅ Repository containing at least **3 workflow files**  
✅ Screenshot of successful workflow runs  
✅ **Actions tab** showing green checkmarks  
✅ README with **status badges**  
✅ `WORKFLOWS.md` documenting workflows  


