import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className=" flex flex-col w-full items-center justify-center mt-60 gap-9">
        <h1 className="text-2xl font-bold">Welcome to next blog</h1>
        <p>
          This is a free NextJS full stack application that you can use to
          create blogs based on different categories and also you can chat with
          others. This website is full of functionalities
        </p>
        <div className="">
          <Link
            className="rounded-md bg-primary py-4 px-8 font-semibold text-white text-xl hover:bg-primary/80"
            href={"/blogs"}
          >
            Explore all blogs
          </Link>
        </div>
        <Image
          className=""
          src={"https://cdn.mos.cms.futurecdn.net/WqzWxn2pBqvPN9n4DBrjr5.jpg"}
          width={500}
          height={500}
          alt="hehe"
        />
      </div>
    </>
  );
}
