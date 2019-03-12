import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GridComponent, GridItemsComponent } from './grid/grid.component';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information/information.component';
import { GroupListComponent } from './group-list/group-list.component';

const components = [
    GridComponent,    
    GridItemsComponent,
    InformationComponent,
    GroupListComponent,
];

@NgModule({
    declarations: components,
    exports: components,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ComponentsModule {}