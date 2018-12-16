import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {config} from "../../../../config";

@Component({
    selector: 'perform-test',
    templateUrl: './perform-test.component.html',
    styleUrls: ['./perform-test.component.css']
})
export class PerformTestComponent {
    private performTestServiceUrl: string = config.serverUrl + "/performtest"

    public skillValue: number = 50;
    public bonusDice: number = 0;
    public penaltyDice: number = 0;
    public result: object;

    constructor(private http: HttpClient) { }

    performTest() {
        let requestBody = {"skillValue": this.skillValue, "bonusDice": this.bonusDice, "penaltyDice": this.penaltyDice}
        this.http.post(this.performTestServiceUrl, requestBody)
            .subscribe(rollResult => this.result = rollResult['testResult']);
    }
}