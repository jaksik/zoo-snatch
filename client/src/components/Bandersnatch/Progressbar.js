import "./styles.css";
import React, { Component } from 'react';
import { Col, Row } from "reactstrap";

class Progressbar extends Component {
    state = {
        remainingTime: 100
    }

    componentDidMount() {
        setInterval(this.countDown, 100);
    }

    countDown = (percent, element) => {
        this.setState({ remainingTime: this.state.remainingTime - 1 })
    }


    render() {
        return (
            <div>
                <Row>
                    <Col md="6" style={{padding:"0"}}>
                        <div className="progressContainer">
                            <div className="progress-bar" id="barOne" style={{ width: `${this.state.remainingTime}%` }}></div>
                        </div>
                    </Col>
                    <Col md="6" style={{padding:"0"}}>
                        <div className="progressContainerTwo">
                            <div className="progress-barTwo" id="barTwo" style={{ width: `${this.state.remainingTime}%` }}></div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Progressbar;



// const progressBar = (props) => {


//     return (
//         <>
//             <h1>Time Remaining</h1>
//             <div className="progress-containerTwo">
//                 <div className="progress-barTwo" id="myBarTwo"></div>
//             </div>
//             <div className="progress-container">
//                 <div className="progress-bar" id="myBar"></div>
//             </div>
//             <div className="col-md-6">
//                 <div id="timerCountdownBarLeft">
//                     <div></div>
//                 </div>
//             </div>
//             <div className="col-md-6">
//                 <div id="timerCountdownBarRight">
//                     <div></div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default Progressbar;