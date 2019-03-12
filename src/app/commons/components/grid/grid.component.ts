import { Component, OnInit, Input, ViewChildren, Directive, QueryList, ContentChildren } from '@angular/core';

interface IGridData {
  [key: string]: string[];
}

@Component({
  selector: 'app-grid-item',
  template: ``
})

export class GridItemsComponent {
  @Input() text: string = '';
  @Input() element: string = '';
  @Input() status: boolean = false;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {

  @Input() data: IGridData[] = [];

  @ContentChildren(GridItemsComponent) gridItems = new QueryList<GridItemsComponent>();
  constructor() { }

  ngOnInit() {
  }

}
