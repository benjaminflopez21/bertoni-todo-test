import React from 'react';
import { render } from '@testing-library/react';
import NotTaskComponent from '../ui/components/not-task-component/NotTaskComponent';

test('No task label', () => {
  const { getByText } = render(<NotTaskComponent />);
  const element = getByText(/You don't have any created task/i);
  expect(element).toBeInTheDocument();
});
