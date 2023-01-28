import React from "react";

export interface Category {
    id: number|string;
    title: string;
}

export const CategoryPills = ({categories, containerClassName}: {categories: Array<Category>, containerClassName: string}) => {

    return (
        <div className={`${containerClassName}`}>
            {
                categories.map((category) => {
                    return (
                        <button key={category.id} className="mr-3 mb-3 inline-block rounded-full  bg-[#484848] px-[12px] py-[6px] leading-5 text-white md:ml-0">
                            {category.title}
                        </button>
                    )
                })
            }
        </div>
    )
}
