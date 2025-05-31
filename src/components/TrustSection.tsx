export default function TrustSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-8">
                        Trusted by Sellers Worldwide
                    </h3>

                    <div className="flex justify-center mb-12">
                        <img
                            src="https://ext.same-assets.com/1385443775/1801015900.png"
                            alt="Trusted by entrepreneurs"
                            className="max-w-md w-full h-auto"
                        />
                    </div>

                    {/* Animated GIF indicator */}
                    <div className="flex justify-center">
                        <img
                            src="https://ext.same-assets.com/1385443775/375037467.gif"
                            alt="Animation indicator"
                            className="w-4 h-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
