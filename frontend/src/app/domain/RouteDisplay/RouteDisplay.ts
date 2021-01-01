export class RouteDisplay
{
    private readonly  _id : number
    private readonly _displayName : string;
    private readonly _pathName : string;
    private _selected : boolean = false;

    constructor(id : number,  displayName: string, pathName: string, selected?: boolean)
    {
        this._id = id;
        this._displayName = displayName;
        this._pathName = pathName;
        this._selected = selected;
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

    get selected(): boolean
    {
        return this._selected;
    }

    set selected(selected: boolean)
    {
        this._selected = selected;
    }
}