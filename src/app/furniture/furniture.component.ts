import { Component, OnInit } from '@angular/core';
import { Furniture, Obj } from '../shared/models/furniture';
import { FurnitureService } from '../services/furniture.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  obj: Obj;
  furnitures: Furniture[];

  constructor(private furnitureService : FurnitureService) { }

  ngOnInit() {
    this.getAllFurnitures();
  }

  getAllFurnitures() {
    this.furnitureService.getFurnitures()
      .subscribe(
        m => {
          console.log(typeof m);
          this.obj = m;
          this.furnitures = this.obj.groups;
          console.log(this.furnitures);
        }
      )
  }
}
