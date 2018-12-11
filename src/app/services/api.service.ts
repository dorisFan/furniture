import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get("../../assets/index.json") //this.http.get(`${environment.apiurl}`)
      .pipe(
        map(response =>
          response as any
        )
      );
  }

}
