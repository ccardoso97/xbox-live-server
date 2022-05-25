import { Body, Controller, Get, Post, Param, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GenderService } from './gender.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@ApiTags('gender')
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos gêneros',
  })
  findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um gênero',
  })
  findOne(@Param('id') id: string): Promise<Gender> {
    return this.genderService.findOne(id);
  }


  @Post()
  @ApiOperation({
    summary: 'Adicionar um gênero',
  })
  create(@Body() dto: CreateGenderDto): Promise<Gender> {
    return this.genderService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um gênero pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGenderDto): Promise<Gender> {
    return this.genderService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um gênero pelo ID',
  })
  delete(@Param('id') id: string) {
    this.genderService.delete(id);
  }

}

