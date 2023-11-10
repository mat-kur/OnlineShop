import {Controller, Post, UseInterceptors, UploadedFile, Body, Get} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './services/product.service';
import { CreateProductDto } from './create-product.dto';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import {Product} from "./entities/product.entity";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads/products-images', // ścieżka, gdzie obrazy będą zapisywane
            filename: (req, file, callback) => {
                const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
                const extension: string = path.parse(file.originalname).ext;
                callback(null, `${filename}${extension}`)
            }
        })
    }))

    async createProduct(
        @Body() createProductDto: CreateProductDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        if (file && file.filename) {
            createProductDto.image = file.filename;
        }
        return this.productService.create(createProductDto);
    }

    @Get()
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }
}
