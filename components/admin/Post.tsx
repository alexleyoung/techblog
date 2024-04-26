import { Post } from "../../lib/api/crud";

const Post = ({ post }: { post: Post }) => {
  return (
    <div
      key={String(post.id)}
      className='border border-muted p-6 rounded-2xl min-h-32 hover:scale-[102%] hover:bg-muted transition-all duration-300'>
      <h2 className='text-2xl'>{post.title}</h2>
      <p className='text-primary'>{String(post.timestamp).slice(0, 10)}</p>
      <p>{post?.content.slice(0, 30) + "..."}</p>
    </div>
  );
};

export default Post;
