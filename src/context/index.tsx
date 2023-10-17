"use client";

import Spinner from "@/components/spinner/Spinner";
import { initialBlogFormData } from "@/utils";
import { Blog, BlogFormData } from "@/utils/types";
import { useSession } from "next-auth/react";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchResults: Blog[];
  setSearchResults: Dispatch<SetStateAction<Blog[]>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  formData: initialBlogFormData,
  setFormData: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searchResults: [],
  setSearchResults: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Blog[]>([]);
  const [formData, setFormData] = useState(initialBlogFormData);

  if (session === undefined) return <Spinner />;

  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, formData, setFormData, searchQuery, setSearchQuery, searchResults, setSearchResults }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
