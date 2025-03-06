import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BreedProps } from "../types";

interface Image {
    src: string;
    alt: string;
}

interface GalleryImages {
    adults: Image[];
    puppies: Image[];
}

const Gallery = ({ breed }: BreedProps) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<"adults" | "puppies">("adults");
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [galleryImages, setGalleryImages] = useState<GalleryImages>({
        adults: [],
        puppies: [],
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            setIsLoading(true);
            try {
                // Load all images
                const allImages = import.meta.glob(
                    "/src/assets/*/gallery/*/*.{jpg,jpeg,png,webp}"
                );

                const loadedAdults: Image[] = [];
                const loadedPuppies: Image[] = [];

                for (const path in allImages) {
                    // Check if the image belongs to the current breed
                    if (path.includes(`/assets/${breed}/gallery/`)) {
                        const module: any = await allImages[path]();
                        const image = {
                            src: module.default,
                            alt: path.split("/").pop()?.split(".")[0] || "",
                        };

                        // Sort into adults or puppies based on the path
                        if (path.includes("/adults/")) {
                            loadedAdults.push(image);
                        } else if (path.includes("/puppies/")) {
                            loadedPuppies.push(image);
                        }
                    }
                }

                setGalleryImages({
                    adults: loadedAdults,
                    puppies: loadedPuppies,
                });
            } catch (error) {
                console.error("Error loading images:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadImages();
    }, [breed]);

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.03 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-display font-bold text-primary mb-4">
                        {t("gallery.title")}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {t("gallery.subtitle")}
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        onClick={() => setActiveTab("adults")}
                        className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                            activeTab === "adults"
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {t("gallery.tabs.adults")}
                    </button>
                    <button
                        onClick={() => setActiveTab("puppies")}
                        className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                            activeTab === "puppies"
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {t("gallery.tabs.puppies")}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {isLoading
                            ? // Loading placeholders
                              Array.from({ length: 6 }).map((_, index) => (
                                  <motion.div
                                      key={`placeholder-${index}`}
                                      initial={{ opacity: 0.5 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      className="aspect-square bg-gray-200 rounded-lg animate-pulse"
                                  />
                              ))
                            : galleryImages[activeTab].map((image, index) => (
                                  <motion.div
                                      key={image.src}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.9 }}
                                      transition={{
                                          duration: 0.03,
                                          delay: index * 0.02,
                                      }}
                                      className="relative group cursor-pointer"
                                      onClick={() => setSelectedImage(image)}
                                  >
                                      <img
                                          src={image.src}
                                          alt={image.alt}
                                          className="w-full h-64 object-cover rounded-lg"
                                      />
                                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex items-center justify-center">
                                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                              {t("gallery.clickToView")}
                                          </span>
                                      </div>
                                  </motion.div>
                              ))}
                    </AnimatePresence>
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
