import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { CardsService } from '../sercices/card.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public items : Card[] = [];
  public newTask;
  public elements = 0;

  constructor(
    private cardsService: CardsService,
  ) { }

  ngOnInit() {
    this.getAll();
    
  }


  public addToList() {
    if (this.newTask == '') {
    }
    else {
      this.items.push(this.newTask);

      // push to database
      return new Promise((resolve, reject) => {
        this.cardsService.add({ "task": this.newTask }).subscribe(data => {
          this.newTask = '';
          this.ngOnInit();
        });
      });

    }
    console.log(this.items)
  }


  public deleteTask(index) {
    this.cardsService.delete(this.items[index].id).subscribe((response) => {
      // console.log("deleted");

    });
    this.ngOnInit();
  }




  getAll(): any {
    return new Promise((resolve, reject) => {
      this.cardsService.getAll().subscribe(data => {
        resolve(data);
        this.items = data as Card[];
        console.log(data);
        this.elements = Object.keys(data).length;
        console.log("You have " + this.elements + " tasks :)");
        
      });
    });
  }
}
