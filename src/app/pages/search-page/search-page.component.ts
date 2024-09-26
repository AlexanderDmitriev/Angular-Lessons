import { Component, inject } from '@angular/core';
import { IProfile } from '../../data/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';
import { ProfieCardComponent } from '../../common-ui/profie-card/profie-card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfieCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

  profileServices = inject(ProfileService);
  profiles:IProfile[] = [];
  constructor() {
    this.profileServices.getTestAccounts().subscribe((value) => {
      this.profiles = value;
    });
  }
}
