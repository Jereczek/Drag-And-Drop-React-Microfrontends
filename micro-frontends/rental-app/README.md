# CarRental React App

## Redux 
Microfrontend uses [Microsoft Redux-micro-frontend implementation](https://github.com/microsoft/redux-micro-frontend)

- [More info about Redux-micro-frontend](https://www.codezap.dev/post/state-management-for-front-end-applications-part-i-what-and-why)
- It implies that consumer of this micro-frontend has to add dependency:
  - `"redux-micro-frontend": "1.3.0"`

## Prereq

- Node LTS `v16.15.0` - See [n node manager](https://www.npmjs.com/package/n)
- yarn

## Available Scripts

| Command      |                       Description                       |
| :----------- |:-------------------------------------------------------:|
| `yarn`       |                  Install dependencies                   |
| `yarn start` | [Run in dev mode on port 30001](http://localhost:30001) |
| `yarn test`  | Launches the test runner in the interactive watch mode. |
| `yarn build` |  Builds the app for production to the `build` folder.   |
| `yarn prettier` |          Format all files with prettier syntax          |
| `yarn lint`     |               Launch static code analysis               |

### Dev cheet-sheet

| Command                             | Description  |
| :---------------------------------- | :----------: |
| `yarn upgrade-interactive --latest` | Upgrade libs |
