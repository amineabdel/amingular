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
      this.overtredingen = data;
    });
  }

}
