import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddAdministrativeDetailsComponent } from "./pages/add-administrative-details/add-administrative-details.component";
import { AddAdministrativeComponent } from "./pages/add-administrative/add-administrative.component";
import { AddDirectorsAndOfficiersComponent } from "./pages/add-directors-and-officiers/add-directors-and-officiers.component";
import { AddOverviewComponent } from "./pages/add-overview/add-overview.component";
import { AddSpacComponent } from "./pages/add-spac/add-spac.component";
import { AddTrustComponent } from "./pages/add-trust/add-trust.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "dashboard", component: AddAdministrativeComponent },
      { path: "backspacadd", component: AddSpacComponent },
      { path: "backoverviewadd", component: AddOverviewComponent },
      { path: "backtrustadd", component: AddTrustComponent },
      {
        path: "backadmindetailsadd",
        component: AddAdministrativeDetailsComponent,
      },
      { path: "backdiraoffadd", component: AddDirectorsAndOfficiersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
