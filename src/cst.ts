// ReadonlyArray<string> -> CST -> AST -> JSON
// ReadonlyArray<string> <- CST <- [AST, Options] <- JSON
import {
  either as E,
  option as O,
  readonlyArray as A,
  readonlyNonEmptyArray as NEA,
  applicative as AL,
} from "fp-ts"
import { pipe } from "fp-ts/lib/function"
import * as d from "io-ts/Decoder"
import * as e from "io-ts/Encoder"
import * as c from "io-ts/Codec"
import * as de from "io-ts/DecodeError"
import * as FS from "io-ts/FreeSemigroup"
import { string, char, parser } from "parser-ts"

export interface Position extends Record<"offset" | "start" | "end", number> {}

export interface Node<A> {
  position: Position
  data: A
}

export enum FlagShortAssignment {
  Equals = "=",
  Space = " ",
  Nospace = "",
}

export enum FlagLongAssignment {
  Equals = "=",
  Space = " ",
}

export interface FlagShort {
  _tag: "Short"
  value: O.Option<{ assignment: FlagShortAssignment; value: string }>
}

export interface FlagLong {
  _tag: "Long"
  value: O.Option<{ assignment: FlagLongAssignment; value: string }>
}

export type Flag = FlagShort | FlagLong
export type NonFlag = string
export type Argument = Flag | NonFlag

export const short = pipe(
  char.char("-"),
  parser.apFirst(char.letter),
  parser.map((letter) => letter)
)
