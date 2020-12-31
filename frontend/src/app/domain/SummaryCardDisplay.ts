export class SummaryCardDisplay
{
    private readonly _title : string;
    private readonly _subtitle : string;
    private readonly _image : string;
    private readonly _description : string;
    private readonly _link : string;

    constructor(title: string, subtitle: string, image: string, description: string, link : string)
    {
        this._title = title;
        this._subtitle = subtitle;
        this._image = image;
        this._description = description;
        this._link = link;
    }

    get title(): string
    {
        return this._title;
    }

    get subtitle(): string
    {
        return this._subtitle;
    }

    get image(): string
    {
        return this._image;
    }

    get description(): string
    {
        return this._description;
    }

    get link(): string
    {
        return this._link;
    }

}