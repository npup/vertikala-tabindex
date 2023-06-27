export function Table(props) {
    const { children } = props;
    return (
        <table>
            <tbody>{children}</tbody>
        </table>
    );
}
