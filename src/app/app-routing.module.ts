import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeesevaComponent } from './aboutmeeseva/aboutmeeseva.component';
import { DocumentsneededforeachservicesComponent } from './documentsneededforeachservices/documentsneededforeachservices.component';
import { GovernmentordersComponent } from './governmentorders/governmentorders.component';
import { GovernmnetformsComponent } from './governmnetforms/governmnetforms.component';
import { HomeComponent } from './home/home.component';
import { InaugurationComponent } from './inauguration/inauguration.component';
import { MeesevaphysicalformComponent } from './meesevaphysicalform/meesevaphysicalform.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutmeeseva",component:AboutmeesevaComponent},
  {path:"governmentforms",component:GovernmnetformsComponent},
  {path:"governmentorders",component:GovernmentordersComponent}, 
  {path:"services",component:ServicesComponent,
  children:[
  {path:"meesevaphysicalform",component:MeesevaphysicalformComponent},
  {path:"documentsneededforeachservices",component:DocumentsneededforeachservicesComponent},
  {path:"inauguration",component:InaugurationComponent},
]},
{path: '**',component: HomeComponent }, 
]
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
