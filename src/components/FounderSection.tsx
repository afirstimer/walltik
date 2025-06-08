import Image from "next/image";

export default function FounderSection() {
    const founders = [
        {
            name: "Denise Douthard",
            role: "Co-Founder & CEO",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749362509/6208222463427461197_igzcqx.jpg", // replace with real URLs
            description:
                "Denise Douthard, at 14, she launched his entrepreneurial journey by selling his first product through dropshipping. Seeing its high-reward potential, she dove in and built his career around the model.",
        },
        {
            name: "Branson Farrell",
            role: "Co-Founder & CTO",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749362508/6208222463427461199_q0l9fx.jpg",
            description:
                "Branson Farrell, a tech prodigy, saw the potential in dropshipping and built the fastest, most powerful tool to streamline operations and drive growth.",
        },
        {
            name: "Luke Gill",
            role: "CMO",
            image: "https://res.cloudinary.com/dqg6ernew/image/upload/v1749362509/6208222463427461198_mzklpb.jpg",
            description:
                "Luke Gill, a marketing pro with a passion for e-commerce, partnered with Branson Farrell and transformed Walltik from a small startup into the world’s #1 dropshipping automation platform.",
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-950 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Meet the leadership team
                </h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    Meet the 3 brothers behind Walltik, the future of e-commerce sourcing.
                </p>
                <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {founders.map((founder) => (
                        <div
                            key={founder.name}
                            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-left"
                        >
                            <Image
                                src={founder.image}
                                alt={founder.name}
                                width={500}
                                height={500}
                                className="w-full h-auto rounded-xl mb-4 object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {founder.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {founder.role}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {founder.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}