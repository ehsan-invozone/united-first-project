import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalendardatesComponent } from "./pages/calendardates/calendardates.component";

const routes: Routes = [
  {
    path: "",
    children: [{ path: "calendar", component: CalendardatesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
