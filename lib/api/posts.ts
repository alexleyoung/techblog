export const getPosts = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/`);
  const posts = await result.json();
  return posts as Post[];
};
export const getPost = async (title_slug: string) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${title_slug}`
    );
    if (!result.ok) {
      return { data: null, error: { message: String(result.status) } as Error };
    }
    const data = await result.json();
    return { data: data as Post, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
};

export const createPost = async (post: {
  title: string;
  author: string;
  content: string;
}) => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    return error;
  }
};

export const updatePost = async (post: Post) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.title_slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};

export const deletePost = async (post: Post) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.title_slug}`, {
    method: "DELETE",
  });
};

export type Post = {
  _id: string;
  id: Number;
  title: String;
  title_slug: String;
  author: String;
  content: String;
  timestamp: Date;
};
