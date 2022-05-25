import { ApiProperty } from '@nestjs/swagger';

export class CreateGenderDto {
  @ApiProperty({
    description: 'O nome do gênero',
    example: 'Frist Person Shooter (FPS)',
  })
  name: string;
}
