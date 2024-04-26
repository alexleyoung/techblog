import { getPosts } from "@/lib/api/crud";
import Post from "@/components/admin/Post";

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default PostList;
