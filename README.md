How to prepare the environment to run a node.js application using mongodb?

1. Download and install node.js (LTS version):
   https://nodejs.org/en/download
2. Download and install MongoDB Community Server (in terminal):
   https://www.mongodb.com/try/download/community
3. Start MongoDB server on your OS (in terminal):
   mongod
4. Initialize NPM on a new project in project folder (in terminal):
   npm init -y
   (-y to skip the additional questions)
   more info about npm: https://weaintplastic.github.io/web-development-field-guide/Development/Frontend_Development/Setting_up_your_project/Setup_Dependency_Managers/Node_Package_Manager/Initialize_NPM_on_a_new_project.html

5. Install the mongodb package in the root folder of your project (in terminal):
   npm install mongodb

6. To start the server, you need to open a terminal in the root folder of your project and enter the command (in terminal):
   node server.js

7. Open web browser and enter the url:
   localhost:8080
