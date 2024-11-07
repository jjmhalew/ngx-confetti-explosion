import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxConfettiExplosionComponent } from 'projects/ngx-confetti-explosion/src/public-api';
// import { NgxConfettiExplosionComponent } from 'ngx-confetti-explosion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxConfettiExplosionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected title = signal<string>('ngx-confetti');
  protected show = signal<boolean>(false);
  
  onShow(){
    this.show.set(false);  
    setTimeout(()=>{
      this.show.set(true);
    });
  }
 
}
