
const Filter = ({value, onChange}) => {
    return (
    <label>
        Фільтр на ім'я: <input type='text' value={value} onChange={onChange} />
       </label>
       )
};

export default Filter;