import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator';

import { AccessType, Category } from "../models/category.models";

export interface CrateCategoryDto extends Omit<Category, 'id'> {}
export class CrateCategoryDto implements CrateCategoryDto {
    @IsNotEmpty()
    @Length(4, 140)
    name!: string;
    @IsUrl()
    @IsNotEmpty()
    image!: string;
    @IsOptional()
    @IsNotEmpty()
    @IsEnum(AccessType)
    access?: AccessType;
}

(async () => {
    try{
        const dto = new CrateCategoryDto();
        dto.name = 'test';
        dto.image = 'https://www.google.com';
        await validateOrReject(dto);
    }catch(error){
        console.log(error);
    }
})();