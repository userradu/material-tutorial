import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
