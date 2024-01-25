# examples/nodejs-multi-port

This repository contains a Node.js application configured to demonstrate the use of multiple ports for varied server types, ideal for local development and deployment on Convox. The application features:

1. **Primary HTTP Server**: Serves a basic "Hello World" response with environment information, listening on an environment-defined port.
2. **Secondary HTTP Server**: Responds with "Hello World AGAIN from Secondary Port" on a separate environment-variable-defined port.
3. **TCP Server**: Handles TCP connections on another specified port, echoing back received data in the format `Echo: [your message]`.

Key components:
* [Dockerfile](Dockerfile)
* [convox.yml](convox.yml)
* [app.js](app.js)

To test the TCP server, use `nc` or a similar tool from the shell of another service on your rack. After connecting, type a message and press Enter; the server will echo back your message prefixed with `Echo:`.

For setup and deployment, refer to the Convox [getting started guide](https://nodejs.org/en/docs/guides/getting-started-guide/) and this repository's configuration files.
