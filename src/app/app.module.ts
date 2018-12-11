import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { FurnitureComponent } from "./furniture/furniture.component";
import { FurnitureCarouselComponent } from "./furniture/furniture-carousel.component";
import { OwlModule } from "ngx-owl-carousel";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    FurnitureComponent,
    FurnitureCarouselComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "furnitures", component: FurnitureComponent },
      { path: "furniture/:id", component: FurnitureCarouselComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
