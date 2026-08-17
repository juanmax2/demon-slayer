import  next  from '../../../assets/next.svg'
import prev from '../../../assets/prev.svg'
import './Pagination.css'

interface PaginationProps{
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void
}

export function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
    
    

    function handlePreviousPage(){
        onPageChange(currentPage - 1)
    }

    function handleNextPage() {
        onPageChange(currentPage + 1)
    }
    return(
        <>
           <div className='pag-container'>
                <button
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                    className='btn-pag'
                >
                    <img src={prev} alt="" />
                </button>
                {Array.from({ length: totalPages}, (_, index) => {
                    const pageNumber = index + 1
                    return (
                        <p
                        key={pageNumber}
                        className={pageNumber === currentPage ? 'active' : ''}
                        onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </p>
                    )
                })}
                <button
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                    className='btn-pag'
                    >
                        <img src={next} alt="" />
                </button>
           </div>
        </>
    )
}