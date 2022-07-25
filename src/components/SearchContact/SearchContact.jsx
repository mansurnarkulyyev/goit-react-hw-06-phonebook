// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-action';

const SearchContact = () => {
  const searchValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        Find contact by name:
        <input
          type="text"
          name="filter"
          value={searchValue}
          required
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

// const SearchContact = ({ searchValue, handleChange }) => {
//   return (
//     <div className="searchWrap">
//       <label>
//         Find contact by name:
//         <input
//           type="text"
//           name="filter"
//           value={searchValue}
//           required
//           onChange={e => handleChange(e)}
//         />
//       </label>
//     </div>
//   );
// };

SearchContact.propTypes = {
  // searchValue: PropTypes.string.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default SearchContact;
