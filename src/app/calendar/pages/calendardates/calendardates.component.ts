import {spacglobal} from '../../../spacs/services/spacglobal.bd'; 
import {spacspage} from '../../../spacs/services/spacspage.bd';
import {events} from '../../../shared/services/events.bd'; 
import {FullCalendarComponent} from '@fullcalendar/angular';
import { Router } from '@angular/router';
import {Component,AfterViewChecked,OnInit,ViewChild,ElementRef,forwardRef} from "@angular/core";
import '@fullcalendar/angular';
import {CalendarOptions} from '@fullcalendar/angular';
import {spacs} from '../../../spacs/services/spacs.bd';
import { Calendar } from '@fullcalendar/core';
import {AuthGuard} from '../../../util/app.gard';
import { RouterModule, Routes } from '@angular/router';
import {SpacDetComponent} from '../../../spacs/pages/spac-det/spac-det.component';
import { NgZone } from '@angular/core';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'spacedet/:id',component:SpacDetComponent,canActivate:[AuthGuard]},
];
@Component({
  selector: 'app-calendardates',
  templateUrl: './calendardates.component.html',
  styleUrls: ['./calendardates.component.scss']
})
export class CalendardatesComponent implements OnInit {
  
  keyword = 'name';
  spacssearch:any;

  @ViewChild(FullCalendarComponent, {static: false})
  calendarComponent: FullCalendarComponent;
  calendarOptions: CalendarOptions
currentEvents=[];
  allspacs:any;
  events:any;
  news:any;
  calendarApi:any;
  monthchange:any;
  yearchange:any;
  headermonth:any;
  headeryear:any;
  month=new Date().getMonth();
  year=new Date().getFullYear();
  eventsipos=[];
  eventsnews=[];
  eventsterm=[];
  constructor(private spacsS:spacglobal,private event:events,private newses:spacs,public router: Router,private ngZone:NgZone, private Spacspage:spacspage) { }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    forwardRef(() => Calendar);
    this.newses.getAll().subscribe(
      data => {
    this.news = data;
    for(let n of this.news){
      if(n.date!=""){
        this.currentEvents.push({id:n.idnews,title: n.title, date:n.date,color:'#15B947',url:'spacdet/'+n.idnews})
        this.eventsnews.push({id:n.idnews,title: n.title, date:n.date,color:'#15B947',url:'spacdet/'+n.idnews})
      }
    }
      }
    )
    this.event.getAll()
    .subscribe(
      data => {
        this.events = data;
        for(let d of this.events) {
          const date = new Date(d.dates.ipo_date)
          if(d.dates.length!=0){
            console.log(d);
            for(let da of d.dates) {
              console.log(da.ipo_date);
              this.currentEvents.push({id:d.idspac,title: d.title, date:da.ipo_date,color:'#1587B9',url:'spacdet/'+d.idspac})
              this.eventsipos.push({id:d.idspac,title: d.title, date:da.ipo_date,color:'#1587B9',url:'spacdet/'+d.idspac})
              this.currentEvents.push({id:d.idspac,title: d.title, date:da.termination_date,color:'#666D8B',url:'spacdet/'+d.idspac})
              this.eventsterm.push({id:d.idspac,title: d.title, date:da.termination_date,color:'#666D8B',url:'spacdet/'+d.idspac})

            }
           
            console.log(d.dates.ipo_date)
          }else{
          }
        }

        this.calendarOptions= {
          initialView: 'dayGridMonth',
          events:this.currentEvents,
          eventClick: function(info) {
            if(info.event.url=="spac")
            info.el.style.borderColor = 'red';
            console.log(info.el.id);
          },
          eventColor: '#378006',  
          navLinks   : false,
          headerToolbar: {
            left:'',
            center:'',
            //right:'dayGridMonth,timeGridWeek,timeGridDay'
            right:'',
          },
        };
        console.log(this.currentEvents);
      },
      error => {
        console.log(error);
      });
  
   this.retrievespacsitems();
   console.log(this.month);
   console.log(this.year);

   
   this.getAllSpacsResearch();
  }

  showipo(){
    this.calendarComponent.getApi().removeAllEvents();
    this.calendarComponent.getApi().addEventSource(this.eventsipos)
  }
  shownews(){
    this.calendarComponent.getApi().removeAllEvents();
    this.calendarComponent.getApi().addEventSource(this.eventsnews)
  }
  showtermination(){
    this.calendarComponent.getApi().removeAllEvents();
    this.calendarComponent.getApi().addEventSource(this.eventsterm)
  }
  

  getAllSpacsResearch() {
    this.Spacspage.getAll()
      .subscribe(
        data => {
          this.spacssearch = data;
          if(this.spacssearch)
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  retrievespacsitems() {
    this.spacsS.getAll()
      .subscribe(
        data => {
          this.allspacs = data;
          if(this.allspacs)
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  redirectlien() {
   
}
  select_year(value:string) :void{
    this.headeryear=value;
    if(this.monthchange){
    this.yearchange=value;
    console.log(this.monthchange);
    console.log(value+'-'+0+this.monthchange+'-15');
    this.calendarComponent.getApi().gotoDate(value+'-'+0+this.monthchange+'-15');
    }else{
      this.calendarComponent.getApi().gotoDate(value+'-'+0+this.month+'-15');
    }
  }
  select_month(value:string) :void{
    this.headermonth=value;
    this.monthchange=value;
    console.log(this.yearchange)
    if(this.yearchange){
      this.calendarComponent.getApi().gotoDate(this.yearchange+'-'+0+this.monthchange+'-15');
    }else{
    console.log('hey');
    console.log("the selected value is " + value);
    this.calendarComponent.getApi().gotoDate('2021-'+0+this.monthchange+'-15');
    }
  }

}
