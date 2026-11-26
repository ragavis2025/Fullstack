import z from "zod";

export const registerschema = z .object({
    name:z.string().min(3,"name must conatin atleast 3 char"),
    email:z.string().email("Enter a valid email"),
    password:z.string().min(8,"Password must have atleast 8 char"),
    age:z.coerce.number().min(18,"Age should be greater than 18")
})