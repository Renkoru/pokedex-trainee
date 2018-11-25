import React from 'react';

import { Player as PlayerModel } from '../models';
import { Button, Flex, Box, Image } from '../components';
import FormField from './FormField.jsx';
import { allImagesLinks } from '../utils';


class PlayerAdd extends React.Component {
    constructor(props) {
        super(props);

        this.nameKey = 'name';
        this.locationKey = 'location';
        this.ageKey = 'age';

        this.state = {
            [this.nameKey]: '',
            [this.locationKey]: '',
            [this.ageKey]: 0,

            selectedImage: null,
        };

        this.onImageClick = this.onImageClick.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onPlayerAdd = this.onPlayerAdd.bind(this);
        this.onRandomize = this.onRandomize.bind(this);
    }

    onImageClick(event) {
        this.setState({ selectedImage: event.currentTarget.src });
    }

    onFieldChange(event) {
        const { value } = event.currentTarget;
        const { name: fieldName } = event.currentTarget;

        this.setState({ [fieldName]: value });
    }

    onPlayerAdd() {
        const player = PlayerModel({
            name: this.state[this.nameKey],
            age: this.state[this.ageKey],
            location: this.state[this.locationKey],
            image: this.state.selectedImage,
        });

        this.props.onAddPlayer(player);
        this.props.history.push('/admin');
    }

    onRandomize() {
        const allImages = allImagesLinks();
        const randomIndex = (Math.floor((Math.random() * 1000) + 1) % allImages.length) + 1;
        const image = allImages[randomIndex];
        const randomPlayer = PlayerModel({ image });

        this.setState({
            [this.nameKey]: randomPlayer.name,
            [this.locationKey]: randomPlayer.location,
            [this.ageKey]: randomPlayer.age,

            selectedImage: randomPlayer.image,
        });
    }

    render() {
        const { selectedImage } = this.state;

        return (
            <Flex>
                <Box width={1/4}>
                    <Flex flexDirection="column" alignItems="center">
                        <FormField
                            label="Name:"
                            name={this.nameKey}
                            value={this.state[this.nameKey]}
                            width={270}
                            onChange={this.onFieldChange}
                        />
                        <FormField
                            label="Age:"
                            name={this.ageKey}
                            value={this.state[this.ageKey]}
                            type="number"
                            width={270}
                            onChange={this.onFieldChange}
                        />
                        <FormField
                            label="Location:"
                            name={this.locationKey}
                            value={this.state[this.locationKey]}
                            width={270}
                            onChange={this.onFieldChange}
                        />
                        <Box
                            my={10}
                            css={{
                                width: 250,
                                height: 250,
                                border: "1px dashed green",
                            }}
                        >
                            {selectedImage
                             ? <Image css={{ height: '100%' }} src={selectedImage} />
                             : "Select a Pic"}
                        </Box>
                        <Flex>
                            <Button onClick={this.onRandomize}>
                                Randomize
                            </Button>
                            <Button ml={15} onClick={this.onPlayerAdd}>
                                Add Player
                            </Button>
                        </Flex>
                    </Flex>
                </Box>

                <Box width={3/4}>
                    {allImagesLinks().map((src) => (
                        <Image
                            css={{
                                '&:hover': {
                                    cursor: 'pointer',
                                }
                            }}
                            key={src}
                            src={src}
                            onClick={this.onImageClick}
                        />
                    ))}
                </Box>
            </Flex>
        );
    }
}


export default PlayerAdd;
