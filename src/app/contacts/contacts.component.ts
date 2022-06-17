import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

phone:string = "+38 (099) 995 - 55 - 55";
email:string = "info@mail.com";
address:string = "Ukraine, some street, 42, 54001";

  constructor() { }

  ngOnInit(): void {
  }

}
