import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private route: Router) {
    console.log('User Component constructor initialized');
  }

  ngOnChanges() {
    console.log('1. User Component ngOnChanges called');
  }

  ngOnInit() {
    console.log('2. User Component ngOnInit called');
  }

  ngDoCheck() {
    console.log('3. User Component ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('4. User Component ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('5. User Component ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('6. User Component ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('7. User Component ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('8. User Component ngOnDestroy called');
  }

  login() {
    // Login logic here
    this.route.navigate(['/data-binding']);
    // this.route.navigateByUrl('/data-binding');
  }
}
