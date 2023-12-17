import { z } from "zod"
import { fromZodError } from "zod-validation-error"

const UserSchema = z
   .object({
      username: z.string().min(3, "Minimal Length must be 3"),
      coords: z.tuple([z.number(), z.number(), z.number().gt(4).int()]),
   })
   .strict()

const user = {
   username: "12",
   coords: [1, 2, 5],
}

console.log(UserSchema.shape)

const results = UserSchema.safeParse(user)

if (!results.success) {
   console.log(fromZodError(results.error))
}

console.log(UserSchema.parse(user))
console.log(UserSchema.safeParse(user))
console.log(UserSchema.safeParse(user).success)
