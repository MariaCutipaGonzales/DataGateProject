import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestsService } from './services/requests.service';
import { ListDataViewer } from './models/request.service.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit, OnDestroy {

  public data: ListDataViewer[] = [];
  public information = 'ALL REQUESTS';
  private requestListSubscription = new Subscription();
  constructor(
    private _requestService: RequestsService,
  ) {}

  ngOnInit() {
    this.getRequest();
  }

  ngOnDestroy(): void {
    this.requestListSubscription.unsubscribe();
  }  

  getRequest(){
    this.requestListSubscription = this._requestService.getList().subscribe((list) => {
      this.data = list.map((item) => {
        return new ListDataViewer(item);
      }, []);
    });
  }
}
