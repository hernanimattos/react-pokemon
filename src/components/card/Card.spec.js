import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card';
describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
        const props = {
            id: '123456',
            name: ' name',
            sprites: {
                other: {
                    dream_world: {
                        front_default: 'url da imagem',
                    },
                },
            },
        };
        const CardShallow = mount(
            <Router>
                <Card {...props} />
            </Router>
        );
        console.log(CardShallow.find('img'), '---');
    });
});
