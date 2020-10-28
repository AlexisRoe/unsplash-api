import ReactDOM from 'react-dom';
import FavoriteImage from './FavoriteImage';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FavoriteImage photoId='n1B2cBi141U' />, div);
});

it('renders img from unsplash', () => {
    render(<FavoriteImage photoId='n1B2cBi141U' />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src.startsWith('https://source.unsplash.com/n1B2cBi141U')).toBeTruthy();
});
