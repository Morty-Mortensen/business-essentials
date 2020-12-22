export class RouteDisplay
{
    private readonly  _id : number
    private readonly _displayName : string;
    private readonly _pathName : string;

    constructor(id : number,  displayName: string, pathName: string)
    {
        this._id = id;
        this._displayName = displayName;
        this._pathName = pathName;
    }

    get id(): number
    {
        return this._id;
    }

    get displayName(): string
    {
        return this._displayName;
    }

    get pathName(): string
    {
        return this._pathName;
    }
}