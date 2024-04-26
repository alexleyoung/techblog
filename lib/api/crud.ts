export const getPosts = async () => {
  const result = await fetch("http://localhost:8081/posts");
  const posts = await result.json();
  return posts as Post[];
};
export const getPost = async (id: string) => {
  const result = await fetch(`http://localhost:8081/posts/${id}`);
  const data = await result.json();
  return data as Post;
};

export type Post = {
  id: Number;
  title: String;
  title_slug: String;
  author: String;
  content: String;
  timestamp: Date;
};
