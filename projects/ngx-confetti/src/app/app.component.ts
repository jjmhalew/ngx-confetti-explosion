import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgxConfettiExplosionComponent } from '../../../ngx-confetti-explosion/src/lib/ngx-confetti-explosion.component';
// import { NgxConfettiExplosionComponent } from 'ngx-confetti-explosion';

@Component({
    selector: 'app-root',
    imports: [NgxConfettiExplosionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected title = signal<string>('ngx-confetti');
  protected show = signal<boolean>(false);
  
  protected onShow(): void {
    this.show.set(false);  
    setTimeout(()=>{
      this.show.set(true);
    });
  }
}
