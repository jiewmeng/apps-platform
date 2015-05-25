# Apps Platform


Aims to be a modular app platform supporting multiple vendors

- Authentication
- Chat
- Expenses
- Project Management
- Blogging/SimpleCMS (possible to integrate e-commerce?)

Originally considering to use Parse.com but eventually decided against it since I lose some flexibility - cannot use NPM modules. I can still use ES6 via Babel ... but its an extra dependency that can be eliminated from server-side using IO.JS.

- IO.JS
- ExpressJS
- MongoDB (Mongoose ODM, to )
- PassportJS

- Gulp
- Babel
- ESLint
- ReactJS/Flux
- WebPack


## Modular Architecture

Server and client side decoupled, so that the same backend service can be used across multiple apps/platforms. Server side modules defined in `modules` client side in `apps`.

Folder structure as follows:

```
/modules
/modules/{module_name}
/modules/{module_name}/index.js

/apps                        : strictly speaking should not be here ... not really part of the "platform" ... but convinence
/apps/{app_name}
/apps/{app_name}/images      : optimized using imagemin
/apps/{app_name}/js          : transpiled using babel
/apps/{app_name}/less        : transpiled into CSS then autoprefixer adds vendor prefixes
/apps/{app_name}/vendor      : 3rd party components
```


## Authentication Service

Handles creation of users with login via Social Media like:

- Facebook
- GitHub
- Google


### Multi-organization/vendor support


Users can be part of multiple organizations/vendors. By default, users are part of a special personal organization.

Each organization is associated with apps


## Chat Service


Chat via WebRTC

- Text chat with history
- Sending of data (images, zip etc)
- Voice chat
- Video chat
- Screenshare
