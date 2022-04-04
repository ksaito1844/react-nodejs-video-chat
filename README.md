[![Netlify Status](https://api.netlify.com/api/v1/badges/7caaf4f8-2ecb-46ec-a28b-6fd24810fb68/deploy-status)](https://app.netlify.com/sites/fc-chat-app-demo/deploys)
# 💬 Video Chat App

A video chat app created with Socket.io, Typescript, React, Redux, Node.js, Express, and MongoDB.  

## Demo

[View a demo of the application here.](https://fc-chat-app-demo.netlify.app)

Because this is a demonstration application, some limitations have been applied:

- The allowed usernames are 'user1', and 'user2'.
- The duration of chat rooms is set at 5 minutes.

To test application, open app in two separate browsers tabs and sign in with the allowed usernames in each browser.

Video streaming between two peers works best between the same browsers. The video streams are not displayed on mobile browsers.
  

## ✨Overview

### Purpose

*Why did I build this project?*

- To learn and develop my skills in Test Driven Development.
- To learn about web sockets and learn how to use [Socket.io](https://socket.io/).
- To learn about [RTCPeerConnection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection).

### Process

*What was your process for completing this project?* 

I used a kanban board for creating user stories and keeping track of bugs. 

### Challenges

#### RTC Peer Connection
Setting up the peer-to-peer connection for the two-way video streaming was a difficult task. I used the project [WebRTC Video and Signaling sample](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat) as a starting point and main reference. I was able to understand the process better when I added dev logging to learn the order of the RTCPeerConnection events. Problems with the RTCPeerConnection emerged due to component re-rendering caused by state changes or changes in dependencies in callback functions. To resolve those problems, I removed state variables inside the component and used the React.memo function to ensure that no re-renders are performed.

### Outcome

*What did you learn from making this project?*

- I learned more about web sockets, WebRTC, and RTCPeer Connection.
- I learned how to use React.memo and React.useCallback.

### Retrospection

*What would you do differently next time?*

- Implement better file structure and organization at the beginning of the project instead of fixing it later.
- Install ESLint and set rules at the beginning of the project instead of adding it later.
- Write better tests.

## 🚀 Quick Start
1. Clone this repository
    ```sh
    git clone https://github.com/timamero/react-nodejs-video-chat.git
    ```
2. Install dependencies
    ```sh
    npm install
    ```
3. Add .env file and set value for `MONGODB_URI`
4. Run the server and client in development mode
    ```sh
    npm run dev
    ```
 - Concurrently is used to run the server and client at the same time
 - You can also run the the app by running the server and client separately.
    ```sh
    cd backend
    npm run dev
    ```
    *Open new terminal*
    ```sh
    cd frontend
    npm start
    ```

4. Open the browser and go to http://localhost:3000/.

5. To demo the video chat room go to http://localhost:3000/testroom.

## 🧪 Testing
1. To run E2E testing run the following commands from the root folder.
    ```sh
    npm run cypress:prestart
    npm run cypress-e2e
    ```
2. To run component testing run the following commands from the root folder.
    ```sh
    npm run cypress:prestart
    npm run cypress-ct
    ```

E2E tests are located in `frontend/cypress/integration`.
Component tests are located in `frontend/src/__tests__`.

## ⚒️ Extending the project
List of things I would like to do if I had more time:
- Get video streaming with WebRTC connection to work with mobile browsers and across different browsers
- Add user authenitication with password
- Add tab component in home page so you can  switch between viewing active users, inactive users, and logged out users
- Enforce unique username
- Add tests for react components and redux slices
- Update and add tests for socket and database methods
- Add chat room for 3+ users (text chat only)
- In text chat, allow sending other media (images, gifs, audio)