/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
import React, { ReactElement } from 'react'

interface Props {
  pageIndex: string;
  setPageIndex: React.Dispatch<React.SetStateAction<string>>;
}

function Pagination(props: Props): ReactElement {
  const pageIndex = Number(props.pageIndex)
  const {setPageIndex} = props

  return (
    <div className="mt-16 mb-12 flex items-center justify-center">
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex items-center gap-2">
          <li className="page-item">
            <a
              className="page-link btn relative mr-0"
              href="#"
              onClick={() =>
                pageIndex > 0
                  ? setPageIndex(String(pageIndex - 1))
                  : setPageIndex('0')
              }
            >
              Prev
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block rounded-full border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
              href="#"
              onClick={() =>
                pageIndex > 0
                  ? setPageIndex(String(pageIndex - 1))
                  : setPageIndex('0')
              }
            >
              {pageIndex > 1 ? String(pageIndex - 1) : ''}
            </a>
          </li>
          <li className="page-item active">
            <a
              className="page-link relative block rounded-full border-0 bg-indigo-600 py-1.5 px-3 text-white shadow-md outline-none transition-all duration-300 hover:bg-indigo-600 hover:text-white focus:shadow-md"
              href="#"
            >
              {pageIndex} <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block rounded-full border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
              href="#"
              onClick={() => setPageIndex(String(pageIndex + 1))}
            >
              {pageIndex + 1}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link btn relative mr-0"
              href="#"
              onClick={() => setPageIndex(String(pageIndex + 1))}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination
