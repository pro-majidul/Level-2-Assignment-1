# Assignment 1 Blog Post Weitting 

## Interface এবং Type-এর মধ্যে পার্থক্য

TypeScript শেখার শুরুতেই আমরা `interface` আর `type`—এই দুইটার সাথে পরিচিত হই । প্রথম দেখায় দুটো প্রায় একই রকম মনে হলেও, ব্যবহারিক ক্ষেত্রে এদের মধ্যে পার্থক্য আছে ।

Interface মূলত ব্যবহার করা হয় object-এর structure নির্ধারণ করার জন্য। অর্থাৎ, কোনো object-এর মধ্যে কী কী property থাকবে এবং তাদের type কী হবে, সেটা interface দিয়ে বলা হয় । বড় প্রজেক্টে যেখানে অনেক object নিয়ে কাজ করতে হয়, সেখানে interface খুব পরিষ্কারভাবে structure ধরে রাখতে সাহায্য করে ।

অন্যদিকে, Type অনেক বেশি flexible । Type দিয়ে শুধু object না, বরং string, number, union, intersection—সবকিছুই define করা যায় । Interface যেখানে শুধুমাত্র object-focused, Type সেখানে সবধরনের type combination সামলাতে পারে ।

আরেকটা বড় পার্থক্য হলো—একই নামে একাধিক Interface লেখা যায়, যাকে declaration merging বলা হয় । কিন্তু Type-এর ক্ষেত্রে একই নাম আবার ব্যবহার করা যায় না ।






## keyof keyword কেন দরকার এবং কীভাবে কাজ করে

TypeScript-এর `keyof` keyword খুবই শক্তিশালী একটি feature । এটা মূলত কোনো object type-এর সব property নামকে type হিসেবে ব্যবহার করার সুযোগ দেয়।

ধরা যাক, আমাদের একটি object আছে যার মধ্যে name, age এবং email আছে । `keyof` ব্যবহার করলে আমরা এই তিনটা property নামকে `"name" | "age" | "email"`—এই ধরনের একটি union type বানাতে পারি ।

এর সবচেয়ে বড় সুবিধা হলো—ভুল property নাম ব্যবহার করার সুযোগ থাকে না । ধরুন, আমরা কোনো function বানাচ্ছি যেখানে object থেকে dynamicভাবে value নিতে হবে । যদি `keyof` ব্যবহার করি, তাহলে TypeScript আগেই ধরে ফেলবে আমরা ভুল key পাঠাচ্ছি কিনা ।

এই কারণে `keyof` code-কে আরও safe করে এবং runtime error কমায় ।
