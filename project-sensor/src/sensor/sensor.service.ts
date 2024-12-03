import { Injectable } from '@nestjs/common';
import { Sensor } from './sensor';

@Injectable()
export class SensorService {
    private listaDeSensores : Sensor[] = [];

constructor (){
    // Sensor 1
    let s1: Sensor = new Sensor();
    s1.id = 1;
    s1.nome = "Sensor 1";
    s1.tipo = "Temperatura";
    s1.localizacao = "Sala de estar";
    s1.data = new Date("2024-09-06");

    // Sensor 2
    let s2: Sensor = new Sensor();
    s2.id = 2;
    s2.nome = "Sensor 2";
    s2.tipo = "Umidade";
    s2.localizacao = "Cozinha";
    s2.data = new Date("2024-09-08");

    this.listaDeSensores.push(s1,s2);
}

  listarSensores(): Sensor[]{
    return this.listaDeSensores;
  }

  AddSensores(sensor : Sensor){
    return this.listaDeSensores.push(sensor);
  }

  UpdateSensores(id : number, sensor: Sensor) {
    if(id != null && id !== 0){
      const index = this.listaDeSensores.findIndex(s => s.id = id);
     return this.listaDeSensores[index] = sensor;
    }
    return console.log(`Sensor com ID ${id} não encontrado.`);
  }

  DeleteSensores(id : number){
    if(id != null && id !== 0){
      const index = this.listaDeSensores.findIndex(s => s.id = id);
      return this.listaDeSensores.splice(index, 1);
    }
    return console.log(`Sensor com ID ${id} não encontrado.`);

  }
}
