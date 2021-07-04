import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
import { FormativeAction } from './pages/FormativeAction';

// const Index = () => {
//     return (
//       <FormativeAction />
//     )
// }


// export default Index;

if (document.getElementById('formative')) {
    ReactDOM.render(<FormativeAction />, document.getElementById('formative'));
}
