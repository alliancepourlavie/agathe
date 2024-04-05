import '../../../App.css';
import React, { Component } from "react";
import { MapInteractionCSS } from 'react-map-interaction';

import Carte from "../../../data/img/carte.png";



class Cartemob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                scale: .13,
                translation: { x: -380, y: -320 }
            }
        };
    }


    render() {
        const { scale, translation } = this.state;

        return (
            <>
                <div className="notepad" style={{ height: 800 }}>
                    <MapInteractionCSS
                        showControls
                        value={this.state.value}
                        onChange={(value) => this.setState({ value })}
                        minScale={0.07}
                        maxScale={3}
                        alt={"La carte du lac Kivu d'après les pêcheuses"}
                        btnClass={"aoa"}
                    >
                        <img src={Carte} />
                    </MapInteractionCSS>
                </div>
            </>
        )
    }
}

export default Cartemob;