import { z } from "zod"

const PromiseSchema = z.promise(z.string())

const p = Promise.resolve("sfc")

const p2 = "asadsa"

// with promised zod validates two things (two steps)
//  1.is it a promise?
//  2.does the promise validate the schema?

console.log(PromiseSchema.parse(p))
console.log(PromiseSchema.safeParse(p))
console.log(PromiseSchema.safeParse(p).success)

console.log(PromiseSchema.parse(p2)) // [ { "code": "invalid_type", "expected": "promise", "received": "string", "path": [], "message": "Expected promise, received string" } ]
console.log(PromiseSchema.safeParse(p2))
console.log(PromiseSchema.safeParse(p2).success)
