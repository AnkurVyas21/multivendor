import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-view-more',
  templateUrl: './categories-view-more.component.html',
  styleUrls: ['./categories-view-more.component.css']
})
export class CategoriesViewMoreComponent {
public   carCategories = [
  { category: "Sedan",            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfrT7CTCyXnkJ-q5x0fVktp1QgCy8ef_kng&s" },
  { category: "Coupe",            imageUrl: "https://i.pinimg.com/736x/e7/85/86/e785862c4ed9f1cc8d5fa58350d03266.jpg" },
  { category: "Cabriolet",        imageUrl: "https://png.pngtree.com/png-clipart/20250112/original/pngtree-amazing-car-open-door-car-png-image_20151777.png" },
  { category: "Hatchback",        imageUrl: "https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-red-hatchback-car-design-png-image_14712851.png" },
  { category: "SUV",              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6uAS794AVidtYiSkmWEJc3ttCYSb8c5Xtg&s" },
  { category: "Crossover",        imageUrl: "https://png.pngtree.com/png-vector/20241210/ourmid/pngtree-compact-white-crossover-car-with-a-glossy-finish-png-image_14654494.png" },
  { category: "Station Wagon",    imageUrl: "https://file.aiquickdraw.com/imgcompressed/img/compressed_68bea3cc89d573522a9d8ee37d84cbcf.webp" },
  { category: "Convertible",      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABCDtZWLhpoTTH4TH52vUjO1LDNZ-mmeEbvXYLIURX1YAqqQkHmEycBbrxxPA2nsnlnQ&usqp=CAU" },
  { category: "Minivan",    imageUrl: "https://png.pngtree.com/png-vector/20250115/ourmid/pngtree-red-minivan-parked-outside-isolated-on-transparent-background-png-image_15197232.png" },
  { category: "Pickup",     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW149leSNHz7xT17t2ySu8P0QtPWK-UVl0JZier1feb6A7C2S0SFVqxvHYP70JnsnI9xQ&usqp=CAU" },
  { category: "Roadster",         imageUrl: "https://www.pngall.com/wp-content/uploads/2/Convertible-Car-PNG-Image-File.png" },
  { category: "Van",              imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/050/733/370/small_2x/side-view-of-white-van-car-isolated-with-clipping-path-in-file-format-free-png.png" },
  { category: "Shooting Brake",   imageUrl: "https://www.pngmart.com/files/22/Volkswagen-Arteon-Shooting-Brake-PNG-Photo.png" },
  { category: "Coupe Utility", imageUrl: "https://purepng.com/public/uploads/large/51506280050fn8ner00ljvbrq2bky8a3svv1c4z5wzkg02sepro8gv67mh8mbatpk9skgwijrbzwyt8xxb43fbhfcyxzmzvagrypjh0slcgfu3f.png" },
  { category: "Fastback",         imageUrl: "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-ford-mustang-png-image_13249293.png" },
  { category: "Targa Top",        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEpoeb3qHQTc3o6kbqacZ9r2l9AuyNyhIg&s" },
  { category: "Buggy",            imageUrl: "https://png.pngtree.com/png-clipart/20240726/original/pngtree-atv-car-buggy-off-roads-png-image_15638022.png" },
  { category: "Panel Van",        imageUrl: "https://media.istockphoto.com/id/2149237608/photo/van-with-empty-side-space-for-design-transport-car-mock-up-delivery-van-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mPSRjRGuABnHIUBUUOP3JYQy2t6ebEtO9HYNuBPBp34=" },
  { category: "Supercar",        imageUrl: "https://img.freepik.com/free-photo/3d-car-with-simple-background_23-2150796882.jpg" },
  { category: "Campers",        imageUrl: "https://atlas-content-cdn.pixelsquid.com/stock-images/camper-recreational-vehicle-y1vqkl1-600.jpg" },
  { category: "Limousine",        imageUrl: "https://png.pngtree.com/png-clipart/20240316/original/pngtree-elegant-limousine-png-object-png-image_14597540.png" }
];




constructor(private route:Router) { }
searchCar(type:string)
  {
    this.route.navigate(['/search'],{queryParams:{type:type}})
  }
}
