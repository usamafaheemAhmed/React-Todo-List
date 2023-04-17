import React, {Component} from "react";
// import React from "react";


class ClassComponent extends Component{

    
    constructor(){
        super();
        this.state={
            count:0,
            name:"Usama Faheem",
            nameChange:1,
        }
    }

    incrementData(){
        this.setState(
            {
                count:this.state.count+1,
            }
        )
    }

    decrementData(){
        this.setState(
            {

                count:this.state.count-1,
            }
        )
    }


    NameChange(){
        if(this.state.nameChange===0){
            this.setState(
                {
                    name:"Uzair",
                    nameChange:1,
                }
            )
        }
        else{
            this.setState(
                {
                    name:"Usama Faheem",
                    nameChange:0,
                }
            )
        }

    }


    render(){
        return(
            <div className="col-md-12">
            <h3>How are you Bro {this.state.count}</h3>
            <h3>Your name is {this.state.name}</h3>
                
            <button type="add" className="btn btn-primary" onClick={()=>this.incrementData()}> Count ++</button>
            <button type="add" className="btn btn-primary ml-3" onClick={()=>this.decrementData()}> Count --</button>

            <button type="add" className="btn btn-primary ml-3" onClick={()=>this.NameChange()}> Name Change</button>


            </div>

        );
    }
}

export default ClassComponent;