# Angular19Tutorial

## Setup

nvm install
nvm list
nvm use 20.19.2

npm i -g typescript

node -v
npm -v
tsc -v

npm i -g @angular/cli will install latest angular version

ng v

create project

ng new angular-19-tutorial
scss
SSR y
Routing y

creating component
ng g user

## installing Bootstrap in angular project

npm i bootstrap

Add this in angular.json

"node_modules/bootstrap/dist/css/bootstrap.min.css"
"node_modules/bootstrap/dist/js/bootstrap.min.js"

/\*\*

- component directives => used to create reusable components => @Component
- structural directives => changes the structure of the DOM => *ngIf, *ngFor, \*ngSwitch
- attribute directives => changes the appearance or behavior of an element, component, or another directive => ngClass, ngStyle, ngModel
  \*/

## Why is @if / @for faster? no CommonModule needed

Because:

compiler-native control flow
no directive instantiation
less runtime overhead
optimized DOM updates
reduced memory allocations
better change detection efficiency

in new syntax
no CommonModule needed
mandatory tracking function

- ng g c componentName
- ng g s serviceName
- ng g class className
- ng g i interfaceName

## we can create our own local json server
- npm i -g json-server@0
db.json in root level
{
  Users:[{},{},...]
}
json-server -w db.json
http://localhost:3000/Users

## Signals

writable

const counter = signal(0)
counter.set(1)
counter.update(p=>p+1)
console.log(counter())

computed

doubleCounter = computed(()=>counter()\*2)

without signals

// const counter = new BehaviorSubject(0);
// const double = counter.pipe(map((v: number) => v \* 2));

// signals;

// const counterSignal = signal(0);
// const doubleSignal = computed(() => counterSignal() \* 2);

TODO
Hot and cold observable

Hydration

Hot module reload

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
