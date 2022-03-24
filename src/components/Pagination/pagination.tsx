import React from 'react';
import { usePagination, DOTS } from './usePagination';
import { PaginationContainer, PaginationDots, PaginationItem } from './pagination.styles';
import { PaginationProps } from './paginationProps';

const Pagination = ({
                        onPageChange,
                        totalPageCount,
                        siblingCount = 1,
                        currentPage,
                        previousLabel,
                        nextLabel,
                    }: PaginationProps) => {

    const paginationRange = usePagination({
        currentPage,
        totalPageCount,
        siblingCount,
    });

    if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    const randomNumber = () => {
        return Math.floor(Math.random() * (100 - 1) + 1);
    };

    let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 1;
    return (
        <PaginationContainer>
            {previousLabel ? <span className={currentPage === 1 ? 'disabled' : ''}
                                   onClick={onPrevious}>{previousLabel}</span> : <PaginationItem disabled={currentPage === 1}
                                                               onClick={onPrevious}>
                <div className="arrow left" />
            </PaginationItem>}
            {paginationRange?.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <PaginationDots key={`${pageNumber}-${randomNumber()}`}>&#8230;</PaginationDots>;
                }

                return (
                    <PaginationItem key={pageNumber} selected={pageNumber === currentPage}
                                    onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </PaginationItem>
                );
            })}
            {nextLabel ? <span className={currentPage === lastPage ? 'disabled' : ''}
                               onClick={onNext}>{nextLabel}</span> : <PaginationItem disabled={currentPage === lastPage}
                                                                                         onClick={onNext}>
                <div className="arrow right" />
            </PaginationItem>}
        </PaginationContainer>
    );
};

export default Pagination;
