export class ColumnFilter {
  private _id: string;
  private _colClass: string;
  private _title: string;
  private _visible: boolean;
  private _sortColumn: string;

  constructor(id: string, colClass: string, title: string, visible: boolean, sortColumn?: string) {
    this._id = id;
    this._colClass = colClass;
    this._title = title;
    this._visible = visible;
    if (sortColumn) {
      this._sortColumn = sortColumn;
    }
  }

  get id(): string {
    return this._id;
  }

  get colclass(): string {
    return this._colClass;
  }

  get title(): string {
    return this._title;
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }

  get sortColumn(): string {
    return this._sortColumn;
  }

  set sortColumn(value: string) {
    this._sortColumn = value;
  }
}
