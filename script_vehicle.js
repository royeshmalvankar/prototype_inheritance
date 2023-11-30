function Vehicle(brand,model,speed,fuel_type){
    this.Brand=brand;
    this.Model=model;
    this.Speed=speed;
    this.Fuel_Type=fuel_type;
}
let v = new Vehicle("Mercedes","b536d",100,"Diesel");
v=Object.create(v);
v.accelerate=function(sp){
    this.Speed+=sp;
}
v.brake=function(br){
    this.Speed-=br
}
v.refuel=function(){
    console.log("Is refueling");
}



function Car(nofv){
    this.numberOfWheels=nofv;
    this.Honk=function(){
        console.log("Honk Honk");
    }
}
let car = new Car(4)
Object.setPrototypeOf(car,v)

function Airplane(nofe){
    this.numberOfEngines=nofe;
    this.hasLandingGear=true
    this.takeOff= function(){
        console.log("Airplane is taking off");
    }
}
let airplane= new Airplane(8)
Object.setPrototypeOf(airplane,v)
console.log(v);
console.log(car);
console.log(airplane);

v.accelerate(40)
v.brake(10)
v.refuel()
console.log(v.Speed);

car.accelerate(40)
car.brake(10)
car.refuel()
car.Honk()
console.log(car.Speed);

airplane.accelerate(50)
airplane.brake(10)
airplane.refuel()
airplane.takeOff()
console.log(airplane.Speed);

