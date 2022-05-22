# Render Github repos Remotely using our own Custom MicroService
|Category    | Value             |
|------------|-------------------|
| Identifier | adr-0001          |
| Status     | Accepted          |
| Author(s)  | Pallavi Mukherjee |
| Date:      | May 22, 2022      |



**keywords:** Repos, yaml, Docker, microservice, fastify, node


# Context And Problem Statement

We would like to use this project as a Demo to showcase remote call to list github repos.

We will render all github repo details by calling our own custom microservice which wil get list in JSOB format and deploy our  microservice via Docker container.

# Considered Options
* node
* Go
* fastify-node

# Decision Outcome
Choose **fastify-node** , because:
* Easier to implement and understand.
* Require minimal amount of code to create a basic API Service.

Architecture Diagram representing Custom github repo service to render githib details:

![alt text](https://github.com/pm896-drexel/SE577/blob/proj-release-3/images/typescript.jpg?raw=true)

# Steps to run Application

* Navigate to microservices/github_yaml directory
  * Install necessary npm or yarn services:
    * ``npm init -y``
    * ``npm i fastify``
    * ``npm i -D typescript @types/node``
    * ``npm  i fastify-cors``
  * Run following cmd command to run github_yaml microservice, which will start the microservice in localhost:
    * `yarn run watch`
  * This microservice is set to listen on port 4080, if you want, you can change the port for running it on your local in index.ts file.
  * Run the folllowing address in your browser to validate the json output:
    * `http://localhost:4080/yaml_repos`
* Open a new Terminal, and navigate to the src/ directory of the project.
* Run the following cmd to start the application:
  * `quasar dev`
* Open application in browser with following address and verify if the repoDetails tab are listing the repo details.
  * `http://localhost:8080`

# Steps to run Application via Docker

* Navigate to src/microservices/github_yaml directory.
* Build and run Application using Docker by running following commands:
  * Build Command
    * ``make docker-build``
  * Run Command
    * ``make docker-run``
* Run the folllowing address in your browser to validate the json output:
  * `http://0.0.0.0:4080/yaml_repos`
* Follow directions mentioned under ``Steps to run Application`` to run application on browser.

# Prerequisite

* Docker should be installed and running on your local.



