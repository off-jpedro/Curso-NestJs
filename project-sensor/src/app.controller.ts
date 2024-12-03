import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Sensor } from './sensor/sensor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
