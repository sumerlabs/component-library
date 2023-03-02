import React from 'react';
import { usePagination, DOTS } from './usePagination';
import { PaginationProps } from './paginationProps';
import styles from './pagination.module.scss';

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
        <div className={styles.paginationContainer}>
            {previousLabel ? <span className={currentPage === 1 ? styles.disabled : ''}
                                   onClick={onPrevious}>{previousLabel}</span> :
                <div className={`${styles.paginationItem} ${currentPage === 1 && styles.disabled}`}
                                                               onClick={onPrevious}>
                    <div className={`${styles.arrow} ${styles.left}`} />
                </div>}
            {paginationRange?.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <div className={styles.paginationDots} key={`${pageNumber}-${randomNumber()}`}>&#8230;</div>;
                }

                return (
                    <div className={`${styles.paginationItem} ${pageNumber === currentPage && styles.disabled}`} key={pageNumber}
                                    onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </div>
                );
            })}
            {nextLabel ? <span className={currentPage === lastPage ? styles.disabled : ''}
                               onClick={onNext}>{nextLabel}</span> : <div className={`${styles.paginationItem} ${currentPage === lastPage && styles.disabled}`}
                                                                                         onClick={onNext}>
                <div className={`${styles.arrow} ${styles.right}`} />
            </div>}
        </div>
    );
};

export default Pagination;
