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
            <div className="w-full py-16 px-16">
                <div className="bg-white/10 px-24 py-12 flex flex-col gap-5 h-fit overflow-hidden backdrop-blur-xl rounded-4xl">
                    <div className="flex flex-col gap-5 border-b border-white/30 pb-8">
                        <h1 className="text-5xl font-bold">About</h1>
                        <p className="w-150">
                            In Japanese, Kankei (関係 or かんけい) translates to
                            relationship, connection, or relation. The logo is
                            based on the Japanese Word "永" means "Forever". I
                            used it as Logo just because it resembles letter
                            "K".
                            <br></br>
                            <br></br>
                            Ever been confused about where to start an anime? I
                            sometimes myself feels Overwhelmed by the long and
                            confusing anime timelines so i build Kankei to solve
                            this problem. Kankei solves that problem by
                            providing organized watch orders, movie placement
                            guides, and essential series information in one
                            place. No spoilers, no confusion—just anime.
                            <br></br>
                            <br></br>
                            If this site has helped you, consider making a
                            donation. Every contribution helps me maintain and
                            improve your experience.
                        </p>
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
                        <h1 className="text-5xl font-bold">Disclaimer</h1>
                        <p className="w-150">
                            Kankei is an independent fan-made project created to
                            help anime fans find accurate watch orders and
                            franchise information. While we strive to keep all
                            content up to date and accurate, we cannot guarantee
                            the completeness or accuracy of all information.
                            <br></br>
                            <br></br>
                            Kankei is not affiliated with or sponsored by any
                            anime studio, publisher, streaming service, or
                            copyright holder. All trademarks, logos, and
                            intellectual property belong to their respective
                            owners.
                            <br></br>
                            <br></br>
                            The website may display advertisements and links to
                            third-party services, including Google AdSense and
                            other advertising partners. We may earn revenue from
                            these advertisements to help support the operation
                            and development of Kankei.
                            <br></br>
                            <br></br>
                            By using Kankei, you agree that the information
                            provided is for general informational.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 border-b border-white/30 pb-8">
                        <h1 className="text-5xl font-bold">Privacy Policy</h1>
                        <p className="w-150">
                            At Kankei, we value your privacy. This Privacy
                            Policy explains what data is collected and how it is
                            used.
                            <br></br>
                            <br></br>
                            <span className="font-bold">
                                Advertising & Third-Party :
                            </span>
                            <br></br>
                            Kankei may display ads in the future, including
                            services like Google AdSense. Third-party
                            advertisers may use cookies and tracking
                            technologies to serve relevant ads. We may also link
                            to external websites. We are not responsible for the
                            privacy practices or content of these third-party
                            sites.
                            <br></br>
                            <br></br>
                            <span className="font-bold">Data Control :</span>
                            <br></br>
                            We do not sell or collect personal information such
                            as names, emails, or passwords.
                            <br></br>
                            <br></br>
                            <span className="font-bold">Consent :</span>
                            <br></br>
                            By using Kankei, you agree to this Privacy Policy.
                            <br></br>
                            <br></br>
                            <span className="font-bold">Copyright :</span>
                            <br></br>© Kankei. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
