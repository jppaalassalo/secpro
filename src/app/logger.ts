
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

export class LoggingHttpInterceptor implements HttpInterceptor {
    constructor() {
     }
    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        console.log('Request: ' + req);
        return next.handle(req).pipe(tap(
            (httpEvent: HttpEvent<any>) => this.logResponse(httpEvent)));
    } 

    private logResponse(httpEvent: HttpEvent<any>): void {
        if (httpEvent instanceof HttpResponse) {
        console.log(httpEvent);
        }
    }
}