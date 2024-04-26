import { getPosts } from "@/lib/api/crud";

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post) => {
        return (
          <div
            key={String(post.id)}
            className='border border-muted p-6 rounded-2xl min-h-32 hover:scale-[102%] transition-all'>
            <h2 className='text-2xl'>{post.title}</h2>
            <p className='text-primary'>
              {String(post.timestamp).slice(0, 10)}
            </p>
            <p>{post.content.slice(0, 30) + "..."}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
