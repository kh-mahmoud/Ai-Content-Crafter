import { Content, User } from "@prisma/client";

export type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

export enum FieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
}

export type TemplateFormField = {
  label: string;
  field: FieldType;
  name: string;
};

export type TemplateType = {
  name: string;
  desc: string;
  category: string;
  icon: string;
  slug: string;
  aiPrompt: string;
  form: TemplateFormField[];
};

export type outputEditorProps = {
  editorData?: {
    result?: string;
    formValues?: Record<string, string>;
    templateType?: TemplateType;
    loading?: boolean;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export type ContentProps = {
  result: string;
  formValues?: Record<string, string>;
  templateType?: TemplateType;
  title: string;
  description: string;
  contentId?: string;
};

export type AiGenerateOptions = {
  model?: "gemini-2.5-pro" | "gemini-2.5-flash";
  prompt: string;
  updateText?: (text: string ) => void;
  stream?: boolean;
};

export interface ContentCardProps extends Content {
  author: {
    clerkId:string
  };
}

export type ContentListProps = {
  fetchData: () => Promise<ContentCardProps[] | undefined>;
};


