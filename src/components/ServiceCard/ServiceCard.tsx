import {ServiceCardProps} from "@/types/service-card.types";
import Link from "next/link";
import React from "react";

const ServiceCard = ({url, name, svg, theme}: ServiceCardProps) => {
    return (
        <Link href={url}>
            <div
                className={`w-full p-8 text-center transition-all  rounded shadow ${theme === "dark" ? "dark:bg-gray-700" : "bg-white"} hover:shadow-lg  ${theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-200"} `}>
                <div className="inline-block p-4 mb-4 bg-orange-400 rounded-full">
                    {svg}
                </div>
                <h5 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
                    {name}
                </h5>
            </div>
        </Link>
    );
};


export default ServiceCard;
