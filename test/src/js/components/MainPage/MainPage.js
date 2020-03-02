import React from "react";
import image from "../../../images/LeagueLogo.png";

class MainPage extends React.Component{

    render(){
        return (
            <div>
                <div>
                    <p className={'titleQuestion'}>Which</p>
                </div>
                <img alt={'league of legends logo'} src={image}/>
                <div>
                    <p className={'titleQuestion'}>champion are YOU?</p>
                </div>
                <div className={'center'}>
                    <div className={'btn start'} onClick={()=>{
                        this.props.step(1)
                    }}>
                        <p>START</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainPage;