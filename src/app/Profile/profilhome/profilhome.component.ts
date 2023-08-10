import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-profilhome',
  templateUrl: './profilhome.component.html',
  styleUrls: ['./profilhome.component.css']
})
export class ProfilhomeComponent implements OnInit{

  user! : any;
  posts! :any;

  constructor(
    private userService : UserService,
    private activeRoute :ActivatedRoute
    ){}

  ngOnInit(): void {
      
    this.activeRoute.paramMap.subscribe((param)=> {
      let id = param.get('id')

      if(id){
        this.userService.getUserById(id).subscribe({
          next : (res) => this.user = res
        })

        this.userService.getUserPosts(id).subscribe({
          next : (res) => this.posts = res.data
          
        })
      }
      
    })
  }

}
