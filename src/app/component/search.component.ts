import { Component, OnInit } from '@angular/core';
import { OvertredingService } from '../service/overtreding.service';
import { Overtreding } from "../service/overtreding";
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  //,styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: FormGroup;
  //GASTHUISTUNNEL
  overtredingen: Overtreding[];

  //search: string = "BISSCHOPPENHOFLAAN";
  opnameplaats_straat = "KRIJGSBAAN";
  constructor(private os: OvertredingService) { }

  ngOnInit() {
    this.search = new FormGroup({
      name: new FormControl('')
    });
  }
  //GASTHUISTUNNEL
  onSubmit() {
    //console.log(this.search);

    this.os.searchOvertredingstraat().subscribe(data => {
      this.overtredingen = data.filter(x => x.opnameplaats_straat === this.search.value.name);
    })


  }

}
