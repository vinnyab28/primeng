import { Component } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'disabled-doc',
    template: `
        <app-docsectiontext>
            <p>When <i>disabled</i> is present, a visual hint is applied to indicate that the Knob cannot be interacted with.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-rating [(ngModel)]="value" [disabled]="true" [cancel]="false"></p-rating>
        </div>
        <app-code [code]="code" selector="rating-disabled-demo"></app-code>
    `
})
export class DisabledDoc {
    value: number = 5;

    code: Code = {
        basic: `
<p-rating [(ngModel)]="value" [disabled]="true" [cancel]="false"></p-rating>`,

        html: `
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value" [disabled]="true" [cancel]="false"></p-rating>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'rating-disabled-demo',
    templateUrl: './rating-disabled-demo.html'
})
export class RatingDisabledDemo {
    value: number = 5;
}`
    };
}
