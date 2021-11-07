import { option } from "fp-ts"
import { Char } from "newtype-ts/es6/Char"

export interface ShortFlag {
  char: Char
  value: option.Option<string>
}

export interface LongFlag {}
