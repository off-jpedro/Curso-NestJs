import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Sensor } from './sensor';
import { SensorService } from './sensor.service';

@Controller('sensor')
export class SensorController {

    constructor(private sensorService : SensorService){

    }

    @Get("/listar")
    getListAll(): Sensor[]{
        return this.sensorService.listarSensores();
    }

    @Post("/inserir")
    postInsert(@Body() sensor: Sensor) {
        return this.sensorService.AddSensores(sensor);
    }

    @Patch("/atualizar/:id")
    patchUpdate(@Param('id') id: number, @Body() sensor: Sensor){
        return this.sensorService.UpdateSensores(id, sensor);
    }

    @Delete("/deletar/:id")
    getDelete(@Param('id') id: number){
        return this.sensorService.DeleteSensores(id);
    }
}
