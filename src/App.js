import { useState } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import {useDebounce, useSearch} from "./hooks";
import Input from "./components/Input";

const App = () => {
    const [value, setValue] = useState('');
    const {articles} = useSearch(useDebounce(value, 500));

    return (
        <ReactAutocomplete
            items={articles}
            renderInput={Input}
            inputProps={{placeholder: 'Input a search term: '}}
            //shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderMenu={(children, value, style)=>(
                <div style={{...style}} className="input-suggestions">
                    {children}
                    <a href={`/search?query=${value}`} className="search-link">See all results</a>
                </div>

            )}
            renderItem={(item, highlighted) =>
                <div
                    key={item.id}
                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                >
                    {item.label}
                </div>
            }
            value={value}
            onChange={e => setValue( e.target.value )}
            onSelect={value => setValue(value)}
        />
    )
}

export default App;
