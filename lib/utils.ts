import { FieldType, TemplateFormField } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import z from "zod";
import redis from "./redis";

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

export const getOrSetCache = async<T> (key: string, cb: () => Promise<any>) : Promise<T> => {
  return new Promise(async (resolve, reject) => {
    try {
      const cached = await redis.get(key) as T;

      if (cached == null) {
        const freshData = await cb();
        await redis.setex(key, 3600, JSON.stringify(freshData)); 
        return resolve(freshData) as T;
      }

      return resolve(cached) as T; // parse cached JSON
    } catch (err) {
      reject(err);
    }
  });
};


