import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="topMenu">
    <button mat-button routerLinkActive='active' [routerLink]="['/home']">Home</button>
    <button mat-button [matMenuTriggerFor]="login">Login</button>
    <mat-menu #login="matMenu" [overlapTrigger]="false">
      <button mat-menu-item routerLinkActive='active' [routerLink]="['/myAccount']">My Account</button>
      <button mat-menu-item routerLinkActive='active' [routerLink]="['/myPurchases']">My Purchases</button>
      <button mat-menu-item routerLinkActive='active' [routerLink]="['/userLogin']">Sign in</button>
   </mat-menu>
   <button mat-button routerLinkActive='active' [routerLink]="['/settings']">Settings</button>
</div>
<div class='container'>
  <router-outlet></router-outlet>
</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Miracle Boys Grocery Store';

}
