import { z } from 'zod';

// User schema
export const userSchema = z.object({
  //   id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  access: z.string(),
});

// Employee schema
export const employeeSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  telNumber: z.string(),
});

export type EmployeeType = z.infer<typeof employeeSchema>;
export type UserType = z.infer<typeof userSchema>;
