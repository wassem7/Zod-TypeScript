import { z } from 'zod';

const userSchema = z
  .object({
    username: z.string(),
  })
  // .strict()
  .passthrough();

type User = z.infer<typeof userSchema>;

const user = {
  username: 'wassem',
  age: 22,
};

console.log(userSchema.parse(user));
