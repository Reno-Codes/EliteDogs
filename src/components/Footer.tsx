import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface FooterProps {
    selectedBreed: "schnauzer" | "shiba";
}

const Footer = ({ selectedBreed }: FooterProps) => {
    const { t } = useTranslation();

    const getBreedName = () => {
        return "Elite Dogs";
    };

    const getSocialLinks = () => {
        if (selectedBreed === "schnauzer") {
            return {
                tiktok: "https://www.tiktok.com/@tikdogkira",
                instagram: "https://www.instagram.com/kira_the_schnauzer_",
            };
        } else {
            return {
                tiktok: "https://www.tiktok.com/@shiba.inu.naomi",
                instagram: "https://www.instagram.com/shiba_inu_naomi",
            };
        }
    };

    const socialLinks = getSocialLinks();

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">
                            {getBreedName()}
                        </h3>
                        <p className="text-neutral/90">
                            {t("footer.description")}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            {t("footer.quickLinks")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to={`/${selectedBreed}`}
                                    className="hover:text-secondary transition-colors duration-200"
                                >
                                    {t("navigation.home")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${selectedBreed}/about`}
                                    className="hover:text-secondary transition-colors duration-200"
                                >
                                    {t("navigation.about")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${selectedBreed}/puppies`}
                                    className="hover:text-secondary transition-colors duration-200"
                                >
                                    {t("navigation.puppies")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${selectedBreed}/contact`}
                                    className="hover:text-secondary transition-colors duration-200"
                                >
                                    {t("navigation.contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            {t("footer.contactUs")}
                        </h4>
                        <div className="space-y-2">
                            <p>
                                Email:
                                <a
                                    className="hover:text-orange-500"
                                    href="mailto:palma.dj@gmail.com"
                                >
                                    {" "}
                                    palma.dj@gmail.com
                                </a>
                            </p>
                            <p>
                                {t("contact.info.phone")}:
                                <a
                                    className="hover:text-orange-500"
                                    href="tel:+38598897330"
                                >
                                    {" "}
                                    +385 98 897 330
                                </a>
                            </p>

                            <p>{t("contact.info.location")}: Đakovo, Croatia</p>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href={socialLinks.tiktok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-secondary transition-colors duration-200"
                                    aria-label="TikTok"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.78 4.5A6.37 6.37 0 0 0 15.66 16V8.73a8.19 8.19 0 0 0 4.93 1.76V7.04a4.84 4.84 0 0 1-1-.35z" />
                                    </svg>
                                </a>
                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-secondary transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-neutral/70">
                        © {new Date().getFullYear()} {getBreedName()}.{" "}
                        {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
