https://www.youtube.com/watch?v=L6BE-U3oy80&ab_channel=WebDevSimplified

Zod is an amazing validation library that focuses on type safety and ease of use. I love Zod and feel that it makes TypeScript even better. It also makes working with user data incredibly easy and in this video I will show you everything you need to know about Zod.

**Project** -->
**Channel** -->
**Date Created** -->

### npm Commands

npm i zod
npm i zod-validation-error

### Components

### Libraries

### Observations/Notes

## Tags or timeStamps

00:33 - What is Zod?

-  TypeScript-first schema validation with static type inference
-  Validation built in
-  TypeSafe built in

01:15 - Basic usage

-  import {z} from "zod"
-  strict: true
-  create schema
-  after the parse, if it returns us back the object(or user in this case) it means it passed the validation
-  infer the type of the class/object based on the created Schema
-  Schema.parse
-  Schema.safeParse

05:03 - Basic types

-  z.string()
-  z.number()
-  z.bigint()
-  z.date()
-  z.boolean()
-  z.string().optional()
-  z.undefined()
-  z.null()
-  z.void()
-  z.any()
-  z.unknown()
-  z.never()
-  z.optional()
-  z.nullable()
-  z.nullish()
-  z.default(true)
-  z.literal(true)
-  z.enums

   07:00 - Basic validation
   13:25 - Object type

-  UserSchema.shape
-  UserSchema.shape.age
-  UserSchema.shape.username
-  UserSchema.partial

   16:52 - Array type
   18:02 - Tuple types
   20:00 - Union type
   21:58 - Record type
   23:37 - Map type
   24:55 - Set type
   25:35 - Promise type
   26:40 - Advanced validation
   27:55 - Error handling
