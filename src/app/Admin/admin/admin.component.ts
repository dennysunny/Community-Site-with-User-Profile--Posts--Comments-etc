import { Component } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  users!: any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (res) => this.users = res.data
    })
  }

}
