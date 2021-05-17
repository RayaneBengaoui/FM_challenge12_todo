import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('bgImage') bgImage!: ElementRef;

  backgroundImages = {
    desktop: {
      light: {
        path: 'assets/icon-sun.svg',
        description: 'sun',
      },
      dark: {
        path: 'assets/icon-moon.svg',
        description: 'moon',
      },
    },
  };

  onThemeChange = (): void => {
    const bgPath = this.bgImage.nativeElement.alt;

    if (bgPath === 'moon') {
      this.bgImage.nativeElement.src = this.backgroundImages.desktop.light.path;
      this.bgImage.nativeElement.alt =
        this.backgroundImages.desktop.light.description;
    } else {
      this.bgImage.nativeElement.src = this.backgroundImages.desktop.dark.path;
      this.bgImage.nativeElement.alt =
        this.backgroundImages.desktop.dark.description;
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
