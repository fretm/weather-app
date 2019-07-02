
class Weather{
    //intalization(set parameter value )
    constructor(lowtemp,hightemp,city,country){
        this.lowtemp = lowtemp ;
        this.hightemp = hightemp;
        this.city = city ;
        this.country = country ;

    }
    // alert user weather 
     alert_user(){
          if (this.lowtemp <= 50) {
             return "temprature is above 50 its very hot out side your current temprature is "
                  +this.lowtemp
                  +this.hightemp + 'temprature is above 50'+this.lowtemp +hightemp;
            }
           else if (this.hightemp <= 10){
             return "temprature outside is below 10 its very cokd outside your current temprature is  " 
                +this.hightemp +this.lowtemp +"temprature out side is bellow 10  celsius " +this.higetemp + this.lowtemp;
        }
        else {
             return "High Temp "+ this.hightemp + " Low Temp " + this.lowtemp;
            }

    }

    //notify user weather =
       notify_user(){
        if (this.lowtemp <28){
          return "its very cold day !!!"+ this.lowtemp + "in " + this.city +this.county +"is  15 celsius"+
            "its very cold today "+this.lowtemp +"in "+""  +this.city +","+ this.country + "is 35 celsius";
        }
        else  if(this.hightemp>40){
          return "it's very hot today !!! " + this.hightemp +this.city +"" +this.country + "is" +55
             +"it's very hot today"+ this.hightemp + "in " + this.city + ""+this.coountry +"is 55 cels";
              }
        else 
        {
   
           return "its beautiful day"+this.hightemp + "in" + this.city+this.country + " is 35";
          }
        }
      }


(Weather1= new Weather(90,1,"boston", "massachuset"));
console.log(Weather1.notify_user());
console.log(Weather1.alert_user());
