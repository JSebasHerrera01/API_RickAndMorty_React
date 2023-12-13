import React from 'react';


export const Paginacion = ({ currentPage, totalPages, onPageChange, totalCount}) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    
    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (

        <>
            <nav className='divi'>
                <ul className="pagination justify-content-center flex-wrap pagination-lg">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handlePrevClick}>
                            Previous
                        </button>
                    </li>

                    {pageNumbers.map((number) => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => onPageChange(number)}>
                                {number}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handleNextClick}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>

            <p class="text-end text-muted">Total characters: {totalCount}</p>

        </>
    );
};




