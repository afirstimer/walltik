import { Gamepad2, Globe, Group, Lightbulb, Lock, PersonStandingIcon, Users } from "lucide-react";
import Image from "next/image";

export default function CoreValueSection() {
    const values = [
        {
            name: "Freedom",
            image: <Lock size={24} />,
            description:
                "We automate the tedious learning curve for you, so you can focus on the extraordinary.",
        },
        {
            name: "Innovation",
            image: <Lightbulb size={24} />,
            description:
                "We listen, innovate, and adapt. Your feedback drives us to keep our platform at the cutting edge, ensuring your dropshipping business is the best tool.",
        },
        {
            name: "Think BIG",
            image: <Globe size={24} />,
            description:
                "Success requires growth and thinking BIG. We believe that you always need to play in the top 1% league and we're here to help you stay prepared.",
        },
        {
            name: "Community",
            image: <Users size={24} />,
            description: "Our community connects you with other top sellers, and mentors to guide towards your goals."
        }
    ];

    const statics = [
        {
            name: "1.8M +",
            description: "Dropshippers use Walltik",
        },
        {
            name: "$1B+",
            description: "Earned by our dropshippers",
        },
        {
            name: "800M+",
            description: "Winning products available",
        }
    ]

    return (
        <section className="bg-white dark:bg-gray-950 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Our values
                </h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    At Walltik, we have 4 values that help us stay true to our mission
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {values.map((value) => (
                        <div
                            key={value.name}
                            className="bg-orange-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-left"
                        >
                            {value.image}
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {value.name}
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {statics.map((value) => (
                        <div
                            key={value.name}
                            className="p-6 text-center rounded-2xl"
                        >
                            <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">
                                {value.name}
                            </h1>
                            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}