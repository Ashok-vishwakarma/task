import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {
  isLoading$ = new BehaviorSubject<boolean>(false);

  show() {
    this.isLoading$.next(true);
  }

  hide() {
    this.isLoading$.next(false);
  }



  
 baseUrl='https://jsonplaceholder.typicode.com'
  

  constructor( private http:HttpClient) { }

  todos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  photos(): Observable<any>{
    return this.http.get(`${this.baseUrl}/photos`);
  }


  getLeaderBoardList() {
    return this.http.get<any>(`https://quiz2fun-qa.nimapinfotech.com/api/v1/scheduled/list`);
  }


}
