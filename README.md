Created by Michael Zdravkovski.
LinkedIn: linkedin.com/in/michael-zdravkovski

NodeJS has been used to host a MockServer to send requests to in order to retrieve the latest Git commit hash, App name and also the app version. 

The URL which this is hosted on is: localhost:8888/health

To set this up locally, do the following:
1. Download git locally
2. Clone the repo using git, replace REPO.git with the repository link
    - git clone REPO.git
3. Download and install Docker
4. Download and install npm

Build locally:
1. Use docker to build the container. Replace username with your own.
    - docker build -t USERNAME/test-app .
2. Run the docker container, specifying port 8888. Replace username with your own.
    - docker run -d -p 8888:8000 USERNAME/test-app
3. Once running, use a curl request to test the solution
    - curl localhost:8888/health

Testing the build:
1. To run tests, find the container_id
    - docker container list -a
2. Execute the tests, replace container_id with your own.
3. - docker exec CONTAINER_ID npm test unit.js

To set this up as a pipeline in Github and deploy to DockerHub:
1. Use the YAML template provided in /.github/workflows
2. Create a secret called DOCKER_USERNAME
    - Use your Docker username
3. Create a secret called DOCKER_PASSWORD
    - Use your Docker password
4. Amend as you see fit

To set this up using the image in DockerHub:
1. Pull the docker image from DockerHug
    - docker pull mz1234/bob-tech-challenge
2. Once running, use a curl request to test the solution
    - curl localhost:8888/health