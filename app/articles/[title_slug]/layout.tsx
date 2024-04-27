import Header from "@/components/landing/Header";

const ArticleOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className='w-4/5 lg:w-[50%] mx-auto'>{children}</main>
    </div>
  );
};

export default ArticleOverlay;
