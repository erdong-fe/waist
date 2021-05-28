import RowContext from './rowContext';

function Row(props) {
    const {
        children,
        gutter=0,
    } = props;

    const rowText = {
        gutter
    };

    return (
        <RowContext.Provider value={rowText}>
            <div className="row">
                {
                    children
                }
            </div>
        </RowContext.Provider>
    )
}

export default Row;
