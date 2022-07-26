import { ServisesService } from 'src/servises/servises.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  providers: [ServisesService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
})
export class ProductsModule {}
