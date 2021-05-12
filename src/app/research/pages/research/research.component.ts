import { Component, OnInit } from '@angular/core';
import {spacs} from '../../../spacs/services/spacs.bd';
import { ActivatedRoute } from '@angular/router';
import {spacspage} from '../../../spacs/services/spacspage.bd';
import {filings} from '../../../shared/services/filings_timelines.bd';
@Component({ 
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
newsDet:any;
newsId:string;
spacId:any;
resarch:boolean=false;
spacs:any;
idspac=1;
timelines:any;
newsresarch:any;
similarspacs:any;
  constructor(private news:spacs,private spac:spacspage ,private activeID:ActivatedRoute,private filing:filings,private similarspac:spacs) { }

  ngOnInit(): void {
    this.newsId=this.activeID.snapshot.paramMap.get("id");
    this.getDetNews();
    console.log(this.newsId);
this.getfilings();
this.getSpacs();
this.getNewsResearch()
  }
  getNewsResearch(){
    this.news.getLimit().subscribe(
      data =>{
this.newsresarch=data;
console.log(this.newsresarch);
      },
      error => {
        console.log(error);
      });
    
  }
  getDetNews() {
    this.news.get(this.newsId)
    .subscribe(
      data => {
        this.newsDet = data;
        if(data)
        this.spac.get(this.newsDet.fk_spac)
    
        .subscribe(
          response => {
            this.spacs = response;
            console.log('Processing Request');
            if(this.spacs)
            console.log(response);
          },
          error => {
            console.log(error);
          });
        if(this.newsDet.category=='Research'){
        this.resarch=true;
        }else
        {
          this.resarch=false;
        }
      },
      error => {
        console.log(error);
      });
  }
  getfilings() {
    this.filing.getLimit()
      .subscribe(
        data => {
          this.timelines = data;
          if(this.timelines)
          console.log(this.timelines);
        },
        error => {
          console.log(error);
        });
  }
  getSpacs() {
    this.spac.getLimit()
      .subscribe(
        data => {
          this.similarspacs = data;
          if(this.similarspacs)
          console.log(this.similarspacs);
        },
        error => {
          console.log(error);
        });
  }
}
