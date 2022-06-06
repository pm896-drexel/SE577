eval $(minikube docker-env)
minikube start --memory=4096 --driver=docker

kubectl port-forward service/pubs-github-web-app 8080:8080

sudo kubectl port-forward service/ingress-nginx-controller 80:80 --namespace ingress-nginx
