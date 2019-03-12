import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IManage } from 'src/app/components/manage/models/manage.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  @Input() dataGroup: IManage[] = [];
  @Output() valueChange: EventEmitter<IManage> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  valueChanged(data: IManage) {
    this.valueChange.emit(data);
  }

}
