import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, NavbarComponent]
})
export class LayoutModule { }
