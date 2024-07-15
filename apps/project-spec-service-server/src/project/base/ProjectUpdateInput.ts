/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { Type } from "class-transformer";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { FreelanceSiteWhereUniqueInput } from "../../freelanceSite/base/FreelanceSiteWhereUniqueInput";

@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  techStack?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;

  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FreelanceSiteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FreelanceSiteWhereUniqueInput)
  @IsOptional()
  @Field(() => FreelanceSiteWhereUniqueInput, {
    nullable: true,
  })
  freelanceSite?: FreelanceSiteWhereUniqueInput | null;
}

export { ProjectUpdateInput as ProjectUpdateInput };
