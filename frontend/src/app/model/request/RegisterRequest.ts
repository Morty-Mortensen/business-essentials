export class RegisterRequest{



    public static FIRSTNAME : string = 'firstname';
    public static LASTNAME : string = 'lastname';
    public static IMAGEBASE64 : string = 'image';


    private readonly _firstname : string;
    private readonly _lastname : string;
    private readonly _imageBase64 : string;

    private readonly _username : string;
    private readonly _password : string;
    public static USERNAME : string = 'username';
    public static PASSWORD : string = 'password';

    constructor(username : string, password : string, firstname : string, lastname : string, imagebase64 : string ) {
        this._username = username;
        this._password = password;
        this._firstname = firstname;
        this._lastname = lastname;
        this._imageBase64 = imagebase64;
    }

    get username(): string
    {
        return this._username;
    }

    get password(): string
    {
        return this._password;
    }

    get lastname(): string {
        return this._lastname;
    }

    get firstname(): string {
        return this._firstname;
    }

    get imageBase64(): string {
        return this._imageBase64;
    }
}