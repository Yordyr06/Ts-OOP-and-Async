import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator'
import { AccessType, Category } from "../models/category.model";

export interface CreateCategoryDTO extends Omit<Category, 'id'> {  }
export class CreateCategoryDTO implements CreateCategoryDTO {
  @IsNotEmpty()
  @Length(4, 10)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;
  
  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDTO();
    dto.name = '';
    await validateOrReject(dto)
  } catch (error) {
    console.log(error)
  }
})()

