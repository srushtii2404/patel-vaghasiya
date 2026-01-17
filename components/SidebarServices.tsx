"use client";

import Link from "next/link";

export default function Sidebar({ services }: { services: any[] }) {
    return (
        <aside className="hidden lg:block w-[380px]">
            <div className="sticky top-24">

                <div className="rounded-2xl bg-main-dark backdrop-blur-xl shadow-[0_8px_28px_rgba(0,0,0,0.08)] 
                border border-gray-200 p-6 transition-all">

                    <h3 className="text-2xl font-bold text-white mb-6">
                        Our Services
                    </h3>

                    <nav className="space-y-3 max-h-[320px] overflow-y-auto custom-scroll pr-1">
                        {services.map((s, i) => (
                            <Link
                                key={i}
                                href={s.href}
                                className="
                                group flex items-center gap-4 w-full
                                rounded-xl border border-gray-200 
                                py-4 px-4 bg-gradient-to-r from-white to-gray-50

                                hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]
                                hover:border-main hover:bg-white

                                transition-all duration-200 cursor-pointer
                                "
                            >
                                <span className="text-2xl">{s.icon}</span>
                                <span className="font-medium text-gray-800 group-hover:text-main-dark">
                                    {s.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                </div>
            </div>
        </aside>
    );
}
