import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { Furniture, Obj } from "../shared/models/furniture";

@Injectable({
  providedIn: "root"
})
export class FurnitureService {
  constructor(private apiService: ApiService) {}

  getFurnitures(): Observable<Obj> {
    return this.apiService.getAll();
  }
}
