export default interface BlogData {
  posts: {
    slug: string;
    file: string;
    time: number;
    author: string;
    title: string;
  }[];
}
