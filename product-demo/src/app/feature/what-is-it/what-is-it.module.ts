import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatIsItRoutingModule } from './what-is-it-routing.module';
import { WhatIsItComponent } from './what-is-it.component';


@NgModule({
  declarations: [
    WhatIsItComponent
  ],
  imports: [
    CommonModule,
    WhatIsItRoutingModule
  ]
})
export class WhatIsItModule { }
