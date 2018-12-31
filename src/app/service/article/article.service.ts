/**
 * ToysService
 *
 * - getToys
 *    . http://localhost:9000/toys
 */
import { Injectable } from '@angular/core'
import {HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import { Article } from 'app/model/article/article';



@Injectable()
export class ArticleService{

    constructor(private httpclient :HttpClient){

    }
    public getArticles(): Observable<Article[]> {
        //console.log(this.http.get<Article[]>('http://localhost:2000/toys').subscribe(data => console.log(data) ))
        return this.httpclient.get<Article[]>('article/all');
    }

    
}