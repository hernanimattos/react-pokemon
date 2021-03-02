import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../../store/actions';

import './Pagination.scss';

const mapStateToProps = (state) => {
    return {
        next: state.next,
        previous: state.previous,
    };
};

const mapStateToDispatch = (dispatch) => {
    return {
        changePage: (url) => dispatch(changePage(url)),
    };
};

const PaginationConnect = ({ next, previous, changePage }) => {
    const changePageMiddleware = (direction) => {
        const dir = {
            next: next,
            previous: previous,
        };

        return changePage(dir[direction]);
    };
    return (
        <footer className="footer">
            <button
                className="prev"
                onClick={() => changePageMiddleware('previous')}
            >
                Anterior
            </button>
            <button
                className="next"
                onClick={() => changePageMiddleware('next')}
            >
                Próximo
            </button>
        </footer>
    );
};

const Pagination = connect(
    mapStateToProps,
    mapStateToDispatch
)(PaginationConnect);

export default Pagination;
