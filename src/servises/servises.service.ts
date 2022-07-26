import { ProductDocument } from './../products/schemas/product.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { Product } from 'src/products/schemas/product.schema';

@Injectable()
export class ServisesService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById({ id });
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(productDto);
    return newProduct.save();
  }

  async delete(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id);
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, productDto: CreateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
