import React, { Component } from 'react';
import LastTrades from './LastTradesSection/LastTrades'
import Posturas from './Posturas/Posturas'
import './BodySection.css';

class BodySection extends Component {
    constructor(props) {
        super(props);
        
        this.state={
          btc_to_mxn:0,
          activeCoin:this.props.activeCoin,
          array_trades:this.props.array_trades,
          array_post:this.props.array_post,
          activeTimeTrade:this.props.activeTimeTrade
        }
        this.changeRangeGraphic=this.changeRangeGraphic.bind(this)
      }

      componentWillReceiveProps(nextProps){
          
        this.setState({activeCoin:nextProps.activeCoin, array_trades:nextProps.array_trades,array_post:nextProps.array_post ,activeTimeTrade:nextProps.activeTimeTrade})
      }


      changeRangeGraphic(range){
        console.log('Rango en body ' + JSON.stringify(range))
        this.props.changeRangeGraphic(range)
      }

  render() {
    return (
      <section className="body-section">
        <LastTrades array_trades={this.state.array_trades} activeCoin={this.state.activeCoin}/>
        <Posturas changeRangeGraphic={this.changeRangeGraphic} activeTimeTrade={this.state.activeTimeTrade}  array_post={this.state.array_post}/>

      </section>
    );
  }
}

export default BodySection;
