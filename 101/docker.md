# Docker

## What is is?
>an open-source project that automates the deployment of software applications inside containers by providing an additional layer of abstraction and automation of OS-level virtualization on Linux.

## What are images?
>A Docker image is a file used to execute code in a Docker container. Docker images act as a set of instructions to build a Docker container, like a template.

## What are containers
>A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

## Getting Started
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

## Useful commands
| command | Description |
| docker ps | Display all the running docker containers |
| docker images | Display all the downloaded images |
| docker run -it <image> <command> | Run any command on the image |
| docker cp <file> <container>:<file_path> | Copy any file to the container. Works either way from host to container or container to host |

## docker-compose
https://docs.docker.com/compose/install/

## Useful commands
| command | Description |
| docker-compose up <container_name> | Start all containers in compose file |
| docker-compose up -d <container_name> | Start all containers in background |
| docker-compose exec <container_name> <action> | Run action on container. bash for ssh |
| docker-compose stop | Stop all the containers |
| docker-compose down | Stop and remove all the containers |

## Links
https://docker-curriculum.com/