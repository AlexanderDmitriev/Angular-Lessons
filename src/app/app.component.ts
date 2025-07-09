import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileService } from './data/services/profile.service';
import { IProfile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-lessons';
  profileService:ProfileService = inject(ProfileService);
  profiles:any = [];
  constructor() {
    this.profileService
      .getTestAccounts()
      .subscribe((val:IProfile[]) => this.profiles=val);
      //subscribe работает аналогично fetch 
  }
}
