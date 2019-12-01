import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import {HomeModule} from '../components/home/modules/home.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, PublicRoutingModule, HomeModule]
})
export class PublicModule {}
