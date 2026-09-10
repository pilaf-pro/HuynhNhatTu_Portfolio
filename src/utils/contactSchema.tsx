import { z } from 'zod';

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .min(10, { message: 'Message must be at least 10 characters' }),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
