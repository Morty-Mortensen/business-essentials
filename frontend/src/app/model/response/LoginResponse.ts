import {Response} from "./Response";

export class LoginResponse extends Response
{
    constructor(success : boolean, message? : string)
    {
        super(success, message);
    }
}