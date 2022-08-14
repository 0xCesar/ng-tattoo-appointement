import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkPage implements OnInit {
  flashs = [
    {
      'url' : "https://tattoo-planetarium.com/wp-content/uploads/2022/07/8702E500_15BD_43BB_BD0B_BCA3AA6A3B72.jpeg",
      'title': "Bateau Pirate",
      'zone': "Avant Bras"
    },
    {
      'url' : "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x1024:format=jpg/path/s6e3bb4a7f0125942/image/i7c73e8295e77ca4d/version/1635157430/image.jpg",
      'title': "Tigre sauvage",
      'zone': "Dos"
    },
    {
      'url' : "https://www.tarawa.com/lifestyle/wp-content/uploads/2021/11/tatouage-mandala-ying-yang-dotwork.jpg",
      'title': "Mandala",
      'zone': "Main droite"
    },
    {
      'url' : "https://i.pinimg.com/originals/d0/1e/4d/d01e4dafc7923186e4e28b038131b676.jpg",
      'title': "Joker !",
      'zone': "Jambes gauche"
    },
    {
      'url' : "https://tattoo-planetarium.com/wp-content/uploads/2022/07/8702E500_15BD_43BB_BD0B_BCA3AA6A3B72.jpeg",
      'title': "Title",
      'zone': "Jambes gauche"
    },
    {
      'url' : "https://tattoo-planetarium.com/wp-content/uploads/2022/07/8702E500_15BD_43BB_BD0B_BCA3AA6A3B72.jpeg",
      'title': "Title",
      'zone': "Jambes gauche"
    },
    {
      'url' : "https://tattoo-planetarium.com/wp-content/uploads/2022/07/8702E500_15BD_43BB_BD0B_BCA3AA6A3B72.jpeg",
      'title': "Title",
      'zone': "Jambes gauche"
    },
    {
      'url' : "https://tattoo-planetarium.com/wp-content/uploads/2022/07/8702E500_15BD_43BB_BD0B_BCA3AA6A3B72.jpeg",
      'title': "Title",
      'zone': "Jambes gauche"
    },
    {
      'url' : "https://tattoo-planetarium.com/wp-content/uploads/2022/07/8702E500_15BD_43BB_BD0B_BCA3AA6A3B72.jpeg",
      'title': "Title",
      'zone': "Jambes gauche"
    },

  ]

  constructor() { }

  ngOnInit(): void {

  }

}
