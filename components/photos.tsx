"use client";
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image';

export default function Photos({ gallery }: { gallery: string[] }) {
    const [selectedId, setSelectedId] = useState<string>("");
    console.log(selectedId)
    return (
        <motion.section className="grid grid-cols-2 md:grid-cols-8 gap-2 w-full h-auto">
            {gallery.map((g, idx: number) => (
                <motion.div key={idx} className=" w-full "
                    onClick={() => setSelectedId(String(idx))}
                    initial={{ scale: 1, zIndex: 1 }}
                    animate={{ scale: selectedId === String(idx) ? 1.2 : 1 }} // Increase scale on selected card
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={g}
                        alt={`Gallery Image ${idx + 1}`}
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg w-full h-full object-contain"
                    />
                </motion.div>
            ))}
            <AnimatePresence >
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId("")}
                    >
                        {gallery.map((u: string, idx: number) => (
                            String(idx) === selectedId && (
                                <motion.div
                                    className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                                    key={idx}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                >
                                    <motion.div className="relative ">
                                        <Image src={u} alt={u} className="object-contain w-full h-full rounded-lg" width={1500} height={200} loading="eager" />
                                        <motion.button
                                            className="absolute top-24 right-3 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                                            onClick={() => setSelectedId("")}
                                        >
                                            Zavřít
                                        </motion.button>

                                    </motion.div>
                                </motion.div>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    )
}

