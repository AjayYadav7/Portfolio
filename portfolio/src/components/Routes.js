import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigationbar from '../container/Navigationbar'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import Skills from './Skills'
const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigationbar />

                <Switch>
                    <Route  exact path="/"  component={Home} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/skills" component={Skills} />

                    {/* <Home />
                    <About />
                    <Skills />
                    <Services />
                    <Contact /> */}
                    {/* <Route path="navbar" component={Navbar} /> */}
                </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Routes
