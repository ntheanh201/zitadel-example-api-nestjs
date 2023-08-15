import { Controller, Get } from '@nestjs/common';
import { ValidatorService } from './validator.service';

@Controller()
export class AuthController {
  constructor(private readonly validatorService: ValidatorService) {}

  @Get('/auth')
  getHello(): string {
    return this.validatorService.getHello();
  }
}
