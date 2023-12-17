import { z } from "zod"

const UserMap = z.record(z.string())
// const UserMap2 = z.record(z.string(), z.number())

const user = {
   key1: "teste123",
   key2: "teste123456",
   //    key3: 1, // this would generate an error // [ { "code": "invalid_type", "expected": "string", "received": "number", "path": [ "key3" ], "message": "Expected string, received number" } ]
}

// console.log(UserMap.shape)

console.log(UserMap.parse(user))
console.log(UserMap.safeParse(user))
console.log(UserMap.safeParse(user).success)
