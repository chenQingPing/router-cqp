import React,{Component} from "react";
import {Router, Route,browserHistory} from 'react-router';
import NewSong from "./NewSong";
import Hot from "./Hot";
import Singer from "./Singer";
import Rank from "./Rank";
import  Header from "./Header"

export default class Main extends Component {
    render() {
        return (
            <Router  history={browserHistory}>
                <Route path='/' component={Header}>
                    <Route path='/song' component={NewSong}/>
                    <Route path='/rank' component={Rank}/>
                    <Route path='/hot' component={Hot}/>
                    <Route path='/singer' component={Singer}/>
                </Route>
            </Router>
        )
    }
}
