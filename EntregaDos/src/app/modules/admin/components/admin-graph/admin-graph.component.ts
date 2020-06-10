import { Component, OnInit } from '@angular/core';
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
 
  private total: Subscription;
  

  //pagination
  totalPost;
  constructor(private _marchaServices: MarchaServiceService) {}
  
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
  public barChartLabels: Label[] = ['dia 1', 'dia 2', 'dia 3', 'dia 4', 'dia 5'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  

  public barChartData: ChartDataSets[];
 

  ngOnInit() {
    this.total = this._marchaServices
    .getTotalPosts()
    .subscribe((total: number) => (this.totalPost = total));
   

    this.barChartData=[
    
      { data:[this.totalPost] , label: 'Marchas' }


      
    ];
    
  console.log("total macha:"+this.totalPost);
    
    

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // public randomize(): void {
  //   // Only Change 3 values
  //   const data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   this.barChartData[0].data = data;
  // }

}
