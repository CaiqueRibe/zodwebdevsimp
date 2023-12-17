import { z } from "zod"

const UserMap = z.map(z.string(), z.object({ name: z.string() }))

const user = new Map([
   ["id-john", { name: "Caique" }],
   ["id-kyle", { name: "Kyle" }],
])

console.log(UserMap.parse(user))
console.log(UserMap.safeParse(user))
console.log(UserMap.safeParse(user).success)
