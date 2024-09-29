import { z } from 'zod';

export const signUpFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, 'Password must be at least 8 characters long')
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
import { z } from "zod";
 
export const formSchema = z.object({
 question1: z.enum(['software engineering', 'web development', 'ai/ml']),
 question2: z.enum(['']),
 question3: z.enum(['Beginner, Intermediate', 'Advanced']),
 question4: z.enum(['1-2 hours, 2-5 hours, 5-8 hours'])
});

export type FormSchema = typeof formSchema;