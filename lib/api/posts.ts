import { ObjectId } from "mongodb";

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
  title: String;
  author: String;
  description: String;
  content: String;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      return { error: { message: String(response.status) } as Error };
    }
  } catch (error) {
    return error;
  }
};

export const updatePost = async (post: Post) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.title_slug}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    );
    if (!response.ok) {
      return { error: { message: String(response.status) } as Error };
    }
  } catch (error) {
    return error;
  }
};

export const deletePost = async (post: Post) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.title_slug}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      return { error: { message: String(response.status) } as Error };
    }
  } catch (error) {
    return error;
  }
};

export type Post = {
  _id: ObjectId;
  title: string;
  author: string;
  description: string;
  content: string;
  timestamp: Date;
  title_slug: string;
  lastUpdated?: Date;
};
