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
npm i bootstrap-icons

Add this in angular.json
styles
"node_modules/bootstrap/dist/css/bootstrap.min.css"
"node_modules/bootstrap-icons/font/bootstrap-icons.css"

scripts
"node_modules/bootstrap/dist/js/bootstrap.min.js"

## Json Server

npm i json-server --save-dev

npx json-server src/assets/db.json
http://localhost:3000/Users

or

in package.json add
"json-server": "json-server src/assets/db.json"

npm run json-server

if want to run concurrently
npm install --save-dev concurrently
"dev": "concurrently \"npm:start\" \"npm:mock-api\"",

db.json in root level

{
Users:[{},{},...]
}

## Resource and RxResource

Resource stores latest value and When component destroyed Resource destroyed Data gone

rxResource() is Angular's modern async state management primitive built on Signals. It integrates with HttpClient Observables, automatically tracks loading, error, and success states, supports reactive parameters, and eliminates much of the boilerplate around subscriptions, async pipes, and manual loading indicators.

resource()

Works with: Promise, async/await, fetch()

users = resource({

loader: async () => {

    const response = await fetch('/users');

    return response.json();

}

});

rxResource()

Works with: Observable, HttpClient, RxJS

// service
rxResourceData = rxResource({

loader: () => this.http.get('/users')

});

//component
users = this.resourceService.rxResourceData;

@if(users.isLoading()) {

Loading...

}@else if(users.error()){

Error message

}

@else if(users.hasValue()) {

{{ users.value() | json }}

}

this.users.reload(); // refresh data

Life Cycle

Component Loads

      |

      V

Loader Executes

      |

      V

Loading = true

      |

      V

API Returns

      |

      V

value() populated

Loading = false

userId = signal('1');
or
userId = toSignal(
this.route.paramMap.pipe(
map(params => params.get('id'))
)
);

user = rxResource({
params: () => ({
id: this.userId()
}),

loader: ({ params }) =>
this.http.get(`/users/${params.id}`)
});

on route change
this.userId.set('2');

Why use track user.user_id

Angular uses the tracking expression to uniquely identify items. When data changes, Angular updates only affected rows instead of recreating the entire list, which improves rendering performance for large datasets.
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

## JIT vs AOT

JIT compiles Angular templates in the browser at runtime, requiring the Angular compiler to be shipped with the application.
This results in slower startup and runtime template error detection.
JIT compiles Angular templates in the browser at runtime
compile code + compiler
runtime template error detection not at compile time
Initial load is slower
dev
ng serve --aot=false

AOI ccompiles templates during the build process
Default from Angular 9
produces smaller and faster bundles
Initial load is faster
HTML + component + TS => converted into js
catches template errors before deployment
secure
prod

## view Encapsulation

Hide data from the outside world

encapsulation: ViewEncapsulation.emulated [default]
only to its component (Component styles stay inside component.)

encapsulation: ViewEncapsulation.ShadowDom
to component and its children and cannot leake outside (Web Components, lib)

encapsulation: ViewEncapsulation.None it will leake and apply to global
Global themes, Bootstrap overrides, PrimeNG customizations

## What is a Decorator in Angular?

A decorator is a special TypeScript feature that adds metadata to a class, property, method, or parameter.

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
