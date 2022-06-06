# Github Repo Information Application
This Single page Application provides various github related information.

## Application Component Architecture
### Model
![alt text](https://github.com/pm896-drexel/SE577/blob/proj-release-3/images/spa_components.jpg?raw=true

The main components of the Application are -
* **GitHub User Details** - Get specific github user details.
* **Github Repos** - Get list of repos user owns.
* **Github Gists** - Get list of gists owned by user.
* **Github Commits** - get repo commits details.
* **Github Repo Details** - Get repo details renders from yaml file.

### Facts
* Our SPA makes REST API call from each component to get github repo details.
* All of the components except **Github Repo Details** component make  call to remote api service ``https://api.github.com`` to get details.
* All of the component services renders response in JSON format, which then our application maps it on table structure leveraging vue templates.
* Github Repo Details make call to local api service which gets data from static yaml file containing repo details.
* Axios library has been used to make rest API calls.

## Application Service Dependencies Architecture

### Model
![alt text](https://github.com/pm896-drexel/SE577/blob/proj-release-3/images/pod_communication.jpg?raw=true

## Application  network Architecture on Kubernetes

## Steps to run your Application

### Minikube Setup
* We need to have local kubernetes cluster setup in order to run our application.
* I have used minikube and following are the setup instructions to run application on minikube -
  * Run command to install minikube on local -
    * ```
         curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64
         sudo install minikube-darwin-amd64 /usr/local/bin/minikube

  * Start minikube - ``minikube start --memory=4096 --driver=docker`` using docker driver and make sure you set your custom memory, otherwise cluster won't allow to run various applications.
  * Enable ingress - ``minikube addons enable ingress``
  * Port forward from local to ingress-controller pod to run your application using localhost and keep it open until your application runs.
    * ``sudo kubectl port-forward service/ingress-nginx-controller 80:80 --namespace ingress-nginx``

### Create Kubernetes objects for our Application

* Open new terminal and run command ``eval $(minikube docker-env)``. This will use docker deamon in kubernetes, which can be  used to load your application docker images in minikube.
* Go to your Application path ``~/<ApplicationPath>/SE577/`` and run ``make docker-build-web``to load your web application docker image.
* Go inside ``~/<ApplicationPath>/SE577/src/microservices/github_yaml/`` and run ``make docker-build`` to load github service docker image.
* Run following commands to create application specific kubernetes objects.
  * ``kubectl create -f ~/<ApplicationPath>/SE577/src/microservices/github_yaml/k8s/deploy_repo_yml_api.yml``.
  * ``kubectl create -f ~/<ApplicationPath>/SE577/k8s/deploy_repo_web.yml``
  * ``kubectl create -f ~/<ApplicationPath>/SE577/k8s/ingress-repo-web.yml``

### Access Application
* Open Browser and type ``http://localhost`` on address bar  to run your application.

### Prerequisities

* Docker should be installed and running on your local.
* Make sure the docker verison is greater than 18.x.x, otherwise minikube might not be able to start properly, if using docker driver.
* Create file ``ghconfig.json`` at location ``~/<ApplicationPath>/SE577/src/`` before creating docker images. It contains github credential details in following format -
  * ```
    {
      "username": "xxxxx",
      "token": "xxxxxxxxxxx"
      }

