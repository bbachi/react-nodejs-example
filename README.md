# react-nodejs-example
## Docker
#### Create Dockerfile and write commands using the reference given above
>step1: Creating Docker image in frontend using :
>`docker build -t <imagename> . 

>step2: Creating Docker image in backend using :
>`cd backend/`
>`docker build -t <imagename> . `

>step3: Creating container using Docker image by this command :
`docker run -itd --name <container_name> -p <portno> <imagename>`

>step4: Checking the containers created using :
>To see running containers : 
>` docker ps ` 
>To see running and non-running containers :
>` docker ps -a ` 

>step5: In browser exposing the container by :
>`localhost:portno`

## Dockercompose
#### Nameformat for docker compose file creation: `docker-compose.yml`
**To run:** `docker compose up -d`
**To stop:** `docker compose down -d`
**For expose:** In browser `ipaddr:portno`

## Dockerswarm 
#### Nameformat for docker stack file creation: `docker.stack.yml`
>step1: Initializing dockerswarm in manager node by :
>`docker swarm init --advertise-addr <IPaddr of manager node>`

>step2: Assigning workernode for managernode using token :  
>`docker swarm join --token (token will be provided after executing step1)`

>step3: Creating the dockerstackfile by :
>`vi docker.stack.yml` 

>step4: Deploying the docker stack using :
>`docker stack deploy -c docker.stack.yml <name>`

>step5: Exposing the container in browser by :
>`ipaddr:portno`
