![TravelClick](https://static-tx.travelclick.com/tc-images/logo/travelclick-logo-wide.png "TravelClick")
# UE Rate Management UI
---
![Author](https://img.shields.io/badge/Author-TravelClick-blue.svg) ![Test Coverage](https://img.shields.io/badge/Test%20Coverage-0%-green.svg) ![Documentation Coverage](https://img.shields.io/badge/Documentation%20Coverage-0%25-red.svg) ![Components](https://img.shields.io/badge/Components-0-4CB944.svg) ![License](https://img.shields.io/badge/License-Proprietary-FFBF69.svg) ![Release](https://img.shields.io/badge/Release-7.6-F38A00.svg)

### Pre-Requisites
[![node](https://img.shields.io/badge/node-%3E%3D%208.9.4-4CB944.svg)](http://cmstash.travelclick.net:7990/projects/TOOL/repos/ue-angular-module-project-template/browse?at=initial-setup)


### Project structure
The folder structure plays a big part in the build process. The current default layout is as mentioned

```javacript
      <project-dir>/
        |- src/                                       //  Root of all Source files
        |  |- app/                                    //  Application level code
        |  |  |- app.*.*                              //  App source files
        |  |- assets-tc/                              //  Assets related to project
        |  |- modules/                                //  Actual app code to be exported as module
        |  |  |- components/                          //  Components to be exported in app module
        |  |- main.ts                                 //  Application bootstrap
        |  |- public_api.ts                           //  Exports for all modules
        |  |- index.html                              //  Application index
        |  |- styles.css                              //  Application CSS imports
        |  |- tsconfig.app.json                       //  App level TypeScript configurations
        |- .angular-cli.json                          //  Angular app level compiler configuration settings
        |- .editorconfig                              //  Editor config rules
        |- .npmrc                                     //  npmrc file with TravelClick repo details. You should be connected to TravelClick VPN
        |- package.json                               //  npm package dependencies
        |- ng-package.json                            //  Library package config
        |- README.md                                  //  Application Readme instructions
        |- CONTRIBUTING.md                            //  Contribution instructions
        |- CHANGELOG.md                               //  Changelog file to cater future changes
        |- tsconfig.json                              //  Global Typescript config
        |- tslint.json                                //  Typescript lint rules
        |- karma.conf.js                              //  Karma configurations
        |- Jenkinsfile                                //  Jenkins command for various stages        
```

## Dependencies

- [@angular/animations](https://ghub.io/@angular/animations): Angular - animations integration with web-animations
- [@angular/common](https://ghub.io/@angular/common): Angular - commonly needed directives and services
- [@angular/compiler](https://ghub.io/@angular/compiler): Angular - the compiler library
- [@angular/core](https://ghub.io/@angular/core): Angular - the core framework
- [@angular/forms](https://ghub.io/@angular/forms): Angular - directives and services for creating forms
- [@angular/http](https://ghub.io/@angular/http): Angular - the http service
- [@angular/platform-browser](https://ghub.io/@angular/platform-browser): Angular - library for using Angular in a web browser
- [@angular/platform-browser-dynamic](https://ghub.io/@angular/platform-browser-dynamic): Angular - library for using Angular in a web browser with JIT compilation
- [@angular/router](https://ghub.io/@angular/router): Angular - the routing library
- [angular2-jwt](https://ghub.io/angular2-jwt): Helper library for handling JWTs in Angular 2+
- [core-js](https://ghub.io/core-js): Standard library
- [rxjs](https://ghub.io/rxjs): Reactive Extensions for modern JavaScript
- [svgxuse](https://ghub.io/svgxuse): A polyfill that fetches external SVGs referenced in use elements when the browser itself fails to do so.
- [zone.js](https://ghub.io/zone.js): Zones for JavaScript

## Dev Dependencies

- [@angular/cli](https://ghub.io/@angular/cli): CLI tool for Angular
- [@angular/compiler-cli](https://ghub.io/@angular/compiler-cli): Angular - the compiler CLI for Node.js
- [@angular/language-service](https://ghub.io/@angular/language-service): Angular - language services
- [@compodoc/compodoc](https://ghub.io/@compodoc/compodoc): The missing documentation tool for your Angular application
- [@ng-bootstrap/ng-bootstrap](https://ghub.io/@ng-bootstrap/ng-bootstrap): Angular powered Bootstrap
- [@types/jasmine](https://ghub.io/@types/jasmine): TypeScript definitions for Jasmine
- [@types/jasminewd2](https://ghub.io/@types/jasminewd2): TypeScript definitions for jasminewd2
- [@types/node](https://ghub.io/@types/node): TypeScript definitions for Node.js
- [bootstrap](https://ghub.io/bootstrap): The most popular front-end framework for developing responsive, mobile first projects on the web.
- [codelyzer](https://ghub.io/codelyzer): Linting for Angular applications, following angular.io/styleguide.
- [jasmine-core](https://ghub.io/jasmine-core): Official packaging of Jasmine&#39;s core files for use by Node.js projects.
- [jasmine-spec-reporter](https://ghub.io/jasmine-spec-reporter): Spec reporter for jasmine behavior-driven development framework
- [karma](https://ghub.io/karma): Spectacular Test Runner for JavaScript.
- [karma-chrome-launcher](https://ghub.io/karma-chrome-launcher): A Karma plugin. Launcher for Chrome and Chrome Canary.
- [karma-cli](https://ghub.io/karma-cli): The Karma command line interface.
- [karma-coverage-istanbul-reporter](https://ghub.io/karma-coverage-istanbul-reporter): A karma reporter that uses the latest istanbul 1.x APIs (with full sourcemap support) to report coverage.
- [karma-html-reporter](https://ghub.io/karma-html-reporter): A Karma plugin. Report results in pretty html format.
- [karma-jasmine](https://ghub.io/karma-jasmine): A Karma plugin - adapter for Jasmine testing framework.
- [karma-jasmine-html-reporter](https://ghub.io/karma-jasmine-html-reporter): A Karma plugin. Dynamically displays tests results at debug.html page
- [primeng](https://ghub.io/primeng): [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Join the chat at https://gitter.im/primefaces/primeng](https://badges.gitter.im/primefaces/primeng.svg)](https://gitter.im/primefaces/primeng?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge)
- [**tc-angular-components**](https://ghub.io/tc-angular-components): Angular (Version 5+) Components
- [**tc-angular-services**](https://ghub.io/tc-angular-services): Angular (Version 5+) Services
- [**tc-styles**](https://ghub.io/tc-styles): TravelClick Global Styles which can be used by Angular projects. The current version is developed over Bootstrap 4.0.0.
- [ts-node](https://ghub.io/ts-node): TypeScript execution environment and REPL for node
- [tslint](https://ghub.io/tslint): An extensible static analysis linter for the TypeScript language
- [typescript](https://ghub.io/typescript): TypeScript is a language for application scale JavaScript development

### Installation
1. Install dependencies
    ```javascript
        npm install
    ```

### Run 
1. Run bellow command in **`Terminal / command prompt`** to start the application
    ```javascript
        npm start      
    ```

### Development server
>*Navigate to ***`http://localhost:4200`*** to launch the application.*
>
>The app will automatically reload if you change any of the source files.
>

### Test 
1. Run test with below command, It will generate test results in **`karma_html`** directory
    ```javascript
        npm run test
    ```
2. Run test with headless browser
    ```javascript
        npm run test -- --browsers ChromeHeadless
    ```
3. Generate test coverage at **`./coverage`** directory
    ```javascript
        npm run test
    ```

### Lint
1. Run **`npm run lint`** to execute the lint task to verify code standards


### Build
1. Run below commands
    ```javascript
        1. npm install
        2. npm run build
    ```
2. It will generate build at **`./dist`** folder.


### Documentation
1. Run **`npm run compodoc`** to generate complete code level api documentation
2. It will generate live api documentation in **`./documentation`** directory
