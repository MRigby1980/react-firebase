import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content, List, ListItem} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';

class App extends Component {
    constructor() {
        super();
        this.state = {
            reportListToggle: false,
            listDisplay: "none",
        }
    }

    listToggle = () => {
        this.setState({listToggle: !this.state.listToggle});

        if(this.state.listToggle == true) {
          this.state.listDisplay = "inline-block";
        }
        else {
            this.state.listDisplay = "none";
        }
    };

    render() {
        return (
            <div>
                <Layout>
                    <Header title="React Firebase App" scroll style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                        <Navigation>
                            <Link to="/Home">Home</Link>
                            <Link to="/About">About</Link>
                            <Link to="/Account">Account</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="React Test App" style={{marginTop: "65px"}}>
                        <Navigation>
                            <Link to="/Home">Home</Link>
                            <Link to="/About">About</Link>
                            <Link to="/Account">Account</Link>
                            <Link onClick={this.listToggle} to="#">Reports</Link>
                              <List style={{display: this.state.listDisplay}}>
                                  <ListItem><Link to="#">Test 1</Link></ListItem>
                                  <ListItem><Link to="#">Test 2</Link></ListItem>
                                  <ListItem><Link to="#">Test 3</Link></ListItem>
                              </List>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Routes />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
