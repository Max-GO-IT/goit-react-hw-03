import css from './SearchBox.module.css'

const SearchBox = ({filter,change}) => {
   
    return(
            <>
             <p>Find contacts by name</p>
             <input type='text' onChange={change} value={filter} />
             </>
    )
}

export default SearchBox;