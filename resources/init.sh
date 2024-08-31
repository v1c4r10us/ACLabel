#!/bin/bash
docker run -it -d -p 9005:9005 --name pylistener -v ./files:/app/result python:3.11-slim /bin/bash
docker cp ./listener.py pylistener:/app
docker exec -d pylistener bash -c "python3 /app/listener.py"
