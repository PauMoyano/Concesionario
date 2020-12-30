
//CLASES
 class Concesionario {
    constructor(stock){
        this.stock=stock;
    }
    loguearVehiculos(){
        this.stock.forEach(vehiculo=>{
            if(vehiculo.puertas){
                console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas: ${vehiculo.puertas} // Precio: ${vehiculo.precio}`)
            } else {
                console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Cilindrada: ${vehiculo.cilindrada} // Precio: ${vehiculo.precio}`)
            }
            })
            console.log('=============================');
    }
    filters(){
        let max=0;
        let min=10000000;
        let objMax={};
        let objMin={};
        let objModelo={};
        this.stock.forEach(vehiculo => {
            if (vehiculo.modelo.indexOf('Y')!== -1){
                objModelo=vehiculo;
            }
            if (vehiculo.precio > max){
                max=vehiculo.precio;
                objMax=vehiculo;
            }else if (vehiculo.precio < min){
                min=vehiculo.precio;
                objMin=vehiculo;
            }
        });
        console.log(`Vehículo más caro: ${objMax.marca} ${objMax.modelo}`);
        console.log(`Vehículo más barato: ${objMin.marca} ${objMin.modelo}`);
        console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${objModelo.marca} ${objModelo.modelo} $${objModelo.precio.toFixed(2)}`);
        console.log('=============================');
    }
    order(){
        
       var array = this.stock.sort(function (a, b) {
        if (a.precio > b.precio) {
          return -1;
        }
        if (a.precio < b.precio) {
          return 1;
        }
        
        return 0;
      });
        console.log('Vehículos ordenados por precio de mayor a menor:')
        array.forEach(element => {
            console.log(`${element.marca} ${element.modelo}`)
        });
    }
}
class Vehiculo{
     constructor(marca,modelo,precio){
         this.marca = marca;
         this.modelo = modelo;
         this.precio = precio;
     }
}

class Auto extends Vehiculo {
    constructor(marca,modelo,precio,puertas){
        super(marca,modelo,precio);
        this.puertas = puertas;
    }
}

class Motocicleta extends Vehiculo {
    constructor(marca,modelo,precio,cilindrada){
        super(marca,modelo,precio);
        this.cilindrada = cilindrada;
    }
}

//DESARROLLO
 
var vehiculos = [['Peugeot', '206',200000.00, 4, 'auto' ],['Honda', 'Titan', 60000.00,'125cc','moto'],['Peugeot', '208',250000.00, 5,'auto'],['Yamaha', 'YBR', 80500.50,'160cc', 'moto']];
var concesionario=[];
//marca: Peugeot // modelo: 206 // precio: $200.000,00 // puertas: 4 
//Marca: Honda // Modelo: Titan // Cilindrada: 125cc // Precio: $60.000,00
//Marca: Peugeot // Modelo: 208  // Precio: $250.000,00 // Puertas: 5
//Marca: Yamaha // Modelo: YBR // Cilindrada: 160cc // Precio: $80.500,50


function carga(){

    vehiculos.forEach((vehiculo,index)=>{
        if (vehiculo[4]=== 'auto'){
                var dato = new Auto(vehiculo[0],vehiculo[1],vehiculo[2],vehiculo[3]);
                //console.log(dato) 

                concesionario.push(dato);
        }else {
                var dato = new Motocicleta(vehiculo[0],vehiculo[1],vehiculo[2],vehiculo[3]);
                //console.log(dato)
                concesionario.push(dato);
           
        }
        
    });
  //  console.log(concesionario)
}

carga();

let obj = new Concesionario(concesionario);
obj.loguearVehiculos();
obj.filters();
obj.order();





