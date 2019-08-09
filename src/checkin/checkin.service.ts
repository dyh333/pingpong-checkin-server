import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CheckInEntity } from './checkin/dto/checkin.entity';

@Injectable()
export class CheckinService {
  constructor(
    @InjectRepository(CheckInEntity) 
    private readonly repository: Repository<CheckInEntity>,
  ) {
  }

  async getCat(id: number): Promise<CheckInEntity[]> {
    return await this.repository.find({ id })
  }

  async getArenas(): Promise<CheckInEntity[]> {
    return await this.repository.find()
  }
}
