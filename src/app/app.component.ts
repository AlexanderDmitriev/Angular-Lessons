import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfieCardComponent } from "./common-ui/profie-card/profie-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfieCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-lessons';
}
