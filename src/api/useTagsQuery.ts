import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useTagsStore from '../store/useTagsStore';
import { TagsResponseData, DefaultParams } from '../types';

const useTagsQuery = (page?: string | null, pageSize?: string | null, sort?: string | null, order?: string | null) => {
  page = page ? page : DefaultParams.Page;
  pageSize = pageSize ? pageSize : DefaultParams.PageSize;
  sort = sort ? sort : DefaultParams.Sort;
  order = order ? order : DefaultParams.Order;

  const { updateStore } = useTagsStore();

  const queryURL = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZJS`;
  const queryKey = [`tags-${page}-${pageSize}-${order}-${sort}`];

  const { data, isPending, error } = useQuery<TagsResponseData>({
    queryKey,
    queryFn: async () => {
      const res = await fetch(queryURL);

      return await res.json();
    },
  });

  useEffect(() => {
    if (data?.items) {
      //TODO delete later
      console.log(new Date());
      console.log(data);
      updateStore(data, Number(page), Number(pageSize));
    }
    //TODO here is possible bug, check if page and pageSize in deps array not causing strange behavior
  }, [data, updateStore, page, pageSize]);

  return { isPending, error };
};

export default useTagsQuery;
