import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EntregaGiriboneM';

  constructor() {
    if (!environment.isProd) {
      console.log(environment);
    }
  }
}
