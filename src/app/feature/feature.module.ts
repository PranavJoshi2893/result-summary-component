import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultSummeryComponent } from './result-summery/result-summery.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    ResultSummeryComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    ResultSummeryComponent
  ]
})
export class FeatureModule { }
