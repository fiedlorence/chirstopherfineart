import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  id: number;

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  

  goBack(): void{
    this.location.back();
  }

}
