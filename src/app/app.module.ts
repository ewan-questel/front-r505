import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorSelectComponent } from './pages/color-select/color-select.component';
import { RoleComponent } from './pages/role/role.component';
import { ButtonComponent } from './shared/layout/button/button.component';
import { MainTitleComponent } from './shared/layout/main-title/main-title.component';
import { TestComponent } from './shared/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectComponent,
    RoleComponent,
    ButtonComponent,
    MainTitleComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
