import { render, fireEvent, cleanup } from 'react-testing-library';
// import 'react-testing-library/extend-expect';
// this adds custom expect matchers

import Pokemon from '../Pokemon';

afterEach(cleanup);

describe('Pokemon', () => {
  it('has pokemon name', () => {
    const name = 'Pikapika';
    const props = {
      id: 1,
      pid: 2,
      name,
      imageUrl: '',
      onChange: jest.mock(),
      onRemove: jest.mock(),
      isActive: false,
      onClick: jest.mock(),
    };
    const { getByText } = render(<Pokemon {...props} />);

    expect(getByText(name).textContent).toBe(name);
  });

  it('on click close triggers onRemove property', () => {
    const name = 'Pikapika';
    const onRemove = jest.fn();
    const id = 1;

    const props = {
      id,
      pid: 2,
      name,
      imageUrl: '',
      onChange: jest.fn(),
      onRemove,
      isActive: true,
      onClick: jest.fn(),
    };
    const { container } = render(<Pokemon {...props} />);

    fireEvent.click(container.querySelector('[title="Remove"]'));

    expect(onRemove).toHaveBeenLastCalledWith(id);
  });

  it('renders correctly', () => {
    const name = 'Pikapika';
    const props = {
      id: 1,
      pid: 2,
      name,
      imageUrl: '/image/poke/01.gif',
      onChange: jest.mock(),
      onRemove: jest.mock(),
      isActive: false,
      onClick: jest.mock(),
    };
    const { container } = render(<Pokemon {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
