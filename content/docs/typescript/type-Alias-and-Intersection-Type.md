---
title: Type Alias And Intersection Type
description: ဤအခန်းတွင် Type Alias And Intersection Type ကို ရိုးရှင်းသောနည်းဖြင့် လေ့လာသင်ယူမည်။
---

### type Alias

- type ဆိုတာ custom type name တစ်ခု ဖန်တီးဖို့သုံးတာပါ။ (Reusable လုပ်ဖို့အတွက်ပါ။)
- User ကို နောက်ထပ်နေရာတွေမှာလည်း သုံးလို့ရပြီ။

```ts
type User = {
  name: string;
  age: number;
};

const u: User = {
  name: "Alice",
  age: 25,
};
```

### Intersection Type (&)

- Intersection ဆိုတာကတော့ Type ၂ ခု (သို့မဟုတ်) ထပ်ထည့်လိုတဲ့ type တွေကို
  ပေါင်းချင်တယ်ဆိုရင် & နဲ့ချိတ်တာပါ။
- ဒီမှာ Person မှာ name နဲ့ age နှစ်ခုလုံးပါဖို့လိုတယ်။

```ts
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const p: Person = {
  name: "John",
  age: 30,
};
```

### 📝 အနှစ်ချုပ်ဇယား (Summary Table)

| 📌 အကြောင်းအရာ          | 🧪 Syntax          | 💡 အသုံးအနှုန်း                           |
| ----------------------- | ------------------ | ----------------------------------------- |
| `type` Alias            | `type A = { ... }` | ကိုယ်ပိုင် Type အမည်တစ်ခု တည်ဆောက်ရန်     |
| Intersection Type (`&`) | `type B = A & C`   | Type တွေကို ပေါင်းပြီး အသစ်တစ်ခုဖန်တီးရန် |
