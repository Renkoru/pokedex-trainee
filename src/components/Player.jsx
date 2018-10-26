import React from 'react';

import { getRandom } from '../utils';
import Button from './Button.jsx';


function Ball() {
    const src = '../static/images/pokeball_1.gif';

    return <img
               src={src}
               width={30}
               height={30}
           />;
}


function Balls({ balls }) {
    return (
        <div style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            fontSize: '13px',
            height: '30px',
            alignItems: 'center',
        }}>
            {balls.slice(0, 4).map((ball, index) => <Ball key={index} />)}
            <div>
                {(balls.length > 4) ? `(${balls.length})` : null}
            </div>
        </div>
    );
}


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balls: [],
        };

        this.addBall= this.addBall.bind(this);
    }

    componentDidMount() {
        const speed = getRandom(10, false) + 5;
        console.log(`Generation speed: ${speed}`);

        this.timerID = setInterval(
            () => this.addBall(),
            speed * 1000
        );
    }

    addBall() {
        const { balls } = this.state;

        if (balls.length > 15) {
            return;
        }

        this.setState({
            balls: [...balls, {}]
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const { stringId, name, age, location } = this.props;
        const { balls } = this.state;

        return (
            <div
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    boxShadow: '2px 2px 3px #eee',
                    height: '242px',
                    width: '190px',
                    textAlign: 'center',
                    padding: '15px 15px',
                    margin: '5px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={{ fontWeight: 'bold' }}>
                    {`${name} : ${age}`}
                </div>

                <div
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        height: '120px',
                        padding: '15px 0px',
                    }}
                >
                    <img
                        style={{
                            height: '100%',
                        }}
                        src={`../static/images/trainers/${stringId}.gif`}
                    />
                </div>

                <Balls balls={balls} />

                <div style={{ marginTop: 'auto' }}>
                    {`Loc: ${location}`}
                </div>

                <Button
                    title="Say Hi!"
                    onClick={() => alert('Hi Mates!')}
                />
            </div>
        );
    }
}

export default Player;
