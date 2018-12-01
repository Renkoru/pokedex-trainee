import React from 'react';

import {
    Button,
    Card,
    Box,
    Flex,
    Image,
    Grid,
    GridItem,
} from '../components';

import MonsterList from '../containers/MonsterList.jsx';


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
        const { stringId, name, age, location, image, monsters } = this.props;
        const { balls } = this.state;

        return (
            <Card
              bg='#fff'
              border='1px solid #ccc'
              boxShadow='2px 2px 3px #eee'
              width="70%"
              my="20px"
              mx={20}
              css={{
                  height: '260px',
                  textAlign: 'center',
              }}
            >
              <Grid
                height="100%"
                gridTemplateColumns="1fr 2fr"
                gridTemplateRows="20px auto 20px"
              >
                <GridItem gridColumn="1/2" gridRow="1/2">
                  <Box fontSize="19px" bg="#015eaf" color="white">
                    {`${name} : ${age}`}
                  </Box>
                </GridItem>

                <GridItem gridColumn="1/2" gridRow="2/3">
                  <Box
                    mx="auto"
                    py={15}
                    css={{
                        height: 120,
                    }}
                  >
                    <Image
                      css={{
                          height: '170px',
                      }}
                      src={image || `../static/images/trainers/${stringId}.gif`}
                    />

                    <Balls balls={balls} />
                  </Box>
                </GridItem>

                <GridItem gridColumn="1/2" gridRow="3/4">
                  <Box bg="#99a99c" color="white">
                    {`${location}`}
                  </Box>
                </GridItem>

                <GridItem gridColumn="2/3" gridRow="1/4" overflow="auto" css={{ borderLeft: '1px dashed grey'}}>
                  <MonsterList monsters={monsters}/>
                </GridItem>
              </Grid>
            </Card>
        );
    }
}

export default Player;
