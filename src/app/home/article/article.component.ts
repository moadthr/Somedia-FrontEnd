import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'app/model/article/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls:['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article :Article
  selected : boolean = false
  constructor() { }

  ngOnInit() {
  }

}
