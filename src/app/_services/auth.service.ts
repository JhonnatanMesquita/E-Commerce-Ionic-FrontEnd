import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../_models/credenciais.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalUser } from '../_models/local_user';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService{

    constructor(private http : HttpClient, private storage: StorageService){
    }

    authenticate( creds : CredenciaisDTO){
        return this.http.post(`${environment.apiUrl}/login`, creds,{
            observe: 'response',
            responseType: 'text'
        });
    }

    successfulLogin(authorizationValue : String){
        let token = authorizationValue.substring(7);
        let user : LocalUser = {
            token : token
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}