
<!-- Project -->
<br />
<p align="center">
  <h2 align="center">u07-Recipe-App</h2>

  <p align="center">
    Pernilla Hällgren @ ChasAcademy 2021
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
       <ul>
        <li><a href="#goals">Goals</a></li>
      </ul>
       <ul>
        <li><a href="#requirement">Requirement</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

I denna uppgift ska du bygga en rudimentär applikation med ramverket Angular (version 11). Denna applikation ska fungera som en samling för recept som hämtas från ett externt API. För denna uppgift är det endast frontend och ingen backend som ska implementeras.
 
För inspiration se:
* https://www.tasteline.com/

​* https://www.ica.se/recept/​

### Goals
Som användare ska du:

* Kunna få en förslagslista med recept
* Kunna filtrera förslagen av recept på måltidstyp och allergener:
* Förrätt, huvudrätt eller dessert (minimum, fler måltidstyper får implementeras)
* Allergener och dietval (t.ex. gluten, nötter, vegetarian osv.), minst tre ytterligare filtreringar ska finnas med förutom förrätt, huvudrätt och dessert  
* Kunna klicka på ett recept för att se dess information (egen route)
* Kunna spara recept i en lista (recepten behöver finnas tillgängliga så länge användaren är på webbplatsen, dock ej sparas i t ex localstorage)
* Kunna visa sparade recept (egen route)
* Kunna ta bort sparade recept ur listan

### Requirement

* Frontend måste implementeras i ramverket Angular (version 11)
* Nyttja ett externt API för att hämta recept-information vilken visas i applikationen, i denna app används:
    * https://developer.edamam.com/edamam-recipe-api
* Måste fungera på en mobil enhet, det vill säga målen ovan måste gå att utföra även på en mobil enhet
* Denna uppgift har inget krav på backend utan data hämtas från externt api, men  filtreringar och sparade recept skall finnas tillgängliga i applikationen under tiden användaren använder appen utan att stänga webbläsaren. Den användardata som genereras har inga krav på att sparas efter att användaren lämnar appen.

### Built With

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

<!-- GETTING STARTED -->
## Getting Started
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Pernilla Hällgren - pernilla.hallgren@chasacademy.se