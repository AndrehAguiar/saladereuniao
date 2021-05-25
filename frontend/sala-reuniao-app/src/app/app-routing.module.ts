import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomListComponent } from './room-list/room-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'room', pathMatch: 'full' },
  { path: 'room', component: RoomListComponent },
  { path: 'add', component: RoomCreateComponent },
  { path: 'update/:id', component: RoomUpdateComponent },
  { path: 'details/:id', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
