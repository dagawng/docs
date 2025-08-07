---
title: Next.js
description: 💡 Next.js ဆိုတာဘာလဲ?
---

- Next.js ဟာ React အခြေခံထားတဲ့ အားသာချက်များပြည့်နက်တဲ့ Framework တစ်ခုပဲဖြစ်ပါတယ်။ React နဲ့ Frontend UI တည်ဆောက်နိုင်သလို၊ Next.js ကို အသုံးပြုပြီးတော့ Backend လည်း တည်ဆောက်နိုင်တာကြောင့် Full-stack application တစ်ခုကို တစ်ခါတည်း ပြုလုပ်နိုင်ပါတယ်။
- React မှာတော့ Feature တစ်ခုချင်းစီအတွက် သုံးပေါ်သော Third-party Libraries များတပ်ဆင်ဖို့လိုအပ်ပါတယ်။ ဒါပေမယ့် Next.js မှာတော့ အထဲမှာပါဝင်ပြီးသား ဖြစ်တဲ့ Server-side Rendering, Static Generation, API Routes, Optimization Strategies စတာတွေကို လွယ်လွယ်ကူကူနဲ့ သုံးနိုင်ပါတယ်။

### Next.js ကို ဘယ်လို Setup လုပ်မလဲ?

#### ✅ ၁။ Node.js တင်ပြီးသားလား စစ်ဆေးပါ

- Terminal မှာအောက်က command ကိုရိုက်ပါ

```bash
node -v
```

မရှိသေးရင် Node.js ကိုဒီမှာ download လုပ်နိုင်ပါတယ်။

#### ✅ ၂။ Next.js App အသစ် တစ်ခုဖန်တီးပါ

- အောက်ပါ command ကို သုံးပါ

```bash
npx create-next-app@latest my-app
```

- Yarn သုံးချင်ရင်

```bash
yarn create next-app my-app
```

- PNPM သုံးချင်ရင်

```bash
pnpm create next-app my-app
```

Command run တဲ့အချိန်မှာ TypeScript, Tailwind CSS, ESLint စတဲ့ setup option တွေကိုမေးလေ့ရှိပါတယ်။ ကိုယ့်လိုသလို ရွေးပေးလို့ရပါတယ်။

#### ✅ ၃။ Project Folder ထဲကို ဝင်ပါ

```bash
cd my-app
```

#### ✅ ၄။ Development Server ကို Start လုပ်ပါ

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

- ပြီးရင် browser မှာသွားပါ

```bash
http://localhost:3000
```

#### 🗂️ App Router အတွက် Example Project Structure

```bash
my-app/
├── app/
│   ├── page.tsx            ← မူလမူရင်းစာမျက်နှာ (route: "/")
│   ├── layout.tsx          ← အားလုံးမျှဝေသုံးတဲ့ layout
│   ├── about/
│   │   ├── page.tsx        ← About စာမျက်နှာ (route: "/about")
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx    ← Dynamic route (ဥပမာ "/blog/my-post")
│   ├── api/
│   │   └── hello/route.ts  ← API route (ဥပမာ "/api/hello")
├── public/                 ← static file များ (image, font စသည်)
├── styles/                 ← CSS / Tailwind CSS ဖိုင်များ
├── components/             ← ပြန်သုံးလို့ရတဲ့ UI components
├── lib/                    ← Utility functions, DB function များ
├── next.config.js          ← Next.js အတွက် ပြင်ဆင်မှုများ
├── tsconfig.json
├── package.json
```
