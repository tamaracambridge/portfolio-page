import React from 'react';

const Employment = () => {
  const history = [
    {
      date: 'September 2017',
      company: 'University of Leicester',
      role: 'Mathematics and Actuarial Science',
      description:
        'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus',
    },
    {
      date: 'September 2021',
      company: 'Mthree',
      role: 'Production Support Trainee',
      description:
        'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus',
    },
    {
      date: 'November 2021',
      company: 'Tradition',
      role: 'Trading Platforms and Application Support Analyst',
      description:
        'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus',
    },
    {
      date: 'September 2022',
      company: "Bally's Interactive",
      role: 'Graduate Software Developer',
      description:
        'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus',
    },
  ];
  return (
    <>
      <div id="employment/history" class="container flex relative sm:pl-12 group -my-6 px-5 py-32 pt-20">

        <div class="container">

<h2 className="ml-3 text-4xl font-bold mb-5 border-b-[5px] w-[500px] border-[#ff74c5] pb-2">
            Employment and Education History
          </h2>

        <div class="-my-6 pt-10 flex-wrap items-center">
          <div class="relative pl-8 sm:pl-32 py-6 group">
            <div class="font-lobster font-medium text-2xl text-[#ff74c5] mb-1 sm:mb-0">
            University of Leicester
            </div>
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#ec4899] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="font-space sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              September 2017
              </time>
              <div class="text-xl font-bold text-slate-900">
              Mathematics and Actuarial Science
              </div>
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>

          <div class="relative pl-8 sm:pl-32 py-6 group">
            <div class="font-lobster font-medium text-2xl text-[#ff74c5] mb-1 sm:mb-0">
            Mthree
            </div>
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#ec4899] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="font-space sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              September 2021
              </time>
              <div class="text-xl font-bold text-slate-900">
                Production Support Trainee
              </div>
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>

          <div class="relative pl-8 sm:pl-32 py-6 group">
            <div class="font-lobster font-medium text-2xl text-[#ff74c5] mb-1 sm:mb-0">
              Tradition
            </div>
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#ec4899] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="font-space sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                November 2021
              </time>
              <div class="text-xl font-bold text-slate-900">
              Trading Platforms and Application Support Analyst
              </div>
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>

          <div class="relative pl-8 sm:pl-32 py-6 group">
            <div class="font-lobster font-medium text-2xl text-[#ff74c5] mb-1 sm:mb-0">
              Bally's Interactive
            </div>
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#ec4899] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="font-space sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                September 2022
              </time>
              <div class="text-xl font-bold text-slate-900">
                Graduate Software Engineer
              </div>
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Employment;
