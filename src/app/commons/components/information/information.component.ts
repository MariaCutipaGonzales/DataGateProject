import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-information',
    template: `
    <div class='information-container'>
        {{text}}
    </div>`,
    styleUrls: ['./information.component.scss']
})

export class InformationComponent implements OnInit {

    @Input() text: string = '';
    constructor() { }

    ngOnInit() {
    }

}
