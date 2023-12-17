import { z } from "zod"

const UserMap = z.set(z.number())

const user = new Set([1, 1, 2, 3, 4])
const user2 = new Set([1, 1, 2, 3, 4, "teste123"])

console.log(UserMap.parse(user))
console.log(UserMap.safeParse(user))
console.log(UserMap.safeParse(user).success)

console.log(UserMap.parse(user2)) // [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ 4 ], "message": "Expected number, received string" } ]
console.log(UserMap.safeParse(user2))
console.log(UserMap.safeParse(user2).success)
