import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { UserFormComponent } from "./shared/component/users/user-form/user-form.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { ProductFormComponent } from "./shared/component/products/product-form/product-form.component";
import { ProductComponent } from "./shared/component/products/product/product.component";
import { FairsComponent } from "./shared/component/fairs/fairs.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";

const appRoutes : Routes =[
    {
        path:'',
        redirectTo:'home',
        pathMatch:"full"
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'users',
        component:UsersComponent,
        children :[
            {
                path:'adddUser',
                component: UserFormComponent
            },
            {
                path:':userId',
                component:UserComponent
            },
            {
                path:':userId/edit',
                component:UserFormComponent
            }
        ]
    },
    {
        path:'products',
        component:ProductsComponent,
        children :[
            {
                path:'addProduct',
                component:ProductFormComponent
            },
            {
                path:':productId',
                component:ProductComponent
            },
            {
                path:':productId/edit',
                component:ProductFormComponent
            }
        ]
    },
    {
        path:'fairs',
        component:FairsComponent
    },
    {
        path:'page-not-found',
        component:PageNotFoundComponent
    },
    {
        path:"**",
        redirectTo :'page-not-found'
    }

]


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}