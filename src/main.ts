import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  occupation: z.string(),
});

type User = z.infer<typeof userSchema>;
const user: User = {
  name: 'Wassem',
  occupation: 'Full-Stack Developer',
};
console.log(userSchema.safeParse(user));
