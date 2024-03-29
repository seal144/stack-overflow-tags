export interface TagItem {
  name: string;
  count: number;
}

//TODO there are some other data, make sure that additional data are not needed
export interface TagsResponseData {
  items?: TagItem[];
  total: number;
}

export interface TagsStore {
  tags: TagItem[];
  page: number;
  totalPages: number;
  updateStore: (fetchedData: TagsResponseData, page: number, pageSize: number) => void;
}
