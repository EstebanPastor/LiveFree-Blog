"use client";

import Button from "@/components/button/Button";
import { formControls, initialBlogFormData } from "@/utils";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../firebase.config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useContext, useState } from "react";
import Spinner from "@/components/spinner/Spinner";
import { GlobalContext } from "@/context";
import { BlogFormData } from "@/utils/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://nextjs13-blog.appspot.com");

function createUniqueFileName(fileName: string) {
  const timeStamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${fileName}-${timeStamp}-${randomString}`;
}

export default function CreateBlog() {
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const { formData, setFormData } = useContext(GlobalContext);
  const { data: session } = useSession();
  const router = useRouter();

  async function handleImageSaveToFireBase(file: any) {
    const extractUniqueFileName = createUniqueFileName(file?.name);
    const storageRef = ref(storage, `blog/${extractUniqueFileName}`);
    const uploadImg = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadImg.on(
        "state_changed",
        (snapshot) => {},
        (error) => reject(error),
        () => {
          getDownloadURL(uploadImg.snapshot.ref)
            .then((url) => resolve(url))
            .catch((error) => reject(error));
        }
      );
    });
  }

  async function handleBlogImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.files) return;
    setImageLoading(true);

    const saveImageToFirebase: any = await handleImageSaveToFireBase(
      event.target.files[0]
    );

    if (saveImageToFirebase !== "") {
      setImageLoading(false);

      setFormData({
        ...formData,
        image: saveImageToFirebase,
      });
    }
  }

  async function handleSaveBlogPost() {
    const res = await fetch("/api/blog-post/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        userid: session?.user?.name,
        userimage: session?.user?.image,
        comments: [],
      }),
    });
    const data = await res.json();

    if (data && data.success) {
      setFormData(initialBlogFormData);
      router.push("/blogs");
    }
  }

  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-primary/[3%] py-10 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] px-8">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Create your own blog post
              </h2>
              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className={`${imageLoading ? "w-1/2" : "w-full"} `}>
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Upload blog image
                      </label>
                      <input
                        id="fileinput"
                        accept="image/*"
                        max={1000000}
                        onChange={handleBlogImageChange}
                        type="file"
                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color
                        shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    {imageLoading ? (
                      <div className="w-1/2">
                        <Spinner />
                      </div>
                    ) : null}
                  </div>

                  <div className="-mx-4 flex flex-wrap">
                    {formControls.map((control) => (
                      <div className="w-full px-4">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          {control.label}
                        </label>

                        {control.component === "input" ? (
                          <input
                            type={control.type}
                            placeholder={control.placeholder}
                            name={control.id}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setFormData({
                                ...formData,
                                [control.id]: event.target.value,
                              });
                            }}
                            value={formData[control.id as keyof BlogFormData]}
                            className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color
                          shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        ) : control.component === "textarea" ? (
                          <textarea
                            placeholder={control.placeholder}
                            rows={5}
                            name={control.id}
                            onChange={(
                              event: React.ChangeEvent<HTMLTextAreaElement>
                            ) => {
                              setFormData({
                                ...formData,
                                [control.id]: event.target.value,
                              });
                            }}
                            value={formData[control.id as keyof BlogFormData]}
                            className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        ) : control.component === "select" ? (
                          <select
                            name={control.id}
                            placeholder={control.placeholder}
                            onChange={(
                              event: React.ChangeEvent<HTMLSelectElement>
                            ) => {
                              setFormData({
                                ...formData,
                                [control.id]: event.target.value,
                              });
                            }}
                            value={formData[control.id as keyof BlogFormData]}
                            className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color
                          shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          >
                            <option value={""} id="">
                              Select
                            </option>
                            {control.options.map((optionItem) => (
                              <option
                                id={optionItem.value}
                                value={optionItem.value}
                              >
                                {optionItem.label}
                              </option>
                            ))}
                          </select>
                        ) : null}
                      </div>
                    ))}
                    <div className="w-full px-4">
                      <Button
                        text="Create a new blog"
                        onClick={handleSaveBlogPost}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
