const TablesFilter = (props) => {
    const dropdownHanlder = event => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <>
            <label>Filter by Status</label>
            <select name="option" id="option" value={props.selected} onChange={dropdownHanlder}>
                <option value="Open">Open</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
        </>
    )
}

export default TablesFilter;