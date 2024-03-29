import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useTagsStore from '../store/useTagsStore';
import { TagsResponseData } from '../types';

const useTagsQuery = (page?: string | null, pageSize?: string | null) => {
  page = page ? page : '1';
  pageSize = pageSize ? pageSize : '30';
  const { updateStore } = useTagsStore();
  const queryURL = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=desc&sort=popular&site=stackoverflow&filter=!nNPvSNVZJS`;
  const queryKey = [`tags-${page}-${pageSize}`];

  const { data, isPending, error } = useQuery<TagsResponseData>({
    queryKey,
    queryFn: async () => {
      const res = await fetch(queryURL);

      return await res.json();
    },
  });

  useEffect(() => {
    if (data) {
      updateStore(data, Number(page), Number(pageSize));
    }
    //TODO here is possible bug, check if page and pageSize in deps array not causing strange behavior
  }, [data, updateStore, page, pageSize]);

  return { isPending, error };
};

export default useTagsQuery;
