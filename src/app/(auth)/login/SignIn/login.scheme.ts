import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
export { zodResolver }