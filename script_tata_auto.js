function Tata_auto(ed,brake,engine,model,type,trm,flc,yrs,tq){
    this.Engine_Displacement= ed;
    this.Wheels= "Four wheeler";
    this.brake= brake;
    this.Engine= engine;
    this.Model= model;
    this.Type= type;
    this.Transmission= trm;
    this.Manufacture= "Tata Motors";
    this.Fuel_Capacity= flc;
    this.Year= yrs;
    this.Torque= tq;
}
let tata_v= new Tata_auto(1248,"abs","VGT Diesel Engine","Tata Vista","Diesel","Manual",44,2008,"260Nm@1500-2750rpm")

let tata_m=Object.create(tata_v);
tata_m.Engine="Safire Petrol Engine";
tata_m.Model="Tata Manza";
tata_m.Type="Petrol"
tata_m.Year=2009;
tata_m.Torque="116Nm@4750rpm"

let tata_z=Object.create(tata_m);
tata_z.Engine="Quadrajet Engine";
tata_z.Model="Tata Zest";
tata_z.Year=2014;
tata_z.Torque="200Nm@1750-3000rpm";

let tata_n=Object.create(tata_z);
tata_n.Engine_Displacement=1497;
tata_n.Engine="1.5L Turbocharged Revotorq";
tata_n.Model="Tata Nexon";
tata_n.Transmission="Automatic";
tata_n.Year=2017;
tata_n.Torque="260Nm@1500-2750rpm"


console.log(tata_n);