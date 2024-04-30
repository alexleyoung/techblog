import CreateForm from "@/components/admin/Create/CreateForm";
import { Button } from "@/components/ui/button";

const Create = async () => {
  return (
    <main className='p-8'>
      <h1 className='text-2xl tracking-wide mb-8'>Create</h1>
      <CreateForm titleText='Make a New Post'>
        <Button type='submit'>Create Post</Button>
      </CreateForm>
    </main>
  );
};

export default Create;
