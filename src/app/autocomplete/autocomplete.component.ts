import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class Concept{
  id:number;
  name:string;
}

export class Authentication{
  username:string;
  password:string;
}

@Component({
  'selector':'app-autocomplete',
  'templateUrl':'./autocomplete.component.html',
  'styleUrls':['./autocomplete.component.css']
  })
export class AutocompleteComponent implements OnInit {
  //public concepts:Map<string,string> = new Map([["1","Component"],["2","Service"]]);
  public conceptValue:string;
  public authentication:Authentication;
  public loginForm:FormGroup;
  public submitted:boolean= false;
  public concepts:Array<Concept> = [{id:1,name:'Module'},
  {id:2,name:'Component'},{id:3,name:'Service'}
  ]
 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.conceptValue='';
    this.authentication = new Authentication();
    this.authentication.username='';
    this.authentication.password='';

    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
    //this.concepts.set("3","Router");
    //this.concepts.set("4","Module");

  }

  saveConcept(e:any){
    let name:string=e.target.value;
    let id = this.concepts.filter(c=>c.name === name)[0];
    alert(id.id);
  }

  get f(){
    return this.loginForm.controls;
  }

  doLogin(){
    this.submitted = true;
return ;
  }

}