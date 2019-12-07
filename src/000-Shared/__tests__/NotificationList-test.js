import { render, fireEvent } from 'test-utils';

import NotificationList from '../NotificationList';

jest.useFakeTimers();

describe('NotificationList', () => {
  it('renders correctly', () => {
    const { getAllByText } = render(
      <NotificationList
        notifications={[
          {
            id: 1,
            message: 'Pokemon caught',
          },
          {
            id: 2,
            message: 'Pokemon second caught',
          },
        ]}
        onClose={jest.fn()}
      />,
    );

    expect(document.getElementById('notification').firstChild).toMatchSnapshot();
    expect(getAllByText(/Pokemon/)).toHaveLength(2);
  });

  it('auto-close notifications after 5 seconds', () => {
    const onClose = jest.fn();
    const { getAllByText } = render(
      <NotificationList
        notifications={[
          {
            id: 1,
            message: 'Pokemon caught',
          },
          {
            id: 2,
            message: 'Pokemon second caught',
          },
        ]}
        onClose={onClose}
      />,
    );

    jest.advanceTimersByTime(5000);

    expect(onClose).toHaveBeenCalledTimes(2);
    expect(onClose).toHaveBeenNthCalledWith(1, 1);
    expect(onClose).toHaveBeenNthCalledWith(2, 2);
    expect(getAllByText(/Pokemon/)).toHaveLength(2);
  });

  it('calls onClose when close button is pressed', () => {
    const onClose = jest.fn();
    const { getAllByRole } = render(
      <NotificationList
        notifications={[
          {
            id: 1,
            message: 'Pokemon caught',
          },
          {
            id: 2,
            message: 'Pokemon second caught',
          },
        ]}
        onClose={onClose}
      />,
    );

    fireEvent.click(getAllByRole('button')[0], {});

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledWith(1);
  });
});
