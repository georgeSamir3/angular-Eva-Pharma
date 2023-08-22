import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:"users",component:UsersComponent},
  {path:"posts",component:PostsComponent},
  {path:"comments/:id",component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
