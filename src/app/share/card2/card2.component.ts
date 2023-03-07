import { Component, OnInit } from '@angular/core';
import { MarksService } from 'src/app/marks.service';
import { Marks } from 'src/app/model/marks';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit{

  marksData:Marks[]=[];
  constructor(private _marksService:MarksService){}

  ngOnInit(): void {
    this._marksService.getData().subscribe(data=>this.marksData=data)
  }
  

}
