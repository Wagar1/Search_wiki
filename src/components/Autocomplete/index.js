import ReactAutocomplete from "react-autocomplete";
import Input from "../Input";

const Autocomplete = ({articles, searchValue, onSearchChange}) => {
    return (
        <ReactAutocomplete
            items={articles}
            renderInput={Input}
            inputProps={{placeholder: 'Input a search term: '}}
            //shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderMenu={(children, value, style)=> {
                return articles && articles.length ?
                    (<div style={{...style}} className="input-suggestions">
                        {children}
                        <a href={`/search?query=${value}`} className="search-link">See all results</a>
                    </div>) : <></>

            }}
            renderItem={(item, highlighted) =>
                <div
                    key={item.id}
                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                >
                    {item.label}
                </div>
            }
            value={searchValue}
            onChange={onSearchChange}
        />
    )
}

export default Autocomplete;