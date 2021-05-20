import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggleTheme') toggleTheme!: ElementRef;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onThemeChange = (): void => {
    this.themeService.changeTheme(this.toggleTheme);
  };

  getImage = () => {
    return this.themeService.backgroundImages;
  };
}
