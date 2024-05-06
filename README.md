# Drag & Drop Over React Microfrontends - PoC

PoC implementation of Drag And Drop functionality over React Microfrontends with Redux.

It was just a quick PoC, not production app; so no frontend tests; little focus on code clarity and structure :)

## Demo how does it work: 
 Note: Video/Gif drastically slows drag and drop but real app is smooth
![Demo](./DnD_Microfrontends.gif)

##  Marked microfrontend React components that are injected in sample app:
![ScreenshotDemo](./DemoDnDScreenshot.png)

## Component diagram:
![ComponentDiagram](./ComponentDiagram.png)

## How to run it:

1) Run rental-app
   - `cd micro-frontends/rental-app`
   - `yarn`
   - `yarn start` 
   - Microfrontend exposed: http://localhost:30001/carRentalRemoteEntry.js
2) Run car-app
   - `cd micro-frontends/car-app`
   - `yarn`
   - `yarn start` 
   - Microfrontend exposed: http://localhost:30002/carRemoteEntry.js
3) Run sample stub
   - `cd stubs/master-stub`
   - `yarn`
   - `yarn start` 
   - Demo app exposed: http://localhost:40001

```
Tested on:
-  yarn 1.22.18
-  node/20.10.0
```