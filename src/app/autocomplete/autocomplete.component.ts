import { Component, OnInit } from '@angular/core';

export class Concept{
  id:number;
  name:string;
}


@Component({
  'selector':'app-autocomplete',
  'templateUrl':'./autocomplete.component.html',
  'styleUrls':['./autocomplete.component.css']
  })
export class AutocompleteComponent implements OnInit {
  //public concepts:Map<string,string> = new Map([["1","Component"],["2","Service"]]);
  public conceptValue:string;
  public concepts:Array<Concept> = [{id:1,name:'Module'},
  {id:2,name:'Component'},{id:3,name:'Service'}
  ]
 
  constructor() { }

  ngOnInit() {
    this.conceptValue='';
    //this.concepts.set("3","Router");
    //this.concepts.set("4","Module");

  }

  saveConcept(e:any){
    let name:string=e.target.value;
    let id = this.concepts.filter(c=>c.name === name)[0];
    alert(id.id);
  }

}