import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorSelectComponent } from './pages/color-select/color-select.component';
import { WaitingRoomComponent } from './pages/waiting-room/waiting-room.component';
import { RoleComponent } from './pages/role/role.component';

const routes: Routes = [
  { path: '', component: ColorSelectComponent },
  { path: 'waiting', component: WaitingRoomComponent },
  { path: 'role', component: RoleComponent }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
