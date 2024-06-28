import React from 'react'
import cls from './Pagination.module.scss'
import { Link } from 'react-router-dom'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onPageChange } = props;
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={cls.Pagination}>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`${cls.pageItem} ${number === currentPage ? cls.active : ''}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;