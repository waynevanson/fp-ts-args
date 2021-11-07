---
title: flag.ts
nav_order: 1
parent: Modules
---

## flag overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Args (interface)](#args-interface)
  - [Flag (interface)](#flag-interface)
  - [falsey](#falsey)
  - [intersect](#intersect)
  - [truthy](#truthy)
  - [zero](#zero)

---

# utils

## Args (interface)

**Signature**

```ts
export interface Args extends ReadonlyArray<string> {}
```

## Flag (interface)

**Signature**

```ts
export interface Flag<I, A> extends c.Codec<I, Args, A> {}
```

## falsey

**Signature**

```ts
export declare const falsey: Flag<false, false>
```

## intersect

**Signature**

```ts
export declare function intersect()
```

## truthy

**Signature**

```ts
export declare const truthy: Flag<true, true>
```

## zero

**Signature**

```ts
export declare const zero: <A>() => e.Encoder<Args, A>
```
