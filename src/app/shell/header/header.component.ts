import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
      console.log(this.opened);
      
  }


  toggleNav() {
      this.opened = !this.opened;
  }

}
