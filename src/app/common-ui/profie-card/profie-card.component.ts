import { Component, Input } from '@angular/core';
import {IProfile} from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from "../../helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-profie-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './profie-card.component.html',
  styleUrl: './profie-card.component.scss'
})
export class ProfieCardComponent {
  @Input() profile!:IProfile;
}
