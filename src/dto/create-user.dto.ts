import { IsAlpha, IsAlphanumeric, IsDate, IsEmail, IsHash, IsInt, IsNumber, IsNumberString, IsPhoneNumber, IsString, IS_HASH } from "class-validator"


export class CreateUserDto{
    @IsAlpha()
    firstname: string

    @IsAlpha()
    lastname: string;

    @IsEmail()
    email: string

    @IsNumberString()
    phone: number

    @IsString()
    hash: string

    @IsDate()
    dob: Date

    @IsAlphanumeric()
    address: string

    @IsInt()
    typeId: number

    @IsInt()
    churchId: number
}