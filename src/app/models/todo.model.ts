export class Todo {
  constructor(
    private _description: String,
    private _status: Boolean,
    private _imageLink: String
  ) {}

  public get description(): String {
    return this._description;
  }

  public set description(description: String) {
    this._description = description;
  }

  public get imageLink(): String {
    return this._imageLink;
  }

  public set imageLink(imageLink: String) {
    this._imageLink = imageLink;
  }

  public get status(): Boolean {
    return this._status;
  }

  public set status(status: Boolean) {
    this._status = status;
  }
}
