const SearchBar = ({ id, placeholder, value, changeHandle, type }) => {
  return (
    <div className="search-input">
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={changeHandle}
      />
    </div>
  );
};
export default SearchBar;
