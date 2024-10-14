import { PartialType } from '@nestjs/swagger';
import { CreateNeworderDto } from './create-neworder.dto';

export class UpdateNeworderDto extends PartialType(CreateNeworderDto) {}
