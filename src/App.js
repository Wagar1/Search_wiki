import Container from "./components/Container";
import Autocomplete from "./components/Autocomplete";
import React from "react";


const App = () => (
    <Container>
        {
            ({searchValue, onSearchChange, articles}) => <Autocomplete searchValue={searchValue} onSearchChange={onSearchChange}  articles={articles} />
        }
    </Container>
)

export default App;
