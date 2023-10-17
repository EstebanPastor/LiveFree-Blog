export interface MenuItem {
  id: string;
  label: string;
  path: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface FormControlItem {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  component: string;
  options: Option[];
}

export interface BlogFormData {
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  category: string;
  userid: string;
  userimage: string;
  comments: string[];
  image: string;
}
