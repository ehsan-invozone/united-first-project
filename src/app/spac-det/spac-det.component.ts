import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {overview} from '../services/overview.bd';
import {spacs} from '../services/spacs.bd';
import {trusts} from '../services/trust_datat_return.db';
import {units} from '../services/unit_informations.db';
import {filings} from '../services/filings_timelines.bd';
import {admins} from '../services/administrativ.bd';
import {adminsDet} from '../services/admin_details.bd';
import {directors} from '../services/admins_officers.bd';
import {groupBy} from 'lodash-es';
import {shareholders} from '../services/shareholders.bd';
import {spacspage} from '../services/spacspage.bd';
import {stock} from '../services/commonstock.bd';
import {warrant} from '../services/warrentinformation.bd'; 
import { Chart } from 'chart.js';
@Component({
  selector: 'app-spac-det',
  templateUrl: './spac-det.component.html',
  styleUrls: ['./spac-det.component.scss']
})
export class SpacDetComponent implements OnInit,OnDestroy {
  options: any;
  updateOptions: any;

  private oneDay = 24 * 3600 * 1000;
  private now: Date;
  private value: number ;
  private data: any[];
  private timer: any;

  lineChart: any;
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  news :any;
  truts : any;
  unitinfos: any;
  timelines:any;
  administrators:any;
  administratorsTypes:any;
  directors:any;
  shareholdersD:any;
  similarspacs:any;
  spacwithid:any;
  headElements = ['name', 'position', 'age', 'description'];
  headElementsth = ['Name', 'Position', 'Age', 'Title'];
  headElementsShareH = ['Name', 'Shares', 'Title'];
  headElementsShareD = ['fund_name', 'shares', 'percentage'];
  timelinesth = ['date', 'type', 'title'];
  timelinesthdata = ['Date', 'Type', 'Title'];
  elementUnit='Unit Information';
  elementUnitChart:any;
  drobdawUnit='Unit';
  chartUnit='Unit Historical price';
  stocks:any;
  resarch:any;
  activate = false;
  warrants:any;
  public stockplusinfos = false;
  public showDesc = false;
  selectedIndex = -1;
  active: number;
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];
  constructor(private activeID:ActivatedRoute,private tutorialService: overview,private latestnews:spacs,private trust:trusts,private unit:units,
    private filing:filings,private admins:admins,private admin_details:adminsDet,private directors_officiers:directors,private shareholdersa:shareholders,private spacs:spacspage,
    private stock:stock,private warrant:warrant,
    ) { }
  spacId: string;
   
  ngOnInit(): void {
       // generate some random testing data:
       this.data = [];
       this.now = new Date(2016, 9, 3);
       this.value = Math.random() * 100;
   
       for (let i = 0; i < 100; i++) {
         this.data.push(this.randomData());
       }
   
       // initialize chart options:
       this.options = {
         title: {
         },
         tooltip: {
           trigger: 'axis',
           formatter: (params) => {
             params = params[0];
             const date = new Date(params.name);
             return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
           },
           axisPointer: {
             animation: false
           }
         },
         xAxis: {
           type: 'time',
           splitLine: {
             show: false
           }
         },
         yAxis: {
           type: 'value',
           boundaryGap: [0, '10%'],
           splitLine: {
             show: false
           }
         },
         series: [{
           name: 'Mocking Data',
           type: 'line',
           showSymbol: false,
           hoverAnimation: false,
           data: this.data
         }]
       };
   
       this.timer = setInterval(() => {
         for (let i = 0; i < 5; i++) {
           this.data.shift();
           this.data.push(this.randomData());
         }
   
         this.updateOptions = {
           series: [{
             data: this.data
           }]
         };
       }, 1000);
    this.spacId=this.activeID.snapshot.paramMap.get("id");
    this.retrieveTutorials();
    this.LatestNews();
    this.getTruts();
    this.lineChartMethod();
    this.getUnits();
    this.getfilings();
    this.getAdmins();
    this.getAdminsDet();
    this.getD_officiers();
    this.getshareholders();
    this.getSpacs();
    this.getSpacwithID();
    this.getCommonStock();
    this.getWarrant();
    this.getRelatedresearch();
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData() {
    this.now = new Date(this.now.getTime() + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value)
      ]
    };
  }
  addclassdesc():void{
    console.log("hello");
    if(this.showDesc){
      document.querySelector('#desc').classList.add('displaydesctiption');
    }else{
    document.querySelector('#desc').classList.remove('displaydesctiption');
    }
  }
  onTableDataChange(event){
    this.page = event;
    this.getfilings();
  }
  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getfilings();
  }   
  getStock(){
    this.unitinfos=this.stocks;
    this.elementUnit='Common stock';
    this.drobdawUnit=this.elementUnit;
    this.stockplusinfos=false;
    this.chartUnit='Common stcok Historical price';
   
  }
  getWarrent():void{
    this.chartUnit='Warrant Information Historical price';
    this.unitinfos=this.warrants;
    this.elementUnit='Warrant Information';
    this.drobdawUnit=this.elementUnit;
    this.stockplusinfos=true;

   
  }
  getUnit():void{
    this.elementUnit='Unit Information';
    this.drobdawUnit='Unit';
    this.stockplusinfos=false;
    this.chartUnit='Unit Historical price';
    this.getUnits();
  }
  getWarrant() {
    this.warrant.get(this.spacId)
      .subscribe(
        data => {
          this.warrants = data;
       
        },
        error => {
         
        });
  }
  getCommonStock() {
    this.stock.get(this.spacId)
      .subscribe(
        data => {
          this.stocks = data;
          
        },
        error => {
         
        });
  }
  getRelatedresearch() {
    this.latestnews.getLimit().subscribe(
      data =>{
this.resarch=data;
console.log(this.resarch);
      },
      error => {
        console.log(error);
      });
  }
  retrieveTutorials() {
    this.tutorialService.get(this.spacId)
      .subscribe(
        data => {
          this.tutorials = data;
          
        },
        error => {
     
        });
  }
  getAdmins() {
    this.admins.getAllWhere(this.spacId)
      .subscribe(
        data => {
          this.administrators = data;
          if(this.administrators)
          this.admin_details.get(this.administrators.idadmin)
      .subscribe(
        data => {
          const states = groupBy(data, 'type');
          const typas=Object.entries(states).map(([type, value]) => ({type, value}));
          this.administratorsTypes = typas;
      console.log(this.administratorsTypes);
          
        },
        error => {
        
        });
          console.log(this.administrators);
        },
        error => {
         
          
        });
  }
  getSpacs() {
    this.spacs.getLimit()
      .subscribe(
        data => {
          this.similarspacs = data;
        
        },
        error => {
        
        });
  }
  getSpacwithID() {
    this.spacs.get(this.spacId)
      .subscribe(
        data => {
          this.spacwithid = data;
       
          
        },
        error => {
      
          
        });
  }
  getshareholders() {
    this.shareholdersa.getAllWhere(this.spacId)
      .subscribe(
        data => {
          this.shareholdersD = data;
        
          
        },
        error => {
       
        });
  }
  getAdminsDet() {
   
  }
  getD_officiers() {
    this.directors_officiers.getAllWhere(this.spacId)
      .subscribe(
        data => {
          this.directors = data;
       
        },
        error => {
         
        });
  }
  getfilings() {
    this.filing.getAllWhere(this.spacId)
      .subscribe(
        data => {
          this.timelines = data;
          if(this.timelines)
          console.log("timelines");
        },
        error => {
          
        });
  }
  getUnits() {
    this.unit.get(this.spacId)
      .subscribe(
        data => {
          this.unitinfos = data;
         
         
        },
        error => {
         
        });
  }
  getTruts() {
    this.trust.getAllWhere(this.spacId)
      .subscribe(
        data => {
          this.truts = data;
         
        },
        error => {
       
        });
  }
  LatestNews() {
    this.latestnews.getAll()
      .subscribe(
        data => {
          this.news = data;
        
        },
        error => {
         
        });
  }
  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
       
          this.refreshList();
        },
        error => {
       
        });
  }

  searchTitle() {
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
   
        },
        error => {
       
        });
  }
  lineChartMethod() {
  
  }
}
