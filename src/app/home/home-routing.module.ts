import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeAllComponent } from "./pages/home-all/home-all.component";
import { HomeIpoComponent } from "./pages/home-ipo/home-ipo.component";
import { HomeNewsComponent } from "./pages/home-news/home-news.component";
import { HomeResearchComponent } from "./pages/home-research/home-research.component";
import { HomeSecComponent } from "./pages/home-sec/home-sec.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "home", component: HomeComponent },
      { path: "homeall", component: HomeAllComponent },
      { path: "homenews", component: HomeNewsComponent },
      { path: "homesec", component: HomeSecComponent },
      { path: "homeipo", component: HomeIpoComponent },
      { path: "homeresearch", component: HomeResearchComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
