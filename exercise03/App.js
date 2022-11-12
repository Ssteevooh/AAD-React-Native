import React from 'react';
import ReactDOM from 'react-dom';

// Import global styles
import GlobalStyle from './components/GlobalStyle';

// Import routes
import Pages from './pages';

// Return the content of the application
const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Pages />
        </div>
    );
};

// Render application within the element with an ID of root
ReactDOM.render(<App />, document.getElementById('root'));