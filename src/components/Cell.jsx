export function Cell(props) {
    const { header, children } = props;
    if (header) {
        return <th>{children}</th>;
    }
    return <td>{children}</td>;
}
