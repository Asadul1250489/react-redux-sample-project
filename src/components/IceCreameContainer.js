import React from 'react'
import {connect} from 'react-redux'
import {buyIceCreame} from '../redux'



function IceCreameContainer(props){
return(
    <div>
        <h2>
            Number of iceCreames -{props.numOfIceCreams}
        </h2>
        <button onClick={props.buyIceCreame}>Buy IceCreames</button>
    </div>
)
}

const mapStateToProps=state =>{
    return{
        numOfIceCreams: state.iceCreame.numOfIceCreams
    }
}
const mapDispatchToprops=dispatch=>{
    return{
        buyIceCreame:() => dispatch(buyIceCreame())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToprops
    ) (IceCreameContainer)