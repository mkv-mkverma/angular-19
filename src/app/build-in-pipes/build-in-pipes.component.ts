import {
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
  CurrencyPipe,
  PercentPipe,
  AsyncPipe,
  CommonModule,
} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of, tap, shareReplay } from 'rxjs';
import { CustomDatePipe } from '../shared/pipes/custom-date.pipe';
import { MobilePipe } from '../shared/pipes/mobile.pipe';

@Component({
  selector: 'app-build-in-pipes',
  imports: [
    TitleCasePipe,
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe,
    JsonPipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe,
    AsyncPipe,
    CustomDatePipe,
    MobilePipe,
    // CommonModule,
  ],
  templateUrl: './build-in-pipes.component.html',
  styleUrl: './build-in-pipes.component.scss',
})
export class BuildInPipesComponent {
  mobileNumber: string = '';
  // mobileNumber: string = '9876543210';
  angularPipe: string = 'angular pipes are awesome';
  numberArray: number[] = [1, 2, 3, 4, 5];
  person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };
  currentDate: Date = new Date();
  decimalNumber: number = 3.141592653589793;
  currencyValue: number = 123400.56;
  percentValue: number = 0.75;

  employees$: Observable<any[]>;

  students$ = of([
    {
      id: 101,
      name: 'Alice',
      age: 28,
      department: 'HR',
    },
    {
      id: 102,
      name: 'Bob',
      age: 35,
      department: 'IT',
    },
    { id: 103, name: 'Charlie', age: 40, department: 'Finance' },
    { id: 104, name: 'Max', age: 40, department: 'HR' },
  ]);

  constructor(private http: HttpClient) {
    this.employees$ = this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(() => console.log('API Called')),
        shareReplay(1), // Cache the response and share it among subscribers
      );
  }
}

/**
     * cold observable,  hot observable 
     * getEmployees() {
  return this.http.get('/api/users').pipe(
    shareReplay(1)
  );
} here shareReplay(1) will not work because every time you call getEmployees() it creates a new observable and makes a new API call, so shareReplay(1) will only cache the response for that specific observable instance. To make shareReplay(1) work, you need to create the observable once and reuse it across your application, for example by assigning it to a property in your service or component.
     * 
     * for shareReplay to work you need to have a like below 
     * employees$ = this.http.get('/api/users').pipe(
  shareReplay(1)
);
     */
