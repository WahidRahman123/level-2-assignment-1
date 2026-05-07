## Title: 
**How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?**



## Introduction: 
TypeScript এ Generics এমন একটি feature যার মাধ্যমে reusable function, component তৈরি করা যায় without losing type safety। একই logic বিভিন্ন ধরনের data এর জন্য ব্যবহার করতে চাইলে Generics অনেক helpful হয়।

## Body:
ধরি এমন একটি function বানাতে চাই যেটা যেকোনো value return করবে।

```ts
function returnValue(value: any): any {
    return value;
}

const result = returnValue("Hello");
result.toUpperCase();
```
এখানে problem হচ্ছে any ব্যবহার করার কারণে TypeScript আর type check করতে পারে না। returnValue call কাজ করবে, কিন্তু যদি ভুল type use করি তাহলেও TypeScript error দেখাবে না।

এখন আমরা একই function Generics দিয়ে লিখি তাহলে কোডটি দাঁড়ায় — 

```ts
function returnValue<T>(value: T): T {
    return value;
}

const name = returnValue<string>("Rahim");

const age = returnValue<number>(25);
```

এখন function call করার সময় TypeScript automatically type বুঝে নিবে। এখন যদি string এর জায়গায় boolean related method use করি তাহলে TypeScript instantly error দেখাবে। অর্থাৎ, এখানে complete type safety নিশ্চিত হলো, reusable code লেখা গেল, function duplication কমে গেল.

## Conclusion:
Generics TypeScript এর সবচেয়ে powerful feature গুলোর মধ্যে একটি। এটি reusable এবং flexible code লিখতে সাহায্য করে strong type safety অক্ষুণ্ণ রেখে.

যখন একই logic multiple data type এর জন্য ব্যবহার করতে হয়, তখন **Generics** ব্যবহার করা হয়।