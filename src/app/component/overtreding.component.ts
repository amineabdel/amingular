import { Component, OnInit } from '@angular/core';
import { Overtreding } from '../service/overtreding';
import { OvertredingService } from '../service/overtreding.service';
@Component({
  selector: 'app-overtreding',
  templateUrl: './overtreding.component.html'
  //,styleUrls: ['./overtreding.component.css']
})
export class OvertredingComponent implements OnInit {

  overtredingen: Overtreding[];

  constructor(private os: OvertredingService) { }

  ngOnInit() {
    this.os.getAllOvertreding().subscribe(data => {
      //console.log(data[0].opnameplaats_straat);
      this.overtredingen = data;
    });

    this.os.getAllOvertreding().subscribe(data => {
      this.overtredingen.sort((a, b) => a.datum_vaststelling.localeCompare(b.datum_vaststelling));
      this.overtredingen.sort((a, b) => a.opnameplaats_straat.localeCompare(b.opnameplaats_straat));
    })
  }

}
