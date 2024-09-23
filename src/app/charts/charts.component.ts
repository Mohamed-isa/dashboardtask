import { Component, OnInit } from '@angular/core';
import { Chart ,registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables,ChartDataLabels);
Chart.register();

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chart: any;
  newStationPie!: any[];
    newCustomerBar!: { month: string; Total: number; }[];
    stationDetail!:any;
    stationPie: any;
    unitConsumed!: { label: string; value: number; }[];
    chargerDataArray!: { label: string; value: number; }[];
  constructor() { }

  ngOnInit(): void {
    this.pieChart();
  }

  pieChart(): void {
    this.stationPie = [
      { label: 'Open', value: 30 },
      { label: 'Over Due', value: 50 },
      { label: 'Closed', value: 40 },
      { label: 'Cancelled', value: 60 },
    ];
  
    const chartLabels = this.stationPie.map((item: { label: any; }) => item.label);
    const chartData = this.stationPie.map((item: { value: any; }) => item.value);
  
    const piechartCanvas = document.getElementById('stationchart') as HTMLCanvasElement;
    const piechartCtx = piechartCanvas.getContext('2d');
  
    if (piechartCtx) {
      this.stationDetail = new Chart(piechartCtx, {
        type: 'doughnut',
        data: {
          labels: chartLabels,
          datasets: [
            {
              data: chartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 159, 64, 0.8)',
              ],
              borderColor: ['#fff'],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                font: { size: 14 },
                boxWidth: 45,
                padding: 30,
              },
            },
          
          },
        },
      });
    }
  }
  
}