import { IsEmail, IsString, } from "class-validator";

export class UpdateContactDto {
    @IsString()
    firstname: string;
    
    @IsString()
    lastname: string;
    
    @IsEmail()
    email: string;
}
