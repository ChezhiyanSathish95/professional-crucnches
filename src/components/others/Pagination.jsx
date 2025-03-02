import React from 'react';
import PaginationData from '../../jsonData/PaginationData.json'
import { HashLink as Link } from 'react-router-hash-link'

const Pagination = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 pagi-area text-center">
                    <nav aria-label="navigation">
                        <ul className="pagination">
                            {PaginationData.map(pagination =>
                                <li className="page-item" key={`page-item ${pagination.id}`}>
                                    <Link className={`page-link ${pagination.activate}`} to={pagination.pageLink}><i className={pagination.icon}></i> {pagination.number}</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Pagination;