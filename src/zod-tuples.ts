import { z } from 'zod';

const userSchema = z
  .object({
    username: z.string(),
    watches: z.array(z.string()).nonempty(),
    coords: z.tuple([
      z.number(),
      z.number(),
      z.number().gt(4).int(),
    ]),
    location: z.tuple([z.string()]).rest(z.number()),
  })
  // .strict()
  .passthrough();

type User = z.infer<typeof userSchema>;

const user: User = {
  username: 'wassem',
  age: 22,
  watches: ['Patek', 'Rolex'],
  coords: [1, 2, 5],
  location: ['Canada', 21],
};

console.log(userSchema.parse(user));
