import React from 'react';
import { render } from '@testing-library/react';
import CreateTaskForm from '../ui/components/create-task-form/CreateTaskForm';

test('Task name input label is there', () => {
  const { getByText } = render(<CreateTaskForm 
    onCreate={()=>{}} />);
  const element = getByText(/Task Name/i);
  expect(element).toBeInTheDocument();
});

test('Completed checkbox label is there', () => {
  const { getByText } = render(<CreateTaskForm 
    onCreate={()=>{}} />);
  const element = getByText(/Completed/i);
  expect(element).toBeInTheDocument();
});

test('Save button is there', () => {
  const { getByText } = render(<CreateTaskForm 
    onCreate={()=>{}} />);
  const element = getByText(/Save/i);
  expect(element).toBeInTheDocument();
});
