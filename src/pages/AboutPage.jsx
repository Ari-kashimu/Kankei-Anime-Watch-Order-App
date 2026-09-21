import Footer from "@/components/layout/Footer";
import TopSection from "@/components/watchorder/TopSection";
import React from "react";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
    return (
        <div
            className="w-full h-screen overflow-auto relative z-15 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-950
                [&::-webkit-scrollbar-thumb]:bg-white/80 [&::-webkit-scrollbar-thumb]:rounded-full">
            <TopSection />
            <div className="w-full py-16 px-16 max-[1000px]:px-8 max-[550px]:px-4">
                <div className="bg-white/10 px-24 max-[750px]:px-12 max-[550px]:px-6 py-12 flex flex-col gap-5 h-fit overflow-hidden backdrop-blur-xl rounded-4xl">
                    <div className="flex flex-col gap-5 border-b border-white/30 pb-8">
                        <h1 className="text-5xl max-[550px]:text-3xl font-bold">
                            About
                        </h1>
                        <div className="flex flex-col max-[550px]:text-sm gap-2.5 w-150 max-[1000px]:w-5/6 max-[550px]:w-full">
                            <p>
                                In Japanese, Kankei (関係 or かんけい)
                                translates to relationship, connection, or
                                relation. The logo is based on the Japanese Word
                                "永" means "Forever". I used it as Logo just
                                because it resembles letter "K".
                            </p>
                            <p>
                                Ever been confused about where to start an
                                anime? I sometimes myself feels Overwhelmed by
                                the long and confusing anime timelines so i
                                build Kankei to solve this problem. Kankei
                                solves that problem by providing organized watch
                                orders, movie placement guides, and essential
                                series information in one place. No spoilers, no
                                confusion—just anime.
                            </p>
                            <p>
                                If this site has helped you, consider making a
                                donation. Every contribution helps me maintain
                                and improve your experience.
                            </p>
                        </div>

                        <div>
                            <Button asChild variant="custom">
                                <a
                                    target="_blank"
                                    href="https://ko-fi.com/aliari">
                                    <Coffee className="w-5! h-5!" />
                                    Support this Project
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 border-b border-white/30 pb-8">
                        <h1 className="text-5xl max-[550px]:text-3xl font-bold">
                            Disclaimer
                        </h1>
                        <div className="flex flex-col max-[550px]:text-sm gap-2.5 w-150 max-[1000px]:w-5/6 max-[550px]:w-full">
                            <p>
                                Kankei is an independent fan-made project
                                created to help anime fans find accurate watch
                                orders and franchise information. While we
                                strive to keep all content up to date and
                                accurate, we cannot guarantee the completeness
                                or accuracy of all information.
                            </p>
                            <p>
                                Kankei is not affiliated with or sponsored by
                                any anime studio, publisher, streaming service,
                                or copyright holder. All trademarks, logos, and
                                intellectual property belong to their respective
                                owners.
                            </p>
                            <p>
                                The website may display advertisements and links
                                to third-party services, including Google
                                AdSense and other advertising partners. We may
                                earn revenue from these advertisements to help
                                support the operation and development of Kankei.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 border-b border-white/30 pb-8">
                        <h1 className="text-5xl max-[550px]:text-3xl font-bold">
                            Privacy Policy
                        </h1>
                        <div className="flex flex-col max-[550px]:text-sm gap-2.5 w-150 max-[1000px]:w-5/6 max-[550px]:w-full">
                            <p>
                                At Kankei, we value your privacy. This Privacy
                                Policy explains what data is collected and how
                                it is used.
                            </p>
                            <p>
                                <span className="font-bold">
                                    Advertising & Third-Party :
                                </span>
                                Kankei may display ads in the future, including
                                services like Google AdSense. Third-party
                                advertisers may use cookies and tracking
                                technologies to serve relevant ads. We may also
                                link to external websites. We are not
                                responsible for the privacy practices or content
                                of these third-party sites.
                            </p>
                            <p>© 2026-27 Kankei. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
