import React,{Component} from "react";
import { Link } from 'react-router';

export default class Header extends Component {
    constructor(){
        super();
        this.state={
            current:0
        };
        this.itemNav=this.itemNav.bind(this)
    }

    handleClick(i){
        this.setState(
            {
                current:i
            }
        )
    }

    itemNav(i){
        return i === this.state.current ? 'active' : '';
    }


    render() {
        const tabs = [
            {title: '新歌', href: '/song'},
            {title: '排行', href: '/rank'},
            {title: '热歌', href: '/hot'},
            {title: '歌手', href: '/singer'},
        ];
        const links = tabs.map((item, i)=>(
            <li key={i} onClick={()=>this.handleClick(i)} className={ this.itemNav(i) }><Link to={item.href}>{item.title}</Link></li>
        )  );
        return (
            <div className="App ">
                <ul className="nav">
                    {links}
                </ul>
                <div className="router">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

