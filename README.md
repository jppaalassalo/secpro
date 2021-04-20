# Lukuhaaste

Author: JP Paalassalo \
Course:

## Introduction

The goal of this project is to demonstrate secure programming concepts in MEAN stack application. The application is a checklist tool for 50 preset reading challenges, and the user can record reading achievements for each challenge. The achievements are shared to other app users.

In the context of this course, the following work was done:

- top-level threat analysis for the app including networking and programs
- identifying and prioritizing threats
    - implementing https for both frontend and backend
    - introducing user capabilities for frontend
    - implementing auth0 login and jwt sessions (frontend)
    - jwt tokens for backend
- existing demo was deployed to public service

## Application architecture and deployment

The application consists of Angular single-page app frontend served by nginx, nodejs+express backend and Mongo database. These three are deployed in shared network, and firewall configuration allows external access to necessary frontend and backend ports. 

```plantuml
@startuml
nwdiag {
  group docker {
    color = "#FFaaaa";
    MongoDB [shape=database];
    LukuhaasteBackend [shape=node];
    LukuhaasteFrontend [shape=node];
    zendocker;
  }
  internet [shape = cloud, description = "internet"];
  internet -- firewall; 
  firewall [shape=node ];
  network dmz {
      address = "10.x.x.x/24";
      firewall;
      MongoDB;
      LukuhaasteFrontend;
      LukuhaasteBackend;
  }
  
  network development {
    address = "10.y.y.y/24";
    firewall;
    zendocker [shape=node, description = "zen + docker\nplatform"];
    workstation [ shape=node ];
  }
@enduml
```
The selected architecture exposes database (and its admin access endpoint) unnecessarily to DMZ network. An alternative decision would be to place database to an internal network visible only to backend. The rationale for the selected architecture is that docker does not readily support connecting containers to multiple networks; it would be necessary to start the containers first and then attach the running backend container to other network. It would make system setup and maintenance more complex.

The database exposure vulnerability can be mitigated by limiting database access to backend and admin IP's only.

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
