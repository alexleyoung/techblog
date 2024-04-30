import CreateForm from "@/components/admin/CreatePost/CreatePost";
import { Button } from "@/components/ui/button";

const Create = async () => {
  return (
    <main className='p-8'>
      <h1 className='text-2xl tracking-wide mb-8'>Post</h1>
      <CreateForm titleText='Make a New Post'>
        <Button type='submit'>Create Post</Button>
      </CreateForm>
    </main>
  );
};

export default Create;
