import { z } from "zod"

// tuple is very simillar to an array
//      fixed length array, each element of the array has a specific type
//          very useful for things like coordinates

const UserSchema = z.object({
   username: z.string(),
   coords: z.tuple([z.number(), z.number(), z.number().gt(4).int()]),
   coords2: z.tuple([z.string(), z.date()]).rest(z.number()), // has a string, a date, and an infinite rest of numbers
})

const user = {
   username: "WDS",
   coords: [1, 2, 5],
   coords2: ["test", new Date(), 2, 4, 5, 6, 7, 8],
   //    coords: [1, 2, 3], // [ { "code": "too_small", "minimum": 4, "type": "number", "inclusive": false, "exact": false, "message": "Number must be greater than 4", "path": [ "coords", 2 ] } ]
   //    coords: [1, "2", 3], //[ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "coords", 1 ], "message": "Expected number, received string" } ]
}

console.log(UserSchema.shape)

console.log(UserSchema.parse(user))
console.log(UserSchema.safeParse(user))
console.log(UserSchema.safeParse(user).success)
