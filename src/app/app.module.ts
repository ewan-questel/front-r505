import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorSelectComponent } from './pages/color-select/color-select.component';
import { RoleComponent } from './pages/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectComponent,
    RoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
