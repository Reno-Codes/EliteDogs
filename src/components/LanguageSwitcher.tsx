import { useTranslation } from "react-i18next";

const languages = [
    { code: "hr", label: "Croatian" },
    { code: "en", label: "English" },
] as const;

interface LanguageSwitcherProps {
    isMobileMenu?: boolean;
}

const LanguageSwitcher = ({ isMobileMenu = false }: LanguageSwitcherProps) => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
    };

    if (isMobileMenu) {
        return (
            <div className="relative inline-flex h-10 rounded-full bg-gray-200 p-1 shadow-inner w-full justify-center">
                {languages.map((language) => (
                    <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`relative inline-flex items-center justify-center rounded-full px-6 py-1.5 text-sm font-semibold transition-all duration-200 ${
                            i18n.language === language.code
                                ? "bg-white text-primary shadow-md"
                                : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`}
                    >
                        {language.label}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <button
            onClick={() =>
                handleLanguageChange(i18n.language === "en" ? "hr" : "en")
            }
            className="flex items-center space-x-2 px-3 py-1 rounded-md hover:bg-white/20 transition-colors duration-200"
        >
            <span>
                {languages.find((lang) => lang.code === i18n.language)?.label}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
