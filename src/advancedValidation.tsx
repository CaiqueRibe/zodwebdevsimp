import { z } from "zod"

const brandEmail = z.string().refine((val) => val.endsWith("@wevdevsimplified.com"), {
   message: "Email must end with @wevdevsimplified.com",
})

// really low level access

// const brandEmail2 = z.string().superRefine((val) => val.endsWith("@wevdevsimplified.com"), {
//    message: "Email must end with @wevdevsimplified.com",
// })

const email = "testemail@wevdevsimplified.com"
const email2 = "testemail@web.com"

console.log(brandEmail.parse(email))
console.log(brandEmail.parse(email2)) // [ { "code": "custom", "message": "Email must end with @wevdevsimplified.com", "path": [] } ]

// {
//     "code": "custom",
//     "message": "Email must end with @wevdevsimplified.com",
//     "path": []
//   }
// ]
