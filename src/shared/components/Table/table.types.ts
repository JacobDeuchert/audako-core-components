export type PageEvent = {
  pageIndex: number;
  pageSize: number;
}

export type Sort = {
  active: string;
  direction: 'asc' | 'desc';
} | null;