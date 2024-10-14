import { PartialType } from '@nestjs/swagger';
import { CreateOrederitemDto } from './create-orederitem.dto';

export class UpdateOrederitemDto extends PartialType(CreateOrederitemDto) {}
