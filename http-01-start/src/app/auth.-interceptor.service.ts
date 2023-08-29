import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs-compat/operator/map";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
        
        if(req.url ) {
            //... you can control to which URL it will go
        }
        console.log('Request is on its way');
        console.log(req.url);

        return next.handle(modifiedRequest).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
                console.log('Response arrived, body data: ');
                console.log(event.body);
            }
        }));
    }
}