import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { DiscountProductComponent } from './discount-product/discount-product.component';
import { NoDiscountProductComponent } from './no-discount-product/no-discount-product.component';
import { RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:ProductsComponent,
  children: [
    { path: 'discount', component: DiscountProductComponent },
    { path: 'no-discount', component: NoDiscountProductComponent }]
},
  {path:"users",component:UsersComponent},
  {path:"posts",component:PostsComponent},
  {path:"comments/:id",component:CommentsComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
