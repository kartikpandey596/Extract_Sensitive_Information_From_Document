import { Component, VERSION } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'my-app',
    imports: [HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css','assets/css/*']
})
export class AppComponent {
  title = "Hello"
 }
