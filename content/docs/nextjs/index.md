---
title: NextJs
description: TypeScript သည် JavaScript ကို static type checking system ထည့်ထားသော programming language တစ်ခုဖြစ်သည်။
---

## JavaScript ၏ ဇာတ်လမ်း

JavaScript ကိုအစတွင် web browser များအတွက် ရိုးရှင်းသော scripting language အဖြစ် စတင်ဖန်တီးခဲ့သည်။
အချိန်အလိုက် ၎င်း၏အသုံးပြုမှုသည် မြင့်မားလာကာ ရှုပ်ထွေးပြီး အရွယ်အစားကြီးသော application များကိုတောင် တည်ဆောက်နိုင်အောင်ဖြစ်လာသည်။
အဲ့ဒီအတူတူ JavaScript ၏ dynamic nature ကြောင့် အလုပ်လုပ်ရာတွင် ကြုံတွေ့ရသော အခက်အခဲများလည်း တိုးလာသည်။
Static type system မရှိခြင်းကြောင့် စာလုံးပေါင်းမှားခြင်းကဲ့သို့သော အနည်းငယ်သော မှားယွင်းမှုများမှတစ်ဆင့် လိုက်လံရှာဖွေရန်ခက်ခဲသော
bugs များဖြစ်ပေါ်နိုင်သည်။

## The Problem with JavaScript

JavaScript ၏ dynamic nature ကြောင့် မမျှော်လင့်ထားသောအပြုအမူများ ဖြစ်ပေါ်နိုင်သည်။

### Type Coercion with `==`

JavaScript ၏ loose equality operator (==) သည် data type များကို coercion လုပ်နိုင်ပြီး၊ မမျှော်လင့်ထားသောရလဒ်များကို ဖြစ်စေနိုင်သည်။

```javascript
"" == 0;
// This evaluates to true in JavaScript
```

### Silent Errors from Typos

Property နာမည်တွင် စာလုံးပေါင်းမှားခြင်းတစ်ခုကြောင့် runtime မှာ error မပေးပဲ၊
ခွဲခြမ်းစိတ်ဖြာရန် ခက်ခဲသော NaN (Not a Number) တန်ဖိုးပေါ်လာနိုင်သည်။

```javascript
let obj = {
  height: 10,
};

let height = obj.heigth;
// Misspelling 'height'

let halfHeight = height / 2; // halfHeight is NaN
```

Programming language အများစုမှာ ဒီလိုအမှားတွေဖြစ်တဲ့အခါ error ပေးတတ်ပြီး၊
တချို့ကတော့ code မ run မီ compilation အဆင့်မှာပင် error ပြသတတ်သည်။
မိမိရေးနေသော code ကအနည်းငယ်သာရှိပါက ဒီလိုအရာတွေသည် စိတ်လှုပ်ရှားဖွယ် မျှသာဖြစ်သည်။
သို့သော် များစွာသော code များပါဝင်သော application တွေအတွက်တော့ ပြဿနာကြီးကြီးဖြစ်လာနိုင်သည်။

## Why should I use TypeScript?

JavaScript သည် loosely typed language ဖြစ်သောကြောင့် မည်သည့် data type များကိုသုံးထားသည်ကို သိရန်ခက်ခဲသည်။
Function parameter များနှင့် variable များတွင် type မဖော်ပြထားသောကြောင့် developer များသည် implementation ကိုကြည့်ပြီးမှန်းခြေအားဖြင့်အလုပ်လုပ်ရသည်။
TypeScript မှာတော့ code ထဲတွင် data type များကိုဖော်ပြနိုင်ပြီး၊ type မကိုက်ညီလျှင် error ပြပေးနိုင်သည်။
ဥပမာအားဖြင့် number လိုအပ်သော function ထဲသို့ string ပေးလိုက်လျှင် TypeScript သည် error ပြသပေးမည်။ JavaScript မှာတော့ မပြသပါ။

TypeScript အသုံးပြုလျှင်၊ အောက်ပါစာလုံးပေါင်းမှားသော ဥပမာကို compiler မှ စောစီးစွာ error messageကို ဖော်ထုတ်ပြသပေးမည်။

```typescript
let obj = {
  height: 10,
};

// TypeScript will produce an error:
// Property 'heigth' does not exist on type '{ height: number; }'. Did you mean 'height'?
let height = obj.heigth;
```

TypeScript သည် ဥပမာအဖြစ် နံပါတ်တစ်ခုကို array ဖြင့်စားခြင်းကဲ့သို့သော အဓိပ္ပါယ်မရှိသောလုပ်ဆောင်မှုများကိုလည်း ကာကွယ်ပေးနိုင်သည်။
ဤသည်မှာ JavaScript မှာ syntax မှားမရှိသော်လည်း၊ TypeScript သည် ၎င်းကို logical error အဖြစ် မှတ်သားပေးသည်။

```typescript
console.log(4 / []);
// TypeScript will flag this with a type error
```
