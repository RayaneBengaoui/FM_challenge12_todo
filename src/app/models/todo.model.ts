export class Todo {
  constructor(private _description: String, private _status: Boolean) {}

  public get description(): String {
    return this.description;
  }

  public set description(description: String) {
    this._description = description;
  }

  public get status(): Boolean {
    return this._status;
  }

  public set status(status: Boolean) {
    this._status = status;
  }
}
