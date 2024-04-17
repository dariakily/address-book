import { render, screen } from '../../../../unit-tests';
import { ContactCard } from '../contact-card';

const mockData = {
  id: '1',
  firstname: 'test1',
  lastname: 'test2',
  email: 'test@gmail.com'
};

describe('AddressbookCard component', () => {
  it('should render AddressbookCard', () => {
    render(<ContactCard data={mockData} />);
    const contact = screen.getByTestId('test-contact-card');
    expect(contact).toBeInTheDocument();
  });
});
