export const Filter = ({handleChange}) => {
    return <>
    <h4>Filter contacts by name</h4>
    <input type="text" name="filter" onChange={handleChange} />
    </>
    
}