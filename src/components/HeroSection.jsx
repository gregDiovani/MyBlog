import React from "react";

export default function HeroSection() {


    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">

                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        WEB DEVELOPER
                    </h1>

                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-sm dark:text-gray-400">
                        1+ years of experience in web developer.
                    </p>
                    <a type="button" class="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Contact me on Whatsapp
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                        alt="mockup"
                    />
                </div>
            </div>
        </section>


    )


}