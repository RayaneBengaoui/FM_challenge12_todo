import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  backgroundImages = {
    desktop: {
      light: {
        path: 'assets/icon-sun.svg',
        bg: 'assets/bg-desktop-light.jpg',
        description: 'sun',
      },
      dark: {
        path: 'assets/icon-moon.svg',
        bg: 'assets/bg-desktop-dark.jpg',
        description: 'moon',
      },
    },
  };
  bgImage: string = this.backgroundImages.desktop.light.bg;

  constructor() {}

  changeTheme = (toggleButton: ElementRef) => {
    const bgPath = toggleButton.nativeElement.alt;

    if (bgPath === 'moon') {
      toggleButton.nativeElement.src = this.backgroundImages.desktop.light.path;
      toggleButton.nativeElement.alt =
        this.backgroundImages.desktop.light.description;
      this.bgImage = this.backgroundImages.desktop.dark.bg;
    } else {
      toggleButton.nativeElement.src = this.backgroundImages.desktop.dark.path;
      toggleButton.nativeElement.alt =
        this.backgroundImages.desktop.dark.description;
      this.bgImage = this.backgroundImages.desktop.light.bg;
    }
  };
}
