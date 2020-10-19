import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, children: [
    {path: '', component: OrderListComponent},
    {path: 'orderDetails', component: OrderDetailsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
