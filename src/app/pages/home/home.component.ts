import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 public data="hello World!!";
 public color= "text-primary";
 public data2 = false;
 public arr1=[
 {  name: "aaaaaa",
    id:1,
},{
  name:"bbbbb",
  id:2
},
{
  name:"cccc",
  id:3
},
{
  name:"ddddd",
  id:4
},
{
  name:"eeee",
  id:5
}
 ]}
