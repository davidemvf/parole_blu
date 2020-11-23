import { Component, OnInit } from '@angular/core';
import { Romanzo } from './romanzi.model';
import { RomanziService } from './romanzi.service';


@Component({
  selector: 'app-romanzi',
  templateUrl: './romanzi.component.html',
  styleUrls: ['./romanzi.component.scss']
})
export class RomanziComponent implements OnInit {

  romanzi: Romanzo[] = [];
  
  constructor(private romanziService: RomanziService) {}

  ngOnInit(): void {
    this.fetchRomanzi();
  }

  fetchRomanzi() {
    
    this.romanziService.getRomanzi().subscribe(data => {
      this.romanzi = data;
      console.log(this.romanzi);
    })
  
  }

}
