import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { MarksService } from '../marks.service';



@NgModule({
  declarations: [
    Card1Component,
    Card2Component,
    Card3Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Card1Component,
    Card2Component
  ],
  providers:[MarksService]
})
export class ShareModule { }
