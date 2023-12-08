function Car(brand,model,speed,fuelType,fule){
   this.brand=brand,
   this.model=model,
   this.speed=speed,
   this.fuelType=fuelType
   this.fule=fule
}

function Cardetails(){
   console.log(`Brand:${this.brand}, Model:${this.model}, Fueltype:${this.fuelType},`)
}


function accelerate(){
  
   setInterval(() => {
      if(this.speed<=90){
         this.speed+=10;
         this.fule-=5;
         console.log(this.speed)
      }
    else{
      this.brake()
    }

    if(this.fule==0){
      console.log("Fuling");
      this.fule=100;
      setTimeout(() => {
         console.log("Fuling successfull")
      }, 2000);
    }
   }, 1500);

}


function brake(){
    this.speed=0;
}


Car.prototype.acceleration=accelerate;
Car.prototype.brake=brake;
Car.prototype.cardetails=Cardetails;
 // in avobe i add 3 prortype to main car constructor function  when we need we use 

let f=new Car("Tata","Safari",0,"Diesel",100);  // passing arguments to car constructor

f.cardetails() // print car details like brand info fuletype info and model name

