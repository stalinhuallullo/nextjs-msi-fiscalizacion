"use client";

import { useTranslation } from "@/app/i18n/client";
import { fallbackLng, languages } from "@/app/i18n/settings";

const Footer = (lng: string) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const { t } = useTranslation(lng, 'footer')


    return (
        <footer
            className="wow fadeInUp relative z-10 bg-[#5A6A27]"
            data-wow-delay=".15s">
            <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                            <div className="my-1">
                                <div className="-mx-3 flex items-center justify-center md:justify-start">
                                    <a
                                        href="/#"
                                        className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                                        {t("privacy_policy")}
                                    </a>
                                    <a
                                        href="/#"
                                        className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                                        {t("legal_notice")}
                                    </a>
                                    <a
                                        href="/#"
                                        className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                                        {t("terms_of_service")}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                            <div className="my-1 flex justify-center md:justify-end">
                                <p className="text-base text-gray-7">
                                    {t("designed_and_developed_by")}{" "}
                                    <a
                                        href="https://msi.gob.pe/"
                                        rel="nofollow noopner noreferrer"
                                        target="_blank"
                                        className="text-gray-1 hover:underline">
                                        {t("msi")}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;