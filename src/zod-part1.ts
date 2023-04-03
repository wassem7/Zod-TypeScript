import { z } from 'zod';

const hobbies = ['coding', 'singing', 'cooking'] as const;
const userSchema = z
  .object({
    name: z.string(),
    age: z.number().gt(20),
    telnumber: z.number().default(Math.random()),
    isProgrammer: z.boolean().default(true),
    hobbies: z.enum(hobbies),
  })
  .extend({ fullname: z.string() });

type User = z.infer<typeof userSchema>;
const user = {
  name: 'Wassem',
  age: 21,
  isProgrammer: true,
  hobbies: 'coding',
};
console.log(userSchema.parse(user));
