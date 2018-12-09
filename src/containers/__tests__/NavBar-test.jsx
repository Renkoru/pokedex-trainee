import { NavBarComponent } from "../NavBar.jsx";
import { Heading } from '../../components';
import { shallow } from 'enzyme';


describe('NavBar', () => {
    it('renders app title correctly', () => {
        const props = {
            currentPlayer: {
                name: 'Lilly',
            }
        };

        const component = shallow(<NavBarComponent {...props} />);

        expect(component.find(Heading).at(0).text()).toEqual('Players net.');
    });

    it('renders correctly', () => {
        const props = {
            currentPlayer: {
                name: 'Lilly',
                location: 'Moscow'
            }
        };

        const component = shallow(<NavBarComponent {...props} />);

        expect(component).toMatchSnapshot();
    });
});
