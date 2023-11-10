import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "../entities/product.entity";
import {Repository} from "typeorm";
import {CreateProductDto} from "../create-product.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        try {
            const newProduct = this.productRepository.create(createProductDto);
            await this.productRepository.save(newProduct);
            return newProduct;
        } catch (error) {
            throw new HttpException('Cannot save product', HttpStatus.BAD_REQUEST);
        }
    }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }
}
