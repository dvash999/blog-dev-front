import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu.component';
import { LogoutComponent } from '../logout/logout.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideMenuComponent]
})
export class SideMenuModule {}
