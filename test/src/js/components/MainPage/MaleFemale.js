import React from "react";
import boy from "../../../../src/images/boy.png"
import girl from "../../../../src/images/girl.png"

class MaleFemale extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            gender:[]
        }
    }
    chooseMale(){
        this.state.gender.push("male");
        this.props.step(2);
        this.props.gender("male")
    }
    chooseFemale(){
        this.state.gender.push("female");
        this.props.step(2);
        this.props.gender("female")
    }
    render() {
        return (
            <div>
                <div className={'choicebox'}>
                    <div className={'center'}>
                        <div className={'btn boyOrGirl'} onClick={() => {
                            this.chooseMale()
                        }}>
                            <p className={'text'}>BOY</p>
                            <img src={boy}/>
                        </div>
                    </div>

                    <div>
                        <p className={'titleQuestion'}>Are you:</p>
                        <p className={'titleQuestion'}>or</p>
                    </div>

                    <div className={'center'}>
                        <div className={'btn  boyOrGirl'} onClick={() => {
                            this.chooseFemale()
                        }}>
                            <p className={'text'}>GIRL</p>
                            <img src={girl}/>
                        </div>
                    </div>
                </div>
            </div>
        )}}
export default MaleFemale;