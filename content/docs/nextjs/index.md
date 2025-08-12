---
title: Next.js
description: 💡 Next.js ဆိုတာဘာလဲ?
---

- Next.js က React ကိုအခြေခံထားပြီး website နဲ့ web app တွေကို ပိုလွယ်ကူ၊ပိုမြန်မြန်ဆန်ဆန်တည်ဆောက်နိုင်စေတဲ့ framework တစ်ခုပါ။

- React တင်သုံးတဲ့အခါမှာ feature တချို့ကို ကိုယ်တိုင် setup လုပ်ရသလို third-party library တွေကိုလဲတပ်ထည့်ရပါတယ်။
- Next.js ကတော့ အဲဒီ feature တွေကို built-in အဖြစ်ပဲပေးထားတာကြောင့် တိုက်ရိုက်အသုံးချနိုင်ပါတယ်။

### Next.js ရဲ့ အဓိကအကျိုးကျေးဇူးများ

- Server-side Rendering (SSR) – ပေါင်းထည့်လိုက်တဲ့ အချက်အလက်ကို server ကနေ တိုက်ရိုက် render လုပ်ပေးတာကြောင့် SEO အတွက်ကောင်းတယ်။
- Static Site Generation (SSG) – တချို့ page တွေကို အမြဲတမ်း static file အဖြစ် generate လုပ်ထားနိုင်ပြီး loading မြန်တယ်။
- API Routes – Backend API ကို ထပ်ဆောက်စရာမလိုဘဲ Next.js ထဲမှာပဲ API endpoint တွေ ဖန်တီးနိုင်တယ်။
- Image Optimization – ပုံတွေကို အလိုအလျောက် resize, lazy load စတာလုပ်ပေးတယ်။
- Routing system – File/folder အခြေပြုပြီး route များကို အလိုအလျောက်ပြင်ဆင်ပေးတယ်။

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

- ပြီးရင် browser ကိုသွားပြီး  `http://localhost:3000` url သွားလိုက်ပြီ starter page ကို တွေ့ ရရင် next.js app ရေးဖို စလိုရပါပြီ



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
