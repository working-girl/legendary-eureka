import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { tasks } from './timeData';
import * as d3 from 'd3';

@Component({
  selector: 'app-timeline',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  private maxDate:any;
  private minDate:any;
  private timeDomainStart:any;
  private timeDomainEnd:any;
  private timeDomainMode:any;
  private taskNames:any;
  private taskStatus:any;
  private height:number;
  private width:number;
  private tickFormat:string;
  private margin:any;
  private x:any;
  private y:any;
  private xAxis:any;
  private yAxis:any;

  constructor() {
  	this.taskStatus = {	"SUCCEEDED":"bar", "FAILED":"bar-failed", "RUNNING":"bar-running", "KILLED":"bar-killed" };
	  this.taskNames = [ "D Job", "P Job", "E Job", "A Job", "N Job" ];

    tasks.sort((a:any,b:any) => { return a.endDate - b.endDate; });
    this.maxDate = tasks[tasks.length - 1].endDate;
    tasks.sort((a:any,b:any) => { return a.startDate - b.startDate; });
    this.minDate = tasks[0].startDate;
    this.margin = { top:20, right:40, bottom:20, left:80 };
    this.timeDomainStart = d3.timeDay.offset(new Date(),-3);
    this.timeDomainEnd = d3.timeHour.offset(new Date(),+3);
    this.timeDomainMode = "fit";// fixed (broken LOL) or fit
    this.height = 500;
    this.width = 960;
    this.tickFormat = "%H:%M";
  }

  ngOnInit() {
    this.initTimeDomain();
    this.initAxis();

    let svg = d3.select("app-timeline")
      .append("svg")
      .attr("class", "chart")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("class", "gantt-chart")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");

    svg.selectAll(".chart")
      .data(tasks, (d) => { return d.startDate + d.taskName + d.endDate; })
      .enter()
      .append("rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("class", (d) => { 
          if(this.taskStatus[d.status] == null){ return "bar";}
          return this.taskStatus[d.status];
        })
      .attr("y", 0)
      .attr("transform", (d) => { return "translate(" + this.x(d.startDate) + "," + this.y(d.taskName) + ")"; })
      .attr("height", (d) => { return 70; })
      .attr("width", (d) => { return (this.x(d.endDate) - this.x(d.startDate)); });

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + (this.height - this.margin.top - this.margin.bottom) + ")")
      .transition()
      .call(this.xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .transition()
      .call(this.yAxis);
  }

  initAxis() {
    this.x = d3.scaleTime().domain([ this.timeDomainStart, this.timeDomainEnd ]).range([ 0, this.width ]).clamp(true);
    this.y = d3.scaleBand().domain(this.taskNames).rangeRound([ 0, this.height - this.margin.top - this.margin.bottom ], .1);
    this.xAxis = d3.axisBottom().scale(this.x).tickFormat(d3.timeFormat(this.tickFormat)).tickSize(8).tickPadding(8);
    this.yAxis = d3.axisLeft().scale(this.y).tickSize(0);
  }

  initTimeDomain() {
    if (this.timeDomainMode === "fit") {
      if (tasks === undefined || tasks.length < 1) {
        this.timeDomainStart = d3.time.day.offset(new Date(), -3);
        this.timeDomainEnd = d3.time.hour.offset(new Date(), +3);
      }
      tasks.sort((a:any, b:any) => { return a.endDate - b.endDate; });
      this.timeDomainEnd = tasks[tasks.length - 1].endDate;
      tasks.sort((a:any, b:any) => { return a.startDate - b.startDate; });
      this.timeDomainStart = tasks[0].startDate;
    }
  }
}