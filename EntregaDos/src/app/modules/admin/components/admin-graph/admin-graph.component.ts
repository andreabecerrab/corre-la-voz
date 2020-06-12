import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';


import * as pluginDataLabels from 'chart.js';
import { Label } from 'ng2-charts';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin-graph',
  templateUrl: './admin-graph.component.html'
})


export class AdminGraphComponent implements OnInit {
  @Input() va;
 
   total;
  

  //pagination
  totalPost;
  constructor(public _marchaServices: MarchaServiceService) {}

  
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Total de marchas hasta el dia de hoy'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  

  public barChartData: ChartDataSets[];
 
 

  ngOnInit() {

   
    
    
    
    this.total=this._marchaServices.getTotal()
    .toPromise()
  //output: 'First Example'
  .then(result => {
    console.log('From Promise:', result);
    this.varFrameData(result);
    
    
  });
  


  console.log("total macha:"+this.total);

  }

  public varFrameData(ar:any){
    
    
    this.barChartData=[
    
      { data:[ar], label: 'Marchas' }
  
  
      
    ];
      

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    // const data = [
    //   Math.round(Math.random() * 100),
    //   59,
    //   80,
    //   (Math.random() * 100),
    //   56,
    //   (Math.random() * 100),
    //   40];
    // this.barChartData[0].data = data;
  }

}