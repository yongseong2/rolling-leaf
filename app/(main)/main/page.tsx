// Import React for JSX compilation
import React from "react";

// MainPage component styled with Tailwind CSS
export default function MainPage() {
  return (
    <div className="px-6 py-14">
      <h1 className="text-xl text-c0">안녕 성용님</h1>
      <h1 className="text-2xl font-bold text-dark-text">
        새로운 나뭇잎을 만들어보세요
      </h1>
      <div className="flex flex-wrap overflow-auto py-6">
        <div className="h-28 w-20 bg-leaf bg-cover"></div>
        <div className="h-28 w-20 bg-leaf bg-cover"></div>
        <div className="h-28 w-20 bg-leaf bg-cover"></div>
        <div className="h-28 w-20 bg-leaf bg-cover"></div>
        <div className="h-28 w-20 bg-leaf bg-cover"></div>
        <div className="h-28 w-20 bg-leaf bg-cover"></div>
        <div className="h-28 w-20 bg-leaf bg-cover"></div>
      </div>
    </div>
  );
}
