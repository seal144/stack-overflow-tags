import { create } from 'zustand';
import { TagsStore, TagsResponseData } from '../types';

const useTagsStore = create<TagsStore>()((set) => ({
  tags: [],
  //TODO determine, if the page will be used, if not get rid of it
  page: 1,
  totalPages: 1,
  updateStore: (fetchedData: TagsResponseData, page: number, pageSize: number) =>
    set(() => ({
      tags: fetchedData.items,
      page,
      totalPages: Math.ceil(fetchedData.total / pageSize),
    })),
}));

export default useTagsStore;
