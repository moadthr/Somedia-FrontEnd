import { Component, OnInit, Injectable } from '@angular/core';

import { Article } from 'app/model/article/article';
import { ArticleService } from 'app/service/article/article.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls:['./catalogue.component.css']
})
@Injectable()
export class CatalogueComponent implements OnInit {
   articles : Article[];
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
     this.articleService.getArticles().subscribe((data) => this.articles=data )
     console.log(this.articles)
  }

}
