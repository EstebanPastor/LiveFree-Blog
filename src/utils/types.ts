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
