import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
    selectedBreed: "schnauzer" | "shiba";
    setSelectedBreed: Dispatch<SetStateAction<"schnauzer" | "shiba">>;
}

const Navbar = ({ selectedBreed, setSelectedBreed }: NavbarProps) => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Update selected breed based on URL
    useEffect(() => {
        const breed = location.pathname.split("/")[1];
        if (breed === "schnauzer" || breed === "shiba") {
            setSelectedBreed(breed);
        }
    }, [location]);

    const handleBreedChange = (breed: "schnauzer" | "shiba") => {
        setSelectedBreed(breed);
        // Get the current path segments
        const pathSegments = location.pathname.split("/");
        // Replace the breed segment while keeping the rest of the path
        pathSegments[1] = breed;
        // Navigate to the new path
        navigate(pathSegments.join("/"));
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-auto md:h-16 py-4 md:py-0">
                    {/* Mobile layout (flex-col) and desktop layout (flex-row) */}
                    <div className="flex md:flex-row flex-col items-center flex-1 md:space-y-0 space-y-6">
                        {/* Logo centered on mobile */}
                        <Link
                            to={`/${selectedBreed}`}
                            className="flex items-center md:mr-4 mx-auto md:mx-0 pt-2 md:pt-0"
                        >
                            <span className="font-display text-2xl font-bold text-primary">
                                {"Elite Dogs"}
                            </span>
                        </Link>
                        {/* Container for breed switch and mobile menu */}
                        <div className="flex w-full md:w-auto items-center justify-between space-x-4">
                            {/* Breed switch - full width on mobile */}
                            <div className="relative inline-flex h-10 rounded-full bg-gray-200 p-1 shadow-inner flex-1 md:flex-none justify-center">
                                <button
                                    onClick={() =>
                                        handleBreedChange("schnauzer")
                                    }
                                    className={`relative inline-flex items-center justify-center rounded-full px-6 py-1.5 text-sm font-semibold transition-all duration-200 ${
                                        selectedBreed === "schnauzer"
                                            ? "bg-white text-primary shadow-md"
                                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                    }`}
                                >
                                    Miniature Schnauzer
                                </button>
                                <button
                                    onClick={() => handleBreedChange("shiba")}
                                    className={`relative inline-flex items-center justify-center rounded-full px-6 py-1.5 text-sm font-semibold transition-all duration-200 ${
                                        selectedBreed === "shiba"
                                            ? "bg-white text-primary shadow-md"
                                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                    }`}
                                >
                                    Shiba Inu
                                </button>
                            </div>
                            {/* Mobile Menu Button */}
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-primary p-2"
                                    aria-label={
                                        isMenuOpen ? "Close menu" : "Open menu"
                                    }
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        {isMenuOpen ? (
                                            <path d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path d="M4 6h16M4 12h16M4 18h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink to={`/${selectedBreed}`}>
                            {t("navigation.home")}
                        </NavLink>
                        <NavLink to={`/${selectedBreed}/about`}>
                            {t("navigation.about")}
                        </NavLink>
                        <NavLink to={`/${selectedBreed}/gallery`}>
                            {t("navigation.gallery")}
                        </NavLink>
                        <NavLink to={`/${selectedBreed}/puppies`}>
                            {t("navigation.puppies")}
                        </NavLink>
                        <NavLink to={`/${selectedBreed}/contact`}>
                            {t("navigation.contact")}
                        </NavLink>
                        <LanguageSwitcher />
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                            <MobileNavLink
                                to={`/${selectedBreed}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t("navigation.home")}
                            </MobileNavLink>
                            <MobileNavLink
                                to={`/${selectedBreed}/about`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t("navigation.about")}
                            </MobileNavLink>
                            <MobileNavLink
                                to={`/${selectedBreed}/gallery`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t("navigation.gallery")}
                            </MobileNavLink>
                            <MobileNavLink
                                to={`/${selectedBreed}/puppies`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t("navigation.puppies")}
                            </MobileNavLink>
                            <MobileNavLink
                                to={`/${selectedBreed}/contact`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t("navigation.contact")}
                            </MobileNavLink>
                            <div className="px-3 py-2 border-t border-gray-200">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const NavLink = ({
    to,
    children,
}: {
    to: string;
    children: React.ReactNode;
}) => (
    <Link
        to={to}
        className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
    >
        {children}
    </Link>
);

const MobileNavLink = ({
    to,
    onClick,
    children,
}: {
    to: string;
    onClick: () => void;
    children: React.ReactNode;
}) => (
    <Link
        to={to}
        onClick={onClick}
        className="block px-3 py-2 text-primary hover:text-secondary transition-colors duration-200 font-medium"
    >
        {children}
    </Link>
);

export default Navbar;
