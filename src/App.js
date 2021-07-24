import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Container from '@material-ui/core/Container';

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects/>;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Container maxWidth='xl' disableGutters={true}>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      {/* <div>{renderPage(currentPage)}</div> uncoment when pages are done!!!!!!!!!!!!!!!!! */}
      </Container>
    </div>
  );
}

export default App;