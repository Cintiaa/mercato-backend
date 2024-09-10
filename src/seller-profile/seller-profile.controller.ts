import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellerProfileService } from './seller-profile.service';
import { CreateSellerProfileDto } from './dto/create-seller-profile.dto';
import { UpdateSellerProfileDto } from './dto/update-seller-profile.dto';

@Controller('seller-profile')
export class SellerProfileController {
  constructor(private readonly sellerProfileService: SellerProfileService) {}

  @Post()
  create(@Body() createSellerProfileDto: CreateSellerProfileDto) {
    return this.sellerProfileService.create(createSellerProfileDto);
  }

  @Get()
  findAll() {
    return this.sellerProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellerProfileDto: UpdateSellerProfileDto) {
    return this.sellerProfileService.update(+id, updateSellerProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerProfileService.remove(+id);
  }
}
