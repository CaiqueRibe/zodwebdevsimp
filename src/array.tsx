import { z } from "zod"

const UserSchema = z
   .object({
      username: z.string(),
      friends: z.array(z.string()).nonempty().min(2).max(5).length(2),
   })
   .strict()

const user = {
   username: "WDS",
   friends: ["Kyle", "Julie"],
   //    friends: [], // nonempty().error  [ { "code": "too_small", "minimum": 1, "type": "array", "inclusive": true, "exact": false, "message": "Array must contain at least 1 element(s)", "path": [ "friends" ] } ]
}

console.log(UserSchema.shape)
console.log(UserSchema.shape.friends)
console.log(UserSchema.shape.friends.element)

console.log(UserSchema.parse(user))
console.log(UserSchema.safeParse(user))
console.log(UserSchema.safeParse(user).success)
