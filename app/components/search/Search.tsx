"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Search({}) {
    const pathName = usePathname();
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className="flex flex-row gap-4 justify-between items-center">
            <input
                type="text"
                className="input  input-primary w-full"
                placeholder="Nhập tên phim cần tìm"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Link
                href={`${pathName}/${searchValue}`}
                className="btn btn-primary"
            >
                Tìm kiếm
            </Link>
        </div>
    );
}

export default Search;
