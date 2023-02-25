import { PartialType } from '@nestjs/mapped-types';
import { CreateZjwDto } from './create-zjw.dto';

export class UpdateZjwDto extends PartialType(CreateZjwDto) {}
