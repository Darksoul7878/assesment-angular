import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatIsItComponent } from './what-is-it.component';

const routes: Routes = [{ path: '', component: WhatIsItComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatIsItRoutingModule { }
