export class Article
{
    private readonly _id;
    private readonly _title;
    private readonly _subtitle;
    private readonly _imageRef;
    private readonly _body;
    private readonly _datetime;
    private readonly _category;
    private readonly _path;
    private readonly _author;
    private _selected;

    constructor(id, title, subtitle, imageRef, body, datetime, category, path, author, selected?)
    {
        this._id = id;
        this._title = title;
        this._subtitle = subtitle;
        this._imageRef = imageRef;
        this._body = body;
        this._datetime = datetime;
        this._category = category;
        this._path = path;
        this._selected = selected;
        this._author = author;
    }

    get id()
    {
        return this._id;
    }

    get title()
    {
        return this._title;
    }

    get subtitle()
    {
        return this._subtitle;
    }

    get imageRef()
    {
        return this._imageRef;
    }

    get body()
    {
        return this._body;
    }

    get datetime()
    {
        return this._datetime;
    }

    get category()
    {
        return this._category;
    }

    get path()
    {
        return this._path;
    }

    get selected()
    {
        return this._selected;
    }

    get author()
    {
        return this._author;
    }

    set selected(value)
    {
        this._selected = value;
    }
}