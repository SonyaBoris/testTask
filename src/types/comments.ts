export type Comment = {
  id: number;
  name: string;
  location: string,
  comment: string
}

export type CommentsState = {
  comments: Comment[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}