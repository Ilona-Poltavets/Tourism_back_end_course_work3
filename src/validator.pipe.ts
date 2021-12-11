import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {validate} from "class-validator";
import {plainToClass} from "class-transformer";

@Injectable()
export class ValidatorPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        const {metatype} = metadata;
        const obj = plainToClass(metatype, value);
        const errors = await validate(obj);
        if (errors.length > 0) {
            let errorOutput = errors.map(
                error => {
                    for (let key in error.constraints) {
                        return error.constraints[key];
                    }
                }
            ).join("; ");
            throw new BadRequestException(errorOutput);
        }
        return value;
    }
}
