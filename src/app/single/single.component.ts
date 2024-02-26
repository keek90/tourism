import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent implements OnInit {
  title: any;
  itemId: any;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      console.log("itemid:", this.itemId)
      
    });
  }

  details=[{
    "title": "ERNAKULAM",
    "image1": "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Fort-Kochi.jpg",
    "image2": "https://static.toiimg.com/thumb/width-800,height-600,msid-59576146.cms",
    "image3": "https://i0.wp.com/dekochi.com/wp-content/uploads/2017/06/Inchathotty-Suspension-Bridge-Inchathotty-Hanging-Bridge-1.jpg?resize=747%2C420&ssl=1",
    "description": "Ernakulam, the commercial capital of Kerala is enriched with ancient history that is evident in its art and culture. Historically, Ernakulam was the central spice route of India, interestingly called the spice capital of the world. Encompassing an array of nature’s beauty, Ernakulam will give you a wholesome experience in God’s own country-Kerala. We bet your trip to Kerala is incomplete without traversing this wondrous city.  We have curated a list of must-visit Ernakulam tourist places for your convenience"
  },{
    "title": "THIRUVANATHAPURAM",
    "image1": "https://images.ixigo.com/image/upload/t_thumb,f_auto/santhigiri-images-photos-51b6c367e4b0f5a61e9cadde.jpg" ,
    "image2": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/fe/2b/f3/sree-padmanabhaswamy.jpg?w=500&h=400&s=1",
    "image3": "https://www.keralabackwater.com/blog/wp-content/uploads/2017/04/kovalam-beach.jpg",
    "description": "Kuthiramalika (Puthenmalika) Palace Museum, Padmanabhapuram Palace, Napier Museum, The Kanakakunnu Palace, Priyadarshini Space Planetarium, Vizhinjam Rock-cut Cave, Thiruvananthapuram Zoo, Attukal Bhagavathy Temple, Vizhinjam Lighthouse, Magic Planet, Padmanabhaswamy Temple and many more places.There is no second speculating that one can investigate a portion of the best tourist places in Trivandrum, considering that this state only the most went to capital of India. Bordered by Arabian Sea in the west and the condition of Tamil Nadu in east, Trivandrum is a perfect destination for visitors in India. The long sandy shorelines, lush good countries, pleasant shorelines and a rich social legacy engross both household and outside guests. This spot, which is otherwise called Thiruvananthapuram is honoured with a few verifiable joys too. The city is an immaculate mix of appealing scene and fascinating history and society. While on your Kerala trip visit the absolute most adored tourist places in Trivandam Padmanabhaswamy Temple, Monumental Hindu hallowed place to Vishnu, Napier Museum,Attukal Temple, Kowdiar Palace, Thiruvananthapuram Zoo, Vellayani Lake, Chandrasekharan Nair Stadium, Malankara Church, Palkulangara Devi Temple. Slope stations, tranquil shorelines, backwaters and tidal ponds make Trivandam a perfect occasion destination. The spot is likewise surely understood for its assorted widely varied vegetation and is additionally a noteworthy fascination for restorative voyagers learning Ayurveda. Look at the rundown of a portion of the best tourist places to visit in Trivandam."
  },{
    "title": "KANNUR",
    "image1": "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/t_ufs/m_Kannur_Peralessary_1_l_551_584.jpg",
    "image2": "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/t_ufs/m_Kannur_Aralam_wildlife_sanctuary_1_l_391_639.jpg",
    "image3": "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/t_ufs/m_Kannur_Choottada_beach_1_l_360_640.jpg",
    "description": "Payyambalam Beach, Baby Beach, Palakkayam Thattu, Vismaya Water Park, Madayipara, Pappinisseri, Aralam Wildlife Sanctuary, Ezhara Beach, Mapilla Bay and many more.Places to visit in Kannur have been an epicentre for tourism in the Indian State of Kerala. Tourists come from all parts of the country to embark on the range of exotic natural wonders and gorgeous hilly destinations. Kannur is home to a plethora of places to visit starting from being a spiritual getaway hub, adventure-filled trekking trips, thrilling experiences for kids, and idyllic relaxed nature tours.The age-old forts and museums will be perfect destinations for architecture buffs while the shopping markets at the fort road will quench the thirst of all shopaholics. Moreover, the scenic parks will tranquillize your senses, and the secluded beaches located far from the chaotic city life will give you a sense of relaxation.Head out on this serene and sublime tour of Kannur with your loved ones to gather some priced memoirs that will be cherished all through your life.  Check out this list of some well-curated places to visit in Kannur and plan for some amazing days in God's own country, Kerala."
  },{
    "title": "KOTTAYAM",
    "image1": "https://lh3.googleusercontent.com/p/AF1QipN0t7pcFlR7YiEaQhX_ve747ltmnUgf43kcy2Sv=s1360-w1360-h1020",
    "image2": "https://www.keralatourism.org/images/enchanting_kerala/large/illickal_kallu20220103142808_1152_1.jpg",
    "image3": "https://upload.wikimedia.org/wikipedia/commons/1/1f/St_Mary%2C%27s_Orthodox_church_%2C_Kottayam_%28cheriya_palli%29.jpg",
    "description": "Whether travelling with family members, friends, alone or even with colleagues, Kottayam in Kerala will keep you engrossed in unlimited fun and excitement. Located in the south-central part of Kerala, this quaint city is amongst the most beautiful places to visit in the God's Own Country.For the history lovers, they can satiate all their yearnings with a cultural tour to the many different religious and cultural sites across the city. The nature lovers can easily find solace visiting the waterfalls, Wagamon, Kumily and several other places. Other places to visit in Kottayam include the silent Pallam Backwaters, Marmala, Vennimala or the Hill of victory and the quaint Kallara town are also amongst the must visit places in Kottayam. Above all, if you want to explore and witness the authenticity of true Kerala, a visit to Kudamallor village is a must for you!"
  },{
    "title": "IDUKKI",
    "image1": "https://keralatourism.travel/images/destinations/places-to-visit/idukki/munnar-idukki-kerala-tourism-entry-fee-timings-holidays-reviews-small.jpg",
    "image2": "https://experiencekerala.in/image-uploads/1467960655.Anamudi-Peak.jpg",
    "image3": "https://static2.tripoto.com/media/filter/tst/img/OgData/1550562972_idu_min.png",
    "description": "To the humankind lost in the concrete jungle, Idukki tourist places acquaints them with the splendor of nature and God’s magnificent creation. Idukki, one of the quaintest districts of Kerala, is home to a number of prominent tourist places.The district, which lies in the Western Ghats of Kerala, is topographically known for its rocky terrain and varied verdant vegetation. Places in Idukki is full of cliffs, lush greenery, lagoons, tranquil rivers and cascading waterfalls that hypnotize the tourists and leave them with everlasting memories. Having names of Painavu, arch dam, poonchira, Idukki shows a variety in its attractions. The 3 rivers Thodupuzhayar, Periyar, and Thalaya along with their tributaries keep Idukki evergreen. They are not only a source for irrigation and power generation but also a place for the existence of diverse flora and fauna that add charm to the Idukki. The places to visit in Idukki range from popular hill stations, Wildlife Sanctuaries, to majestic waterfalls, dams, and not to forget, the historical places."
  },{
    "title": "WAYANAD",
    "image1": "https://www.clubmahindra.com/blog/media/section_images/shuttersto-3740a7d7996d4a0.jpg",
    "image2": "https://www.ekeralatourism.net/wp-content/uploads/2018/08/wayanad.jpg",
    "image3": "https://livekerala.com/blog/wp-content/uploads/2020/03/wayanad-4769648_1920.jpg",
    "description": "Banasura Sagar Dam, Chembra Peak, Kuruva Island, Edakkal Caves, Chain Tree, Pookode Lake, Tholpetty Wildlife Sanctuary, The Bamboo Factory, Wayanad Wildlife Sanctuary, Soochipara Falls, Phantom Rock, Neelimala View Point and many more.While a lot of you are searching for places to visit in Wayanad, let’s make this easier for you with our amazing list. Loaded with charming waterfalls, caves, resorts, and homestays, this prominent town is renowned for its zest ranches and natural life. Among the prettiest territories of Kerala, Wayanad has a large number of alternatives for its guests.Wayanad is situated on the fringe of Tamil Nadu and Kerala. The whole area is totally green with sloping reaches and natural life incorporating Tholpetty in the North, Muthanga in the east circumscribing with Tamil Nadu, Kalpetta in the south, Mananthvadi in the north-west and Sultan Bathery (Sultan Battery) in the east. In the east one can find the Wayanad Wildlife Sanctuary which is a rich, forested locale with regions of high elevation, home to creatures including Asiatic elephants, tigers, panthers, and egrets. In the Ambukuthi Hills toward the south, one can find beautiful Wayanad attractions like Edakkal Caves which contain antiquated petroglyphs, some going back to the Neolithic age."
  },{
    "title": "KOLLAM",
    "image1": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
    "image2": "https://www.trawell.in/admin/images/upload/148645674ThirumullavaramBeach_Main.jpg",
    "image3": "https://media1.thrillophilia.com/filestore/zs3yxezp69plr7invub9qj33heo2_1584705313_shutterstock_726107248.jpg?w=753&h=450&dpr=1.0",
    "description": "Ashtamudi Lake, Thangassery lighthouse, Kollam Beach, Thirumullavaram Beach, Kollam Adventure Park, Anandavalleswaram Temple, Sri Mahaganapathi Temple, Kumbhavurutty Waterfalls, Palaruvi Falls, Thevally Palace and many more.The spectacular places to see in Kollam are so diverse that it’s arduous to explore all at one go. Adored with sea, lakes, plains, mountains, rivers, backwaters, forest, vast green fields, etc this city has been on the route map for a breath-easy vacation. Kollam is a place that will fascinate you with its picturesque beauty, spectacular landscape,  culture and tradition.Travel the utopian stretches of cashew and spices plantation in Kollam or visit the biggest seaport of Kollam, Neendakara Port where you can experience fishing.  For sunsets and cruising, head to Ashtamudi lake. Ashtamudi Lake houses this beautiful city on its bank, and it is the starting point for most of the tourists. If the thrill is what entices you, then set out for Thangassery LightHouse to experience scuba diving and surfing. Talking about the undiscovered city, here is the list of places you can visit in Kollam"
  },{
    "title": "KASARGOD",
    "image1": "https://media1.thrillophilia.com/filestore/iu79udtdy63d7kkbi25r56oojnml_1552979160_bekal_fort.jpg?w=753&h=450&dpr=1.0",
    "image2": "https://media1.thrillophilia.com/filestore/k2ineyw3bbxxfut81o9qj61aqnzc_1552978939_parappa.png?w=753&h=450&dpr=1.0",
    "image3": "https://media1.thrillophilia.com/filestore/ft94bhfc16o9ww9lc7wthu0jtmoi_1552979567_ranipuram_hills.png?w=753&h=450&dpr=1.0",
    "description": "Off the radar for commoners and the land of exquisite folk art, tourist places in Kasaragod are reserved for hardcore and offbeat travelers in troops, pair or alone any time of the day and year. Early morning while your vision is still hazy your ears will automatically attune to the blissful soundscape.Hosting numerous forts, wildlife sanctuaries, temple protected by a ‘croc’ - say the locals and magnificent hills, Kasaragod is uptown in all aspects. The ultimate traveling destination, has it all to enchant you. The natives are very friendly and the harmony between people of various religions is to be highlighted. A rare district in India housing seven languages and vivid appreciable cultures. Also, experience the Malabar coastal winds you have been reading about in Geography all this while. Get set to be awestruck and jaw dropped to find manmade and nature blend at its best at Kasaragod."
  },{
    "title": "KOZHIKODE",
    "image1": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/d5/18/2b/psx-20170319-125048-largejpg.jpg",
    "image2": "https://www.tajhotels.com/content/dam/thrp/destinations/Kozhikode/16x7intro/Kozhikode-Intro-4X3.jpg",
    "image3": "http://www.trawell.in/admin/images/upload/148645569Kozhikode_Main.jpg",
    "description": "Kozhikode Beach, Mananchira, Kadalundi Bird Sanctuary, Valayanad Devi Temple, Thalikkunu Shiva Temple, Beypore Beach, Srikanteshwara Temple, Thusharagiri Fall, Kakkayam Dam & many more.Calicut, popularly known as Kozhikode among the locals is a place resplendent with natural beauty, pristine beaches, and historical monuments. This place offers tranquility and the best haven to take a break from a busy life and relax. There are waterfalls like Kakkadampoyil Waterfall and  Tusaragiri waterfalls and also some religious places like Tali Temple, Valayanad Devi Temple.Beautiful beaches like Kappad, Beypore, and Kozhikode are perfect spots to spend your lazy days.  Today Kozhikode is the third- largest city of Kerala and draws tourists throughout the year due to its vast tourist attractions and pleasant weather. The city is an idyllic place lying between the vast expanse of Arabian Sea on the west and the peaks of Wayanad hill on the east. With so many places to see in Kozhikode, a visit to this famous city is always a memorable one. Good food, friendly people, and above all a great place to explore and enjoy make Kozhikode one of the best tourist destinations of Kerala."
  },{
    "title": "PATHANAMTHITTA",
    "image1": "https://trip2kerala.com/wp-content/uploads/2021/11/Konni-Pathanamthitta-Eco-Tourisum.jpg",
    "image2": "https://assets-news.housing.com/news/wp-content/uploads/2022/09/07010326/Pathanamthitta-FEATURE-compressed.jpg",
    "image3": "https://www.ekeralatourism.net/wp-content/uploads/2018/01/Sabarimala-Sastha-Temple-at-Pathanamthitta.jpg",
    "description": "A natural waterfall with captivating surroundings is situated on the banks of the River Pamba. The fall is 60 to 100 ft deep which pours down on a rocky bed. The place is a favourite picnic spot among locals as well as tourists.One of the most beautiful places in India, Gavi is a small village tucked between tea estates and wide and dense forests. A unique project in itself, the place is a model of eco-tourism site bringing to the world its spellbinding abundance in flora and fauna. Gavi is situated some 14 km away from the famed Periyar Tiger Reserve and is heaven on Earth, quite literally.This ambitious eco-tourism project of the Kerala Forest Development Corporation, Gavi has caught the eye of the world for its excellent model and use of local people for conservation & tourism."
  },{
    "title": "PALAKKAD",
    "image1": "https://media2.thrillophilia.com/images/photos/000/145/986/original/1550583414_2019-02-19.png?w=753&h=450&dpr=1.0",
    "image2": "https://media2.thrillophilia.com/images/photos/000/145/975/original/1550578738_bkg3.jpg?w=753&h=450&dpr=1.0",
    "image3": "https://media2.thrillophilia.com/images/photos/000/145/957/original/1550575075_Vadakkunnathan_Temple_west_nada_-_0204.JPG?w=753&h=450&dpr=1.0",
    "description": "Ottapalam, Parambikulam Wildlife Sanctuary, Vadakkanthara Temple, Palakkad Fort,  Kanjirapuzha, Dhoni Waterfalls, Malampuzha Garden, Malampuzha Dam, Meenvallam Waterfalls, Jain Temple, Thiruvalathur Randu Moorthy Temple, Rock Garden, and many more.Situated in the foothills of Nilgiri, tourist places to visit in palakkad are filled with ancient architectures and natural wonders. Whether you are looking to spend some time alone, with friends or with family, this place offers you ample options to choose from and have the time of your life. From seeking blessings at the Jain temple of Jainimedu to wandering within the exotic wildlife of Silent valley National Park, it would not be wrong to say that there are many amazing places to visit in Palakkad.Apart from historical structures and natural beauty, Palakkad has so much for your little ones too. If planning a family trip, places like Fantasy Park and Meenkara Dam will surely offer you a day filled with fun and enjoyment.If you are a nature lover and want to make the most of the beauty of the wilds, then a trip to Ottapalam and Meenvallam Waterfalls should be a big yes. Located at the Western Ghats these are among one of the best tourist places in Palakkad. So pack your bags and get your itinerary ready as below we provide you with a list of sites which you mustn't miss when in Palakkad."
  },{
    "title": "ALAPPUZHA",
    "image1": "https://www.adotrip.com/public/images/city/master_images/5e4100ef0125d-Allepey_Travel_Plan.jpg",
    "image2": "https://www.keralam.me/wp-content/uploads/2019/03/alleppeyPlaces_.jpg",
    "image3": "https://s1.1zoom.me/b4845/607/India_Rivers_Riverboat_Boats_Alappuzha_Kerala_527749_1366x768.jpg",
    "description": "Places to visit in Alleppey: Kumarakom Bird Sanctuary, Vembanad Lake, Mannarasala Temple, Ambalapuzha Temple, St. Andrew's Forane Church, Pathiramanal, Pandavan Rock, Edathua Church, etc.There is a diversity among the many places to visit in Alleppey, from the rewarding sight of the sea to the wriggling inlets of backwaters and jungle streams- No wonder Alleppey was called the “Venice of the east” by Lord Curzon. The concept of houseboats which is locally called Kettuvallam in Malayalam is a primitive practice in Kerala. Located around 53 kilometers from Cochin, the town is celebrated for its backwaters which connect Cochin and Kumarakom to the North. Besides backwaters and the sea, Alleppey is also famous for its ageless temples, serpentine canals draining into the ocean, colorful lagoons, rice paddies, and a 150-year old lighthouse.  While you are soaking up the laid-back coastal bliss, do try to visit the famous Andhakaranazhi Beach- the beauty gets amplified during sunset hours. The floating ground to the crowd-pulling houseboats is none other than the longest lake in India- Vembanad lake. The tour of Vembanad lake is mostly coupled with Pallippuram island which is a picturesque petite land in the middle of the lake. Alleppey is just more than backwaters and the beaches, it has a history that is worth learning about. A trip to this coastal paradise is total bliss."
  },{
    "title": "MALAPPURAM",
    "image1": "https://media1.thrillophilia.com/filestore/8cp8le5y8qgc6aag88qvccuxgdjf_1550844102_640px-Arimbra-Mala-Kondotty.jpg.jpg?w=753&h=450&dpr=1.0",
    "image2": "https://media1.thrillophilia.com/filestore/huzmdij8qztdikdg80sqf8okkznh_1551071670_ef7aac186f0c55c85300661e2fe1859a.jpg.jpg?w=753&h=450&dpr=1.0",
    "image3": "https://lh3.googleusercontent.com/p/AF1QipNvlvBdCa_3_vNPdTMt4bxJpp3rLe3yAixRgwjg=s1360-w1360-h1020",
    "description": "Best of Malappuram tourist places include names of Kottakkunnu, Kadalundi Bird Sanctuary, Keralam Kundu Waterfalls, Nedumkayam, Arimbra Hills, Adyanpara Waterfalls, and many others to explore. There are a number of elements that make up the city of Malappuram a favorite among tourists.Apart from being a beautiful green addition on the map of God’s Own Country, Malapuram is a city that has seen an extensive history in the past and has developed through it.Be it the forest ranges of the city with coconut plantations, the river belt of Bharathapuzha, rainforests of Nedumkayam, the beauty of the river Challiyar, birds in Purathur, or the festive mood of the entire city throughout the year. Malappuram is the perfect example of a wholesome treat and retreat for everyone who comes here to explore. Here is a detailed guide of all the best places to visit in Malappuram."
  },{
    "title": "THRISSUR",
    "image1": "https://media1.thrillophilia.com/filestore/ximvjyixg08zcw33qh6p7v4xcksp_1550746491_Thrissur-Sri-Vadakkumnathan-Mahadevar-Shiva-Temple3.jpg.jpg?w=753&h=450&dpr=1.0",
    "image2": "https://media1.thrillophilia.com/filestore/jz07rc2gwyu6rzrxvvvogckk0xuc_1550744385_1200px-Sakthan_Thampuran_palace.jpg.jpg?w=753&h=450&dpr=1.0",
    "image3": "https://media1.thrillophilia.com/filestore/581lldglcm3t32gkcdhvfkbzsn0m_1550746600_1631-guruvayur-temple-kerala.jpg.jpg?w=753&h=450&dpr=1.0",
    "description": "Vadakkunnathan Temple, Dolours Basilica, Shakthan Thampuran Palace, Paramekkavu Bhagavathy Temple, Vilangan Kunnu, Guruvayur Sree Krishna Temple, Punnathur Kotta, Nehru Park, Athirappilly Waterfalls, Kerala Kalamandalam and many more.The best of Thrissur tourist places include the name of attractions like Dolours Basilica, Athirappilly Waterfalls, Vilangan Kunnu, Punnathur Kotta, Shakthan Thampuran Palace, and Thrissur Zoo and State Museum. A religious town in the state of Kerala, Thrissur is very well known for the many religious sites, temples, spiritual centres, and colourful celebrations during the festival season.Built around a small hillock that spreads for about 65 acres called the Thekkinkadu Maidan, it can be said that the city is also built around the famous Vadakkumnathan temple, located on the hillock. This small city is known to be the cultural capital of Kerala, which is pretty evident in almost all of these interesting and amazing places to visit in Thrissur.Apart from the religious side of the town, there are also a number of beaches, hillocks, forests, and waterfalls are wait for you when you arrive here. Take a look at this guide to know where to go on your trip to Thrissur in God’s Own Country, Kerala."
  }]
  
}
