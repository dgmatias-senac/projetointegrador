import { Component, Input } from '@angular/core';

@Component({
  selector: 'pro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isBlackText: boolean = false;
  @Input() isWhiteText: boolean = true;
  
}
