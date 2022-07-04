import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = ['PUBLIC', 'PRIVATE'];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUppercase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} 는 status 옵션이 아닙니다.`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
