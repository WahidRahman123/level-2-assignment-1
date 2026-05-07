## Title: 
**How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).**



## Introduction: 
Pick এবং Omit এই দুটি typescript এর অন্যতম গুরুত্বপূর্ণ দুটি utility type যাদের মাধ্যমে যেকোনো object type থেকে নতুন object type তৈরি করা যায়, যেখানে সুনির্দিষ্ট property রাখা বা না রাখার মতো গুরুত্বপূর্ণ সিদ্ধান্ত নিজেদের আয়ত্তে থাকে।


## Body:
ধরি, নিচের মতো একটি Object Type আছে:
```ts
type Person = {
    name: string;
    age: number;
    dateOfBirth: string;
    address: string;
    nationalIdCardNo: string;
}
```
এখন ধরি নতুন দুইটা object type লাগবে যেখানে প্রথমটাতে Person type এর `name`, `age` ar `address` টা লাগবে, আর দ্বিতীয় টাতে **nationalIdCardNo** বাদে বাকি সবগুলো লাগবে. তাহলে আমরা যদি manual উপায়ে করি, তাহলে complete code টি দাঁড়ায়— 
```ts
type Person = {
    name: string;
    age: number;
    dateOfBirth: string;
    address: string;
    nationalIdCardNo: string;
}

type ShortDetailsOfPerson = {
    name: string;
    age: number;
    address: string;
}

type PublicPersonDetails = {
    name: string;
    age: number;
    dateOfBirth: string;
    address: string;
}
```
এভাবে লিখলে প্রথমে সমস্যা মনে না হলেও বড় প্রজেক্টে এটা সমস্যার সৃষ্টি করে। কোডের সাইজ অনেক বড় হয়ে যায় এবং পরে যদি **Person** এ নতুন টাইপ যুক্ত হয় এবং **shortDetailsOfPerson** ও **publicPersonDetails**-এও আপডেট করার প্রয়োজন পড়ে, তাহলে ম্যানুয়ালি এক এক করে ঠিক করতে হবে। তাই বড় প্রজেক্টে এটি বড় সমস্যা তৈরি করে।

এই সমস্যা সমাধানের জন্য TypeScript-এ `Pick` এবং `Omit` ব্যবহার করা হয়। 

Pick এবং Omit ব্যবহার করার পর পূর্ণাঙ্গ কোডটি দাঁড়ায়—
```ts
type Person = {
    name: string;
    age: number;
    dateOfBirth: string;
    address: string;
    nationalIdCardNo: string;
}

type ShortDetailsOfPerson = Pick<Person, "name" | "age" | "address">

type PublicPersonDetails = Omit<Person, "nationalIdCardNo">
```
এই কোডটির অর্থ হুবহু আগের কোডটির মতো। কিন্তু এখানে কোনো repetition নেই, future update এ ঝামলায় পড়তে হয় না এবং কোডটা clean ও small হয়।

যেহেতু কোডের Repetition বা duplication নেই, সেহেতু এটি কোডকে DRY রাখে। DRY-এর পূর্ণরূপ হলো 'Don't Repeat Yourself'। অর্থাৎ কোড DRY রাখার জন্য Pick এবং Omit গুরুত্বপূর্ণ ভূমিকা পালন করে।

## Conclusion:
সবশেষে এটা বলা যায় যে, `Pick` এবং `Omit` টাইপস্ক্রিপ্টের শক্তিশালী utility টাইপ, যার মাধ্যমে কোডের অপ্রয়োজনীয় duplication এড়ানো যায়। যার ফলে কোড maintenance সহজ হয় এবং কোডের scalability বজায় থাকে।