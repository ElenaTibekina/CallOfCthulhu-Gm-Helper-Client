import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiceRollComponent } from './components/diceroll/dice-roll.component';
import { PerformTestComponent } from './components/performtest/perform-test.component';

const routes: Routes = [{path: '', redirectTo: 'roll', pathMatch: "full"},
  {path: 'roll', component: DiceRollComponent },
  {path: 'test', component: PerformTestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
