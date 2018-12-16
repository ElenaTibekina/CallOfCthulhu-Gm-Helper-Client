import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from "../../../../config";

@Component({
    selector: 'dice-roll',
    templateUrl: './dice-roll.component.html',
    styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent {
    
    private rollDiceServiceUrl: string = config.serverUrl + "/diceroll"

    public diceType: string = "100";
    public diceCount: number = 1;
    public result: object;

    constructor(private http: HttpClient) { }

    performRoll() {
        let diceRollRequestBody = {"diceCount": this.diceCount, "diceFacesCount": this.diceType}
        this.http.post(this.rollDiceServiceUrl, diceRollRequestBody)
            .subscribe(rollResult => this.result = rollResult);
    }
}
