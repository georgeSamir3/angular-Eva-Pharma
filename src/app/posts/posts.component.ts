import { Component, OnInit } from '@angular/core';
import { IPost } from '../shared/classesAndTypes/posts.interface';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
post:any[]
errorMessage:any
constructor(private posts:PostsService,private router:Router){}
ngOnInit(): void {
    this.posts.getAllPosts().subscribe({
      next:pos=>this.post=pos,
      error:err=>this.errorMessage=err
    })
}
getComment(id:any){
this.router.navigate(["/comments",id])
}
}
