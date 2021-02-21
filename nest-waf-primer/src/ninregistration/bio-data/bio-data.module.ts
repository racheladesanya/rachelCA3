import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BioDatum } from './entities/bio-datum.entity';
import { BioDataController } from './bio-data.controller';
import { BioDataService } from './bio-data.service';


@Module({
imports: [TypeOrmModule.forFeature([BioDatum])],
controllers: [BioDataController],
providers: [BioDataService]
})
export class BioDataModule {}