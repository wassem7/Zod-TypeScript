import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  age: z.number().gt(20),
  telnumber: z.number().default(Math.random()),
  isProgrammer: z.boolean().default(true),
});

type User = z.infer<typeof userSchema>;
const user = {
  name: 'Wassem',
  age: 21,
  isProgrammer: true,
};
console.log(userSchema.safeParse(user));
