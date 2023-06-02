export default function Pagination({ totalPages, onPageChange, currentPage }){
    const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  return (
    <nav className="pagination">
        <ul className="inline-flex -space-x-px">
            <li>
                <button onClick={() => onPageChange(currentPage-1)}
                className={`px-3 py-2 ml-0 leading-tight border rounded-l-lg border-custom-blue  ${(currentPage === 1)?'pointer-events-none dark:bg-blue-100 dark:text-gray-400':'dark:bg-blue-600 dark:border-custom-blue dark:text-gray-100 dark:hover:underline'}`}>
                    Previous
                </button>
            </li>

            {pageNumbers.map((pageNumber) => (
                <li key={pageNumber}>
                    <button onClick={() => onPageChange(pageNumber)} className={`px-3 py-2 leading-tight border  ${(currentPage === pageNumber)?'dark:bg-custom-blue dark:border-custom-blue dark:text-white dark:hover:underline':'dark:bg-white dark:border-custom-blue dark:text-black dark:hover:underline'}`}>{pageNumber}</button>
                </li>
            ))}

            <li>
                <button onClick={() => onPageChange(currentPage+1)}
                className={`px-3 py-2 ml-0 leading-tight border rounded-r-lg border-custom-blue  ${(currentPage === totalPages)?'pointer-events-none dark:bg-blue-100 dark:text-gray-400':'dark:bg-blue-600 dark:border-custom-blue dark:text-gray-100 dark:hover:underline'}`}>
                    Next
                </button>
            </li>
        </ul>
    </nav>
  );
}