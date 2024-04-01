export interface TagItem {
  name: string;
  count: number;
}

//TODO there are some other data, make sure that additional data are not needed
export interface TagsResponseData {
  items: TagItem[];
  total: number;
}

export interface TagsStore {
  tags: TagItem[];
  page: number;
  totalPages: number;
  updateStore: (fetchedData: TagsResponseData, page: number, pageSize: number) => void;
}

export enum Params {
  Page = 'page',
  PageSize = 'pagesize',
  Order = 'order',
  Sort = 'sort',
}

export enum SortParams {
  Popular = 'popular',
  Name = 'name',
}

export enum OrderParams {
  Asc = 'asc',
  Desc = 'desc',
}

export enum DefaultParams {
  Page = '1',
  PageSize = '30',
  Sort = 'popular',
  Order = 'desc',
}
