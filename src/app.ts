// type challenges

interface User {
  name?: string
  age?: number
  address?: string
}
type Merge<O> = {
  [Key in keyof O]: O[Key]
}
type RequiredByKeys<O, K extends keyof O> = Merge<{
  [Key in keyof O as Key extends K ? Key : never]-?: O[Key]
} & Omit<O, K>>
type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
