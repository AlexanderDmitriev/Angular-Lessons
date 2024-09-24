import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfieCardComponent } from './common-ui/profie-card/profie-card.component';
import { ProfileService } from './data/services/profile.service';
import { IProfile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfieCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-lessons';
  profiles:IProfile[] = [];
  profileServices = inject(ProfileService);
  constructor() {
    this.profileServices.getTestAccounts().subscribe((value) => {
      this.profiles = value;
    });
  }
}
