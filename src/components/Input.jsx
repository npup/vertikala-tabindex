export function Input(props) {
    const { label, value, tabIndex } = props;
    return (
        <input tabIndex={tabIndex} defaultValue={value} placeholder={label} />
    );
}
