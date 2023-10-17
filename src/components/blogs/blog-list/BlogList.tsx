"use client";

import { Blog } from "@/utils/types";
import SingleBlog from "../single-blogs/SingleBlog";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogList({ lists }: { lists: Blog[] }) {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 grid grid-cols-3 gap-2">
          {lists && lists.length
            ? lists.map((listItem: Blog) => (
                <div className="px-4" key={listItem.id}>
                  <SingleBlog blogItem={listItem}/>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
