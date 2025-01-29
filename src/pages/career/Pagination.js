import React, { useMemo } from 'react';
import { t } from 'i18next';
import './PaginationStyle.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);

  return (
    <div className="pagination-buttonbox">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        ＜ {t('previous')}
      </button>

      {pages.map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? 'active' : ''}>
          {page}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {t('next')} ＞
      </button>
    </div>
  );
};

export default Pagination;
