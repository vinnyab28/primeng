import { Component } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'customized-doc',
    template: `
        <app-docsectiontext>
            <p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toggleButton [(ngModel)]="checked" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" [style]="{ width: '10em' }"></p-toggleButton>
        </div>
        <app-code [code]="code" selector="toggle-button-customized-demo"></app-code>
    `
})
export class CustomizedDoc {
    checked: boolean = false;

    code: Code = {
        basic: `
<p-toggleButton [(ngModel)]="checked" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" [style]="{ width: '10em' }"></p-toggleButton>`,

        html: `
<div class="card flex justify-content-center">
    <p-toggleButton [(ngModel)]="checked" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" [style]="{ width: '10em' }"></p-toggleButton>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'toggle-button-customized-demo',
    templateUrl: './toggle-button-customized-demo.html'
})
export class ToggleButtonCustomizedDemo {
    checked: boolean = false;
}`
    };
}
