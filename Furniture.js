class Furniture {
    constructor (price ,color ,type ,year,brand,weight,height, width){
        this.price = price;
        this.color = color;
        this.type = type;
        this.year = year ;
        this.brand = brand ;
        this.weight = weight;
        this.height = height;
        this.width = width;
    }
// write a method that give us the price.
    getprice(){
      return this.price;
    }

}

myfurn1 = new Furniture(20,"blue","office",1992,"bob furniture ", 70,12,17);
console.log(myfurn1.price);
console.log(myfurn1.getprice());
myfurn2 = new Furniture(45,"pink","living room", "fre fur ",99,34,67);
x = myfurn2.getprice()*0.1;
//console.log(myfurn2.getprice());
//console.log(x);
var b = (x+myfurn2.getprice());
console.log(myfurn2.type.toUpperCase() +" " +myfurn2.color +" "+ b);
//'living room pink 45'
//45 + 45 *10 /100
//BODMAS