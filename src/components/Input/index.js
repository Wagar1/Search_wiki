import React from 'react';

import './styles.css';

const Input = ({placehoolder, ...rest}) => <input className="input-field" placeholder={placehoolder} {...rest} />

export default Input;