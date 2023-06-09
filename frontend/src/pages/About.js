import React from 'react';

function About() {
  return (
    <div class="relative isolate overflow-hidden bg-gray-900 sm:py-32">
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Whats this about</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">This is a sample frontend backend website for LeetCode questions </p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"></div>
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Offices worldwide</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Full-time colleagues</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Hours per week</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Paid time off</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
  );
}

export default About;
