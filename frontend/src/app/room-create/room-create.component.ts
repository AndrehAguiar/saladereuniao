import { Router } from '@angular/router';
import { RoomService } from '../room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-create',
  templateUrl: 'room-create.component.html',
  styleUrls: ['room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

  room: Room = new Room();
  submited = false;

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
  }

  newRoom(): void {
    this.submited = false;
    this.room = new Room();
  }

  save() {
    this.room.date = this.roomService.formatDate(this.room.date);
    this.roomService.createRoom(this.room)
      .subscribe(data => {
        console.log(data)
        this.room = new Room();
      }, error => console.log(error));
    this.goToList();
  }

  onSubmit() {
    this.submited = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/room']);
  }

}
