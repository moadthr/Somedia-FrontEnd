/**
 * ServicesModule
 */
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ArticleService } from './article/article.service'
import { ClientService } from './client/client.service';


@NgModule({
  imports: [ HttpClientModule ],
  providers: [
    ArticleService,
    ClientService
  ]
})
export class ServiceModule {}