"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
function Pagination({
    totalPages,
    href,
}: {
    totalPages: number;
    href?: string;
}) {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxDisplayedPages = 3;

        let startPage = Math.max(
            1,
            currentPage - Math.floor(maxDisplayedPages / 2)
        );
        let endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);
        startPage = Math.max(1, endPage - maxDisplayedPages + 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <Link
                    href={`${href}page=${i}`}
                    key={i}
                    className={
                        i === currentPage
                            ? "btn-active btn btn-sm"
                            : "btn btn-sm"
                    }
                    onClick={() => handlePageClick(i)}
                >
                    <motion.p>{i}</motion.p>
                </Link>
            );
        }

        pageNumbers.push(
            <div key={"..."} className={"btn btn-sm"}>
                <p>{"..."}</p>
            </div>
        );
        if (currentPage < totalPages) {
            pageNumbers.push(
                <Link
                    key={"last"}
                    className={"btn btn-sm"}
                    href={`${href}page=${totalPages}`}
                    onClick={() => handlePageClick(totalPages)}
                >
                    <button>{totalPages}</button>
                </Link>
            );
        }

        if (currentPage >= maxDisplayedPages) {
            pageNumbers.unshift(
                <p key={"dot"} className={"btn btn-sm"}>
                    <button>...</button>
                </p>
            );
        }
        if (currentPage >= maxDisplayedPages) {
            pageNumbers.unshift(
                <Link
                    href={`${href}page=1`}
                    key={"frist"}
                    className={"btn btn-sm"}
                    onClick={() => handlePageClick(1)}
                >
                    <button>1</button>
                </Link>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="btn-group">
            <Link
                href={`${href}page=${currentPage - 1}`}
                className={`btn btn-sm ${currentPage === 1 && "disabled"}`}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                {"<"}
            </Link>
            {renderPageNumbers()}
            <Link
                href={`${href}page=${currentPage + 1}`}
                className={`btn btn-sm ${
                    currentPage === totalPages && "disabled"
                }`}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                {">"}
            </Link>
        </div>
    );
}

export default Pagination;
