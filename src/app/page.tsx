import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import Login  from "@/components/Login"



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
        <div id="loginContainer" className="md:pt-48 w-[90%] mx-auto flex flex-wrap place-content-center">
          <Login />
        </div>
        <Footer />
      </div>
  );
};

export default Page;
