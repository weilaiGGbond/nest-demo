import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';

@Module({
  providers: [DishesService],
  controllers: [DishesController]
})
export class DishesModule {}
