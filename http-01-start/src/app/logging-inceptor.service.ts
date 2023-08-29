import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log('Outgoing request');
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', 'abc')
        });
        return next.handle(modifiedRequest);
        // return next.handle(req).pipe(tap(event => {
        //     if (event.type === HttpEventType.Response) {
        //         console.log('Repsonse arrived, body data: ');
        //         console.log(event.body);
        //     }
        // }));
    }
}