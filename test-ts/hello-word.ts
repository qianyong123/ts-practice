/*

// 期望是一个 string 类型
type HelloWorld = any

// 你需要使得如下这行不会抛出异常
type test = Expect<Equal<HelloWorld, string>>
*/


type HelloWorld = string // expected to be a string

/* _____________ 测试用例 _____________ */
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]

