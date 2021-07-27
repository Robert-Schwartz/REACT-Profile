import MainNavigation from "./components/layout/MainNavigation";
import "./App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Container from "@material-ui/core/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Container maxWidth="xl" disableGutters={true}>
        <div>
          <MainNavigation />
          <Switch>
            <Route path="/" >
              <Home />
            </Route>
            <Route path="" exact>
              <Home />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/resume" exact>
              <Resume />
            </Route>
          </Switch>
        </div>
      </Container>
    </div>
  );
}

export default App;
