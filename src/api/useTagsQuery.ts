import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useTagsStore from '../store/useTagsStore';
import { DefaultParams, Params, TagsResponseData } from '../types';

const useTagsQuery = () => {
  const [searchParams] = useSearchParams();
  const page = useMemo(() => {
    return searchParams.get(Params.Page) ? searchParams.get(Params.Page) : DefaultParams.Page;
  }, [searchParams]);
  const pageSize = useMemo(() => {
    return searchParams.get(Params.PageSize) ? searchParams.get(Params.PageSize) : DefaultParams.PageSize;
  }, [searchParams]);
  const sort = useMemo(() => {
    return searchParams.get(Params.Sort) ? searchParams.get(Params.Sort) : DefaultParams.Sort;
  }, [searchParams]);
  const order = useMemo(() => {
    return searchParams.get(Params.Order) ? searchParams.get(Params.Order) : DefaultParams.Order;
  }, [searchParams]);

  const { updateStore } = useTagsStore();

  const queryURL = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZJS`;
  const queryKey = [`tags-${page}-${pageSize}-${order}-${sort}`];

  const { data, isPending, error } = useQuery<TagsResponseData>({
    queryKey,
    queryFn: async () => {
      const res = await fetch(queryURL);

      if (res.status >= 400) {
        const errorBody = await res.json();
        console.error(errorBody);
        throw new Error(errorBody.error_message);
      }

      return await res.json();
    },
  });

  useEffect(() => {
    if (data?.items) {
      updateStore(data, Number(page), Number(pageSize));
    }
  }, [data, updateStore, page, pageSize]);

  return { isPending, error };
};

export default useTagsQuery;
