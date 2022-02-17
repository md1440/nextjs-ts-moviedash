/* eslint-disable @typescript-eslint/no-redeclare */
import { Dispatch, SetStateAction, useState } from 'react';

function useQuery(initialValue: string, urlKey: string): [string, string, Dispatch<SetStateAction<string>>] {
  const [data, setData] = useState(initialValue);
  return [data ? `${urlKey}${data}` : '', data, setData];
}

export default useQuery
