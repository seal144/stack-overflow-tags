import { create } from 'zustand';
import { TagsStore, TagsResponseData } from '../types';

const useTagsStore = create<TagsStore>()((set) => ({
  tags: [],
  totalPages: 1,
  updateStore: (fetchedData: TagsResponseData, page: number, pageSize: number) =>
    set(() => ({
      tags: fetchedData.items,
      totalPages: Math.ceil(fetchedData.total / pageSize),
    })),
}));

export default useTagsStore;
