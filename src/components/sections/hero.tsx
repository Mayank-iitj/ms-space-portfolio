import React from 'react';
import Image from 'next/image';
import { SparklesIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="home">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
      >
        <source
          src="https://space-portolio.vercel.app/blackhole.webm"
          type="video/webm"
        />
      </video>
      <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <div className="flex flex-row items-center py-2 px-[7px] border border-[#7042f88b] opacity-90 rounded-full shadow-[inset_0_-7px_11px_0_rgba(164,143,255,0.12)]">
            <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
            <h1 className="text-[13px] font-normal text-foreground">
              M in MAYANK stands for "MYSTERIOUS"
            </h1>
          </div>

          <div className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
            <span>
              Designing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {' '}
                Dreams,{' '}
              </span>
              Building Futures
            </span>
          </div>

          <p className="text-lg text-muted-foreground my-5 max-w-[600px]">
            I am Mayank Sharma, a student at IIT Jodhpur pursuing BS in AIDE (Artificial Intelligence and Data Engineering). I am quite fascinated by the number of AI tools in the market and their applications.
          </p>

          <div className="flex gap-4">
            <a
              href="#work"
              className="py-2 px-7 text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="py-2 px-7 text-center text-white cursor-pointer rounded-lg max-w-[200px] border border-primary bg-transparent transition-all duration-200 hover:bg-primary hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f4cf68ac-4224-41d1-b72e-20703ea573d6-space-portolio-vercel-app/assets/svgs/mainIconsdark-4.svg?"
            alt="work icons"
            width={650}
            height={650}
            className="animate-[spin_20s_linear_infinite]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;