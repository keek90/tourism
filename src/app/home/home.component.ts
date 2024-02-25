import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  districts=[{
    "id": 1,
    "title": "Ernakulam",
    "description":" Ernakulam also known as Kochi is no exception for this. Ernakulam is the commercial capital and the most developed city of Kerala.",
    "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2021/10/Vypeen-Island.jpg"

  },{
    "id": 2,
    "title": "Thiruvanathapuram",
    "description": "Thiruvananthapuram is the centre of political activities of the state. Thiruvananthapuram is also called as the ‘Abode of Lord Anantha’.",
    "image": "https://irisholidays.com/keralatourism/wp-content/uploads/2018/12/trivandrum.jpg"

  },{
    "id": 3,
    "title": "Kannur",
    "description":"Payyambalam Beach, Baby Beach, Palakkayam Thattu, Vismaya Water Park, Madayipara, Pappinisseri, Aralam Wildlife Sanctuary, Ezhara Beach, Mapilla Bay and many more",
    "image":"https://media1.thrillophilia.com/filestore/x9qqg9ypc5ngtfzirvrkkz1u6x4k_1608103775_shutterstock_1194335383.jpg?w=753&h=450&dpr=1.0"
  },
{
  "id": 4,
  "title": "Kottayam",
  "description": "Kottayam is a wonderful district in Central Kerala bordered by the lofty Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. ",
  "image":"https://keralatourism.travel/images/destinations/places-to-visit/kottayam/poonjar-palace-kottayam-kerala-tourism-entry-fee-timings-holidays-reviews-small.jpg"
},
{
  "id": 5,
  "title": "Idukki",
  "description": "To the humankind lost in the concrete jungle, Idukki tourist places acquaints them with the splendor of nature and God’s magnificent creation.",
  "image": "https://media1.thrillophilia.com/filestore/lpjuuacfv9rh9ykk74qcfy8h1pqw_Wild_elephants_2C_Munnar.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 6,
  "title": "Wayanad",
  "description": "Banasura Sagar Dam, Chembra Peak, Kuruva Island, Edakkal Caves, Chain Tree, Pookode Lake, Tholpetty Wildlife Sanctuary, The Bamboo Factory and many more.",
  "image": "https://media2.thrillophilia.com/images/photos/000/053/330/original/1552466807_shutterstock_796295632.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 7,
  "title": "Kollam",
  "description": "Ashtamudi Lake, Thangassery lighthouse, Kollam Beach, Thirumullavaram Beach, Kollam Adventure Park, Anandavalleswaram Temple and many more.",
  "image": "https://media1.thrillophilia.com/filestore/zs3yxezp69plr7invub9qj33heo2_1584705313_shutterstock_726107248.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 8,
  "title": "Kasargod",
  "description": "Off the radar for commoners and the land of exquisite folk art, tourist places in Kasaragod are reserved for hardcore.",
  "image": "https://media1.thrillophilia.com/filestore/iu79udtdy63d7kkbi25r56oojnml_1552979160_bekal_fort.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 9,
  "title": "Kozhikode",
  "description": "Kozhikode Beach, Mananchira, Kadalundi Bird Sanctuary, Valayanad Devi Temple, Thalikkunu Shiva Temple, Beypore Beach, Srikanteshwara Temple & many more.",
  "image": "https://media1.thrillophilia.com/filestore/2avtoejrqvk2f56od0c0okrujfpr_1584439345_shutterstock_1023261916.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 10,
  "title": "Pathanamthitta",
  "description": "Pathanamthitta is a town steeped in spirituality and mysticism in southern Kerala. Sabarimala, which is located in the Pathanamthitta district.",
  "image": "https://media2.thrillophilia.com/images/photos/000/377/236/original/1641469527_shutterstock_1832002894.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 11,
  "title": "Palakkad",
  "description": "Ottapalam, Parambikulam Wildlife Sanctuary, Vadakkanthara Temple, Palakkad Fort,  Kanjirapuzha, Dhoni Waterfalls and many more.",
  "image": "https://media2.thrillophilia.com/images/photos/000/145/961/original/1550576359_26677079964_b6d9dbf118_k.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 12,
  "title": "Alappuzha",
  "description": "Places to visit in Alleppey: Kumarakom Bird Sanctuary, Vembanad Lake, Mannarasala Temple, Ambalapuzha Temple and many more.",
  "image": "https://media2.thrillophilia.com/images/photos/000/113/443/original/1500982057_A_view_of_Kuttanad.._E0_B4_95_E0_B5_81_E0_B4_9F_E0_B5_8D_E0_B4_9F_E0_B4_A8_E0_B4_BE_E0_B4_9F_E0_B5_8D_2C__E0_B4_92_E0_B4_B0_E0_B5_81__E0_B4_A6_E0_B5_83_E0_B4_B6_E0_B5_8D_E0_B4_AF_E0_B4_82.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 13,
  "title": "Malappuram",
  "description": "Best of Malappuram tourist places include names of Kottakkunnu, Kadalundi Bird Sanctuary and many others to explore.",
  "image": "https://media2.thrillophilia.com/images/photos/000/146/323/original/1551071670_ef7aac186f0c55c85300661e2fe1859a.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 14,
  "title": "Thrissur",
  "description": "Vadakkunnathan Temple, Dolours Basilica, Shakthan Thampuran Palace, Paramekkavu Bhagavathy Temple, Vilangan Kunnu and many more.",
  "image": "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/thrissur-pooram-Festival-Kerala-Biggest-.jpg?resize=1536%2C998&ssl=1"
}]
}
