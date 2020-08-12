import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import App from '../client/index.jsx';
import ProductOrder from '../client/index.jsx';
import StatefulButtonColor from '../client/statefulButtonColor.jsx'

describe('App functionality', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<div className="app"></div>)).toBe(true);
  });

  it('should be selectable by id "app"', function() {
    expect(shallow(<App />).is('.app')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.app').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toEqual('$ LIMITED EDITION: Thunder (Dark Blue Upper / White Sole)SELECT SIZE:Size sold out?See Size Chart   SELECT A SIZE   Free shipping & 30-day returns, no questions asked HIGHLIGHTS');
  });
});
describe('ProductOrder functionality', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<ProductOrder />).contains(<div className="product_order"></div>)).toBe(true);
  });

  it('should be selectable by class "product_order"', function() {
    expect(shallow(<ProductOrder />).is('.product_order')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<ProductOrder />).find('.product_order').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<ProductOrder />).text()).toEqual('$ LIMITED EDITION: Thunder (Dark Blue Upper / White Sole)SELECT SIZE:Size sold out?See Size Chart   SELECT A SIZE   Free shipping & 30-day returns, no questions asked HIGHLIGHTS');
  });
});
// describe('StatefulButtonColor functionality', function() {
//   it('should render without throwing an error', function() {
//     expect(shallow(<StatefulButtonColor />).contains(<div className="color_button"></div>)).toBe(true);
//   });

//   it('should be selectable by class "button_color"', function() {
//     expect(shallow(<StatefulButtonColor />).is('.color_button')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<StatefulButtonColor />).find('.color_button').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<StatefulButtonColor />).text()).toEqual('');
//   });
// });