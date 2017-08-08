import { Component } from '@angular/core';

// component decorator
@Component({
  selector: 'app-root',  // el
  templateUrl: './app.component.html',  // html
  styleUrls: ['./app.component.scss']  // css/sass/scss
})
export class AppComponent {
  title = 'app';
}
