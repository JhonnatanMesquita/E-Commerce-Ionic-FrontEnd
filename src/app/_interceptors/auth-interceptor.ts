import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from '../_services/storage.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private storage : StorageService){}

    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
        
        let localUser = this.storage.getLocalUser();

        if(localUser){
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)})
            return next.handle(authReq);
        }else{        
            return next.handle(req);
        }
    }
}

export const AuthInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
}