import classNames from 'classnames';
import RowContext from './rowContext';
import { useContext } from 'react';

function Col(props) {
    const {
        children,
        span,
    } = props;
    const classObj = {
        [`col-${span}`]: span !== void 0
    }
    const classes = classNames('col', classObj);
    const { gutter } = useContext(RowContext);
    console.log(gutter);

    return (
        <div className={classes}>
            { children }
        </div>
    )
}

export default Col;
