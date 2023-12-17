import { z } from "zod"

// type User = {
//    userame: string
// }

const hobbies = ["Programming", "Weight Lifting", "Guitar"] as const

enum Hobbies {
   Programming,
   WeightLifting,
   Guitar,
}

const UserSchema = z.object({
   username: z.string(),
   //  username: z.string().optional().min(2).max(10),
   //  username: z.string().nullable(),
   //  username: z.string().nullish(), // works for undefined and null

   age: z.number(),
   //  age: z.bigint()

   birthday: z.date(),
   //  birthday: z.date().default(Math.random),

   isProgrammer: z.boolean(),
   //  isProgrammer: z.boolean().default(true),

   //  test: z.undefined(),
   //  test: z.void(),
   //  test: z.unknown(),
   //  test: z.any(),
   //  test: z.never()

   //  hobby: z.enum(["Programming", "Weight Lifting", "Guitar"]),
   //  hobby: z.nativeEnum(Hobbies),
   hobby: z.enum(hobbies),
})
//  .partial()
//  .pick({ username: true }) // pick only something
//  .omit({ age: true }) // omit something
//  .deepPartial({...})
//  .extend({ name: z.string() })
//  .merge(z.object({ name: z.string() }))
//  .passthrough()
//  .strict()

console.log(UserSchema)
console.log(UserSchema.shape)

type User = z.infer<typeof UserSchema> // infer the type for us based on the schema
// console.log(User) // 'User' only refers to a type, but is being used as a value here.

// const user: User = { username: "WDS" }
const user: User = { username: "WDS", age: 20, birthday: new Date(), isProgrammer: true, hobby: "Programming" }

// console.log(UserSchema.parse(user)) // does this user i created match this schema i defined
console.log(UserSchema.safeParse(user))
console.log(UserSchema.safeParse(user).success)

console.log(UserSchema.partial().parse(user))
