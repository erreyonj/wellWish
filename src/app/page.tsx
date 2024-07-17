import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SideBar from "@/components/SideBar";
import { wisp } from "@/lib/wisp";
// Stytch B2C Product
import { StytchProvider } from '@stytch/nextjs';
import { createStytchUIClient } from '@stytch/nextjs/ui';
// The headless client does not bundle UI elements, and is a much smaller package
import { createStytchHeadlessClient } from '@stytch/nextjs/headless';



const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />


      {/* <SideBar /> */}
      {/* <BlogPostsPreview posts={result.posts} /> */}
      {/* <BlogPostsPagination pagination={result.pagination} /> */}
      <Footer />
    </div>
  );
};

export default Page;
