import { ApiProperty } from '@nestjs/swagger';

export class UpdateGenderDto{
@ApiProperty({
  description: 'O nome do gênero',
  example: 'Frist Person Shooter (FPS)',
})
name: string;
}
