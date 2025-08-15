import {FieldType, TemplateFormField } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSchemaFromTemplate = (form: TemplateFormField[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};

  form.forEach((item) => {
    // You can customize validation per type if needed
    if (item.field === FieldType.INPUT) {
      shape[item.name] = z.string().min(1, `${item.name} is required`);
    } else if (item.field === FieldType.TEXTAREA) {
      shape[item.name] = z.string().min(1, `${item.name} is required`);
    }
  });

  return z.object(shape);
};






