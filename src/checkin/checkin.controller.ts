import { Controller, Get, Param } from '@nestjs/common';
import { CheckinService } from './checkin.service';

import { CheckInEntity } from './dto/checkin.entity';

@Controller('checkin')
export class CheckinController {
  constructor(private readonly checkinService: CheckinService) {}

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return id;
  }

  @Get('arenas')
  getArenas(@Param('id') id: string): CheckInEntity[] {
    return this.checkinService.getArenas();
  }
}
