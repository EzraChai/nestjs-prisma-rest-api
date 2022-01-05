import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private prismaService: PrismaService) {}

  @Get('products')
  findPublishedProducts() {
    return this.prismaService.product.findMany({
      where: { published: true },
    });
  }
}
