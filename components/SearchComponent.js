import {InputAdornment, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import style from "./../styles/Alert.module.css"



const SearchComponent = ({formik,placeholder,searchedName,setSearchedName}) => {
    const handleSearch = (e) => {
        if (e.key==="Enter"){
            e.preventDefault()
            setSearchedName(formik.values.search)
        }

    };
    const handleSetSearchedName = () => {
        setSearchedName(formik.values.search)
        console.log(searchedName)
    }

    return (
       <>
           <TextField
               name="search"
               placeholder={placeholder}
               size="medium"
               sx={{
                   backgroundColor: "#ffffff",
                   border:"2px solid #FAB536",
                   '&::placeholder': {
                       textOverflow: 'ellipsis !important',
                       color: '#000000',
                       outline: 'none',
                   fontSize: "23px",
                       opacity: "0.5"
                   },

               }}
               className={style.search}
               fullWidth
               type={"search"}
               onChange={formik.handleChange}
               onKeyDown={handleSearch}
               InputProps={{
                   endAdornment: <InputAdornment position="end"><IconButton
                       sx={{p: '10px', color: "#000000"}}>
                       <SearchIcon onClick={handleSetSearchedName}/>
                   </IconButton></InputAdornment>
               }}
           />
       </>
    );
};

export default SearchComponent;