# Lit Docker Example

Using this as an example to practice Docker concepts

# Steps to use this image

* Clone repo
* docker build -t lit-image .
* docker run -d -p 8000:8000 --rm --name lit-container -v $(pwd):/app -v /app/node_modules lit-image

This image will be put onto Docker Hub at a later time.

**To get this to work properly on Windows, enable WSL2.  You may also need to use a Windows Insider build so that changes made locally are reflected into the running container**