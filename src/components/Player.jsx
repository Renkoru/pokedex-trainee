import React from 'react';

import { Button, Card, Box, Flex, Image } from '../components';


function Ball() {
    const src = '../static/images/pokeball_1.gif';

    return <Image
             src={src}
             width={30}
             height={30}
           />;
}


function Balls({ balls }) {
    return (
        <Flex
          fontSize={13}
          fontSize={13}
          mx="auto"
          alignItems="center"
          css={{ height: '30px' }}
        >
          {balls.slice(0, 4).map((ball, index) => <Ball key={index} />)}
          <div>
            {(balls.length > 4) && `(${balls.length})`}
          </div>
        </Flex>
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
        const speed = this.props.randomGenerationSpeed;

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
        const { stringId, name, age, location, image } = this.props;
        const { balls } = this.state;

        return (
            <Card
              bg='#fff'
              border='1px solid #ccc'
              boxShadow='2px 2px 3px #eee'
              width={190}
              p={15}
              my="5px"
              mx={20}
              css={{
                  height: '260px',
                  textAlign: 'center',
              }}
            >
              <Flex flexDirection="column">
                <Box fontWeight="bold">
                  {`${name} : ${age}`}
                </Box>

                <Box
                  mx="auto"
                  py={15}
                  css={{
                      height: 120,
                  }}
                >
                  <Image
                    css={{
                        height: '100%',
                    }}
                    src={image || `../static/images/trainers/${stringId}.gif`}
                  />
                </Box>

                <Balls balls={balls} />

                <Box>
                  {`Loc: ${location}`}
                </Box>
              </Flex>
            </Card>
        );
    }
}

export default Player;
