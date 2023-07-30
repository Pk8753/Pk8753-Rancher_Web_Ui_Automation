# Cypress Project

Welcome to the Cypress Project to automate Rancher login page.

## Prerequisites

Before running the tests, please ensure you have the following software installed on your machine:

1. [Node.js](https://nodejs.org/) (v14 or higher)
2. [npm](https://www.npmjs.com/) (Node Package Manager, usually comes with Node.js)
3. [cypress](https://cypress.io/)
4. [DockerDesktop]
5. [Kubernetes]
6. Rancher must be up and running on host URL. (127.0.0.1)

## Setup

To get started with the Cypress project, follow these steps:

1. Setup Rancher into your local machine:

```bash
1. Install Docker Desktop:

2. Enable Kubernetes in Docker Desktop:

3. Install Rancher on the Local Kubernetes Cluster:

    A) First, you need to install Helm on your machine. You can find the installation instructions on the Helm website.
        
    B) Add the Helm chart repository for Rancher.
      # helm repo add rancher-stable https://releases.rancher.com/server-charts/stable
      # helm repo update
      
    C) Create a namespace for Rancher.
      # kubectl create namespace cattle-system
      
    D) Install Rancher using Helm.
      # helm install rancher rancher-stable/rancher --namespace cattle-system --set hostname=rancher.local
    
    E) Accessing Rancher via browser.
      # http://127.0.0.1


```




2. Clone this repository to your local machine:

```bash
git clone https://github.com/Pk8753/Pk8753-Rancher_Web_Ui_Automation.git
cd Rancher_web_Ui_Automations
run npm install
```


3. Run cypress automation:

```bash
Run Locally :
# npx cypress run --browser chrome --env user="userName",passwd="password"

Run CI/CD :
# npm run cypresstest

```


3. Setup Rancher into your local machine:

```bash
1. Install Docker Desktop:

2. Enable Kubernetes in Docker Desktop:

3. Install Rancher on the Local Kubernetes Cluster:

    A) First, you need to install Helm on your machine. You can find the installation instructions on the Helm website.
        
    B) Add the Helm chart repository for Rancher.
      # helm repo add rancher-stable https://releases.rancher.com/server-charts/stable
      # helm repo update
      
    C) Create a namespace for Rancher.
      # kubectl create namespace cattle-system
      
    D) Install Rancher using Helm.
      # helm install rancher rancher-stable/rancher --namespace cattle-system --set hostname=rancher.local
    
    E) Accessing Rancher via browser.
      # http://127.0.0.1


```



4. Access mochawesome test report:

```bash
    A) Once tests are completed test report will be generated in below mention path.
      
      /> cypress/reports/html/index.html
    
    B) Opne html file into browser to access test report.

```