// type challenges

type OmitByType<O, T> = {
  [Key in keyof O as O[Key] extends T ? never : Key]: O[Key]
}

type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }