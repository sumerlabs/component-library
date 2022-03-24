import React from 'react';

export type PaginationProps = {
    totalPageCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    previousLabel?: string | React.ReactNode | undefined;
    nextLabel?: string | React.ReactNode | undefined;
    siblingCount?: number;
};