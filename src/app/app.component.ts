import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tourism_angular';
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
  "description": "Ashtamudi Lake, Thangassery lighthouse, Kollam Beach, Thirumullavaram Beach, Kollam Adventure Park, Anandavalleswaram Temple, Sri Mahaganapathi Temple and many more.",
  "image": "https://media1.thrillophilia.com/filestore/zs3yxezp69plr7invub9qj33heo2_1584705313_shutterstock_726107248.jpg?w=753&h=450&dpr=1.0"
},{
  "id": 8,
  "title": "Kasargod",
  "description": "Off the radar for commoners and the land of exquisite folk art, tourist places in Kasaragod are reserved for hardcore.",
  "image": "https://media1.thrillophilia.com/filestore/iu79udtdy63d7kkbi25r56oojnml_1552979160_bekal_fort.jpg?w=753&h=450&dpr=1.0"
}]
}
