import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoaderserviceService } from './loaderservice.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mjg5NzQ4NjgsInVzZXJEYXRhIjp7IklEIjo3OCwiRW1haWwiOiIiLCJUb2tlblR5cGUiOiJBVVRIIn19.Hr5XDvHliDR-gZ3LPjM9uY-vD37LfWtzSilnr-DcNEk";

  constructor(private router: Router, private loaderService: LoaderserviceService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    

    if (request.url== 'https://quiz2fun-qa.nimapinfotech.com/api/v1/scheduled/list') {
      this.loaderService.hide();
      
    } else {
      this.loaderService.show();
    }



    if (this.a) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.a}`
        }
      })
      // console.log("nand")
    }



    return next.handle(request).pipe(tap
      (event => {
        if (event instanceof HttpResponse) {
          if (event.body == 401) {
            this.router.navigate(['/login'])
          }
        }
      }, (err) => {
        console.log("something went wrong")
      }
      ), finalize(() => {
        this.loaderService.hide()
      })
    )
  }
}
