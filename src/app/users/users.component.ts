import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from '../users-services.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
 users:any=[]
 errorMessage:any;
 constructor (private userService:UsersServicesService){}

  ngOnInit(): void {
      this.userService.getAllUsers().subscribe({
        next:user=>this.users=user,
        error:err=>this.errorMessage=err
      })
  }

}
