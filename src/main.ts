import { z } from 'zod';

const userMap = z.record(z.string());

const userSchema = z.object({
  id: z.union([z.string(), z.number()]),
});

type User = z.infer<typeof userSchema>;

const user: User = {
  id: '2',
};

const userStore = {
  kjdkjfdjk: 'Wassem',
};

console.log(userMap.parse(userStore));

// console.log(userSchema.parse(user));
