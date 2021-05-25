import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {

  id!: number;
  room!: Room;
  submited = false;

  constructor(private route: ActivatedRoute, private router: Router, private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data);
        this.room = data;
      }, error => console.log(error));

  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => {
        console.log(data);
        this.gotToList();
      }, error => console.log(error));

  }

  onSubmit() {
    this.updateRoom();
  }

  gotToList() {
    this.router.navigate(['/room']);
  }

}
