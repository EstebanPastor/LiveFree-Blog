"use client";

import { formControls } from "@/utils";

export default function CreateBlog() {
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
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Upload blog image
                    </label>
                    <input
                      id="fileinput"
                      accept="image/*"
                      max={1000000}
                      type="file"
                      className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color
                        shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
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
                            className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color
                          shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        ) : control.component === "textarea" ? (
                          <textarea
                            placeholder={control.placeholder}
                            rows={5}
                            name={control.id}
                            className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        ) : control.component === "select" ? (
                          <select
                            name={control.id}
                            placeholder={control.placeholder}
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
