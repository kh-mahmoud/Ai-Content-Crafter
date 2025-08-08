import { User } from "@prisma/client";

export type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};


export enum FieldType {
  INPUT = 'input',
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


export type outputEditorProps ={
  aiOutput:string,
  editorData:{
    result:string,
    formValues:Record<string,string>,
    templateType:TemplateType
  }
}

