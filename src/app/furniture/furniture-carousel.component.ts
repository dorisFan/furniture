import { Component, OnInit } from "@angular/core";
import { Furniture, Obj } from "../shared/models/furniture";
import { FurnitureService } from "../services/furniture.service";
import { RouterLinkActive, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-furniture-carousel",
  templateUrl: "./furniture-carousel.component.html",
  styleUrls: ["./furniture-carousel.component.css"]
})
export class FurnitureCarouselComponent implements OnInit {
  obj: Obj;
  fId: String;
  furnitures: Furniture[];
  furniture: Furniture;
  // images = [1, 2, 3].map(
  //   () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  // );
  images: string[];

  constructor(
    private furnitureService: FurnitureService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //use + to shortcut transfer string to number
      this.fId = params.get("id");
      console.log(this.fId);
      this.getFurnitureById(this.fId);
    });
  }

  getFurnitureById(id: String) {
    this.furnitureService.getFurnitures().subscribe(fs => {
      this.furnitures = fs.groups;
      // console.log(this.furnitures);
      for (let i = 0; i < this.furnitures.length; i++) {
        // console.log(this.furnitures[i]);
        if (this.furnitures[i].id === id) {
          this.furniture = this.furnitures[i];
          this.images = this.furniture.images.map(e => e.href);
          // console.log(this.furniture);
          // console.log(this.images);
        }
      }
    });
  }
}
