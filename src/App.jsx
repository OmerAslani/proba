
import React,{Component} from "react";
import List from "./components/List";
import Registar from "./components/Register";
import Projects from "./components/Projects";
import "./App.css";



class App extends Component {


    // state ={
    //     name : "Danilo",
    //     data : [
    //         {project: "Project name", desc:"description", id:1},
    //         {project: "Project name", desc:"description", id:2},
    //         {project: "Project name", desc:"description", id:3},
    //         {project: "Project name", desc:"description", id:4}
    //     ]
          
        
    // }

    changeNameF = () =>{
        this.setState({
            name : "Milos"
        })
    }


    render(){
        return ( 
            <div>
                <List />
            </div>
        );

    }
   
}

export default App;