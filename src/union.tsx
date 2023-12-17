import { z } from "zod"

const UserSchema = z
   .object({
      //   id: z.union([z.string(), z.number()]),
      //   id: z.string().or(z.number()), // this is the same as above
      id: z.discriminatedUnion("status", [
         z.object({
            status: z.literal("sucess"),
            data: z.string(),
         }),
         z.object({
            status: z.literal("failed"),
            error: z.instanceof(Error),
         }),
      ]),
   })
   .strict()

const user = {
   //    id: "testeID123",
   id: { status: "sucess", data: "asjkadhsjkakds" },
}

// console.log(UserSchema.shape)

// console.log(UserSchema.parse(user))
console.log(UserSchema.safeParse(user))
console.log(UserSchema.safeParse(user).success)
