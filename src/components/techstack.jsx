import React from "react"
export default function Techstack() {

    const mystack = [
        {
            'name': 'laravel',
            'image': 'laravel.png',
        },
        {
            'name': 'react',
            'image': 'react.png',
        },
        {
            'name': 'mysql',
            'image': 'mysql.png',
        },
        {
            'name': 'JavaScript',
            'image': 'JavaScript.png',
        },


    ];

    return (

        <section className="m-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">
                Tech Stack--
            </h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
                {mystack.map(item => {
                    return (

                        <a href="#" className=" flex items-center p-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img className="object-contain h-12 w-24" src={`/images/${item['image']}`} />
                            <h5 className="mx-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item['name']}</h5>

                        </a>

                    )

                })}

            </div>




        </section>


    )
}