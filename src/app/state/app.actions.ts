export class SetSearch {
  static readonly type = '[AppState] Set Search string';
  constructor(public searchString: string) {}
}
