import React from "react";

export default function FeaturedArticle() {

    const myProject = [
        {
            'title': "SISTEM MATERAN PRABAYAR MENGGUNAKAN QRIS",
            'image': 'sistemMeteranPrabayar.png',
            'tags': ['esp32', 'IoT', 'PaymentGateway'],
            'deskripsi': "Rancang-bangun sebuah prototipe meter listrik digital prabayar dengan metode pengisian pulsa listrik melalui  media pembayaran online menggunakan QRIS (Quick Response Code  Indonesian Standard)"
        },
        {
            'title': "Sistem Kontrol/Monitoring peyiraman otomatis ",
            'image': 'hidroponik.png',
            'tags': ['esp32', 'IoT'],
            'deskripsi': " Teknologi Urban Farming berbasis Internet of Things (IoT) di Kawasan Rumah Pangan Lestari (KRPL) Wanita Serpis."
        },

    ]

    return (
        <section className="bg-gray-100 p-10  ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">
                Project Experience--
            </h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
                {myProject.map(item => {
                    return (
                        <>
                            <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="object-cover h-40 w-96" src={`./images/${item['image']}`} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item['title']}</div>
                                    <p className="text-gray-700 text-base">
                                        {item['deskripsi']}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    {item['tags'].map(i => {
                                        return (
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{i}</span>

                                        )

                                    })}
                                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                                </div>
                            </div>

                        </>




                    )
                })}

            </div>

        </section>







    )


}