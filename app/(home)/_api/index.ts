interface LeafResponse {
  id: string;
  title: string;
  from: string;
  content: string;
}

export const getLeafs = async (): Promise<LeafResponse[]> => {
  const mokData = [
    {
      id: "1",
      title: "풀잎이1",
      from: "성용",
      content:
        "안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n안녕하세요 저는 하하하하\n",
    },
    {
      id: "2",
      title: "풀잎이2",
      from: "성용",
      content: "안녕하세요 저는 하하하하",
    },
    {
      id: "3",
      title: "풀잎이3",
      from: "성용",
      content: "안녕하세요 저는 하하하하",
    },
    {
      id: "4",
      title: "풀잎이4",
      from: "성용",
      content: "안녕하세요 저는 하하하하",
    },
  ];
  return mokData;
};