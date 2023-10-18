import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className=" flex w-full items-center justify-center mt-60 gap-9">
        <h1 className="text-2xl font-bold">Welcome to next blog</h1>
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
