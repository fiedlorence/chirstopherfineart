import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
  images = [
    {image: 'assets/image/image1.jpg'},
    {image: 'assets/image/image2.jpg'},
    {image: 'assets/image/image3.png'},
    {image: 'assets/image/image4.jpg'},
    {image: 'assets/image/image5.jpg'},
    {image: 'assets/image/image6.jpeg'},
    //{image: 'assets/image/image7.jpg'},
    //{image: 'assets/image/image8.jpg'},
    //{image: 'assets/image/image9.jpg'},
    {image: 'assets/image/image10.jpg'},
    {image: 'assets/image/image11.jpg'}
  ];

}