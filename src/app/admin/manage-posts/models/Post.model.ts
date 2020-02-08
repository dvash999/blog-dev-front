export interface Post {
  id: number;
  author: string;
  date: Date;
  title: string;
  content: string;
  likes: number;
  comments: number;
  type: 'deep-dive' | 'news';
  img: any;
}
