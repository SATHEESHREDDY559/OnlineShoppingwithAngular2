import {Component} from "@angular/core";
import { ProductService } from './products/product-services';
@Component({
selector:'pm-app',
template:`<div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
       {{pageTitle}}
      </a>
    <ul class="nav nav-tabs">
  <li ><a [routerLink]="['/welcome']">Home</a></li>
  <li ><a [routerLink]="['/products']">Product List</a></li>
  
</ul>
  </div>
</nav>
<div class="container-fluid">
<router-outlet></router-outlet>
</div>
</div>
`,
providers: [ProductService]
})
export class AppComponent{
    pageTitle:string="Welcome to BeSoft";
}
