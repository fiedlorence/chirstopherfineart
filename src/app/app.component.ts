import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Christopher Fine - ';
  art = 'Art';

  private backGround: string = "src/assets/background.jpg";

  getBackgroundUrl(): string{
    return this.backGround;
  }
}
