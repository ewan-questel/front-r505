import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorSelectComponent } from './pages/color-select/color-select.component';
import { WaitingRoomComponent } from './pages/waiting-room/waiting-room.component';

const routes: Routes = [
  { path: '', component: ColorSelectComponent },
  { path: 'waiting', component: WaitingRoomComponent }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
