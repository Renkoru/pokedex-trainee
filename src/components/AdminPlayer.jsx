import React from 'react';

import { Button, Card, Box, Flex, Image } from '../components';


class AdminPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.setMeAsCurrent= this.setMeAsCurrent.bind(this);
    }

    setMeAsCurrent() {
        this.props.onSetCurrentPlayer(this.props.stringId);
    }

    render() {
        const { stringId, name, age, location, image } = this.props;

        return (
            <Card
              bg='#fff'
              border='1px solid #ccc'
              boxShadow='2px 2px 3px #eee'
              /* width={190} */
              p={15}
              my="5px"
              mx={20}
              css={{
                  /* height: '260px', */
                  textAlign: 'center',
              }}
            >
              <Flex alignItems="center">
                <Box
                  py="2px"
                  css={{
                      height: 70,
                      width: 70,
                  }}
                >
                  <Image
                    css={{
                        height: '100%',
                    }}
                    src={image || `../static/images/trainers/${stringId}.gif`}
                  />
                </Box>

                <Box ml="auto">
                  <Box fontWeight="bold">
                    {`${name}`}
                  </Box>
                  <Box fontWeight="bold">
                    {`${location}`}
                  </Box>
                  <Button onClick={this.setMeAsCurrent}>
                    Set Current
                  </Button>
                </Box>
              </Flex>
            </Card>
        );
    }
}

export default AdminPlayer;
