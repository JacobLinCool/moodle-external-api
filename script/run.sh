#!/bin/bash

# start the containers
curl -sSL https://raw.githubusercontent.com/bitnami/containers/main/bitnami/moodle/docker-compose.yml > docker-compose.yml
docker-compose up -d

# wait for moodle to be ready
until curl -sSL http://localhost:80 > /dev/null; do
    echo "Waiting for Moodle to be ready..."
    sleep 5
done

# inject functions-list.php
docker compose cp ./inject/functions-list.php moodle:bitnami/moodle/functions-list.php

# save the json file
curl -o functions.json http://localhost:80/functions-list.php

# stop the containers
docker-compose down
