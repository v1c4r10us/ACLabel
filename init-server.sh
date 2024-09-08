#!/bin/bash
docker build -t server-label .
docker run -it -d -p 3000:3000 --name reactlabel -v ./resources/files:/app/public/files server-label sh -c "npm start"
