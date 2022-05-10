# SE577 Week 5 Assignment
Below is the architecture structure containing all of the components of web page.

![alt text](https://github.com/pm896-drexel/SE577/blob/proj-release-1/images/SE577_week3_assignmnt.jpg?raw=true)


# Components
## Repo Details
It lists the repos for the given github account. Provides following details:
* ID
* Name
* URL
* Language
* Updated

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




