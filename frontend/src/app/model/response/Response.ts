export class Response
{
    protected _success : boolean;
    protected _message : string;

    constructor(success : boolean, message? : string)
    {
        this._success = false;
        if ( message !== undefined )
        {
            this._message = message;
        }
    }



    get success(): boolean {
        return this._success;
    }

    get message(): string {
        return this._message;
    }
}