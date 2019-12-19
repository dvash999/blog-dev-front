import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ContactComponent } from '../components/container/contact/contact.component';

const routes: Route[] = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class ContactModule {}
