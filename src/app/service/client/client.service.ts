/**
 * ToysService
 *
 * - getToys
 *    . http://localhost:9000/toys
 */
import { Injectable } from '@angular/core'
import {HttpClient, HttpParams , HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import { Client } from 'app/model/client/client';
import 'rxjs/add/operator/catch'

@Injectable()
export class ClientService{

    constructor(private httpclient :HttpClient){

    }
    public saveClient(client : Client): Observable<Client> {
        
        return this.httpclient.post<Client>('client/save',client);
    }
    private handleError(error:HttpErrorResponse){
        return Observable.throw(error.message || 'server error')
    }
    public signIn(client : Client): Observable<Client> {
        const params = new HttpParams().set('email', client.email).set('password', client.password);
        return this.httpclient.get<Client>('/client/signIn',{params}).catch(this.handleError)
    }
  
    
}