import React from 'react';
import { render } from '@testing-library/react';
import AppBar from '../ui/components/app-bar/AppBar';

test('Title is there', () => {
  const { getByText } = render(<AppBar anySelected={[]} 
    onCreate={()=>{}} 
    onUncomplete={()=>{}} 
    onComplete={()=>{}} 
    onDelete={()=>{}}/>);
  const element = getByText(/Todo - Bertoni/i);
  expect(element).toBeInTheDocument();
});
