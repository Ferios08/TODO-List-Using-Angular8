import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public items = [];
  public newTask;

  constructor() { }

  ngOnInit() {
  }


    public addToList() {
    if (this.newTask == '') {
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
    console.log(this.items)
  }


  public deleteTask(index) {
    this.items.splice(index, 1); 
   }

}
