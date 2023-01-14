import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './pages/plan/plan.component';
import { StoreListComponent } from './pages/store-list/store-list.component';

const routes: Routes = [
  {
    path:'stores',
    component:StoreListComponent
  },
  {
    path:'',
    redirectTo:'stores',
    pathMatch: "full",
  },
  {
    path:'plan',
    component:PlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
