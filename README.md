# Lukuhaaste

Author: JP Paalassalo
Course:

## Introduction

The goal of this project is to demonstrate secure programming concepts in MEAN stack application. The application is a checklist tool for 50 preset reading challenges, and the user can record reading achievements for each challenge. The achievements are shared to other app users.

In the context of this course, the following work was done:
- top-level threat analysis for the app
- identifying and prioritizing threats
    - implementing https for both frontend and backend
    - introducing user capabilities for frontend
    - implementing auth0 login and jwt sessions (frontend)
    - jwt tokens for backend

## Application architecture and deployment

The application frontend is a single-page app implemented using Angular 11. The backend is node-express based. Backend utilizes Mongo database. Application server and database are 

```plantuml
nwdiag {
  internet [shape = cloud, description = "internet"];
  internet -- firewall; 
  firewall [shape=node, \
           address = "dhcpv4: 88.192.39.90/15 \n6rd params via option 212", \
           description = "top-rack.prgramed.fi (ER-10X) \n\
           delegated prefix 2001:2003:f8xx:xx00::/56\n\
           (88.193.x.x => 2001:2003:f9xx::/56) \n\
           ULA fd59:225a:04e1:26::/56"];

  network dmz {
      address = "10.99.50.0/24";
      firewall;
      MongoDB [shape=node, address = "10.99.50.10"];
      LukuhaasteServer [shape=node, address = "10.99.50.11"];
  }
```


## Threat analysis





# ReadingChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
