import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import App from '../client/index.jsx';
import ProductOrder from '../client/index.jsx';
import StatefulButtonColor from '../client/statefulButtonColor.jsx';
import StatefulButtonSize from '../client/statefulButtonSize.jsx';

describe('App functionality', () => {
  it('should render without throwing an error', function() {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
    //expect(shallow(<App />).contains(<div className="app"></div>)).toBe(true);
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
    const component = shallow(<ProductOrder />);
    expect(component).toMatchSnapshot;
    //expect(shallow(<ProductOrder />).contains(<div className="product_order"></div>)).toBe(true);
  });

  xit('should be selectable by class "product_order"', function() {
    expect(shallow(<ProductOrder />).is('.product_order')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<ProductOrder />).find('.product_order').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<ProductOrder />).text()).toEqual('$ LIMITED EDITION: Thunder (Dark Blue Upper / White Sole)SELECT SIZE:Size sold out?See Size Chart   SELECT A SIZE   Free shipping & 30-day returns, no questions asked HIGHLIGHTS');
  });
});
describe('StatefulButtonColor functionality', function() {
  it('should render without throwing an error', function() {
    const component = render(<StatefulButtonColor
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      onClick={() => { return undefined; }}
      colorway_name="Thunder (Dark Blue Upper / White Sole)"
      background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
      style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>);
    expect(component).toMatchSnapshot;
    //expect(shallow(<StatefulButtonColor />).contains(<div className="color_button"></div>)).toBe(true);
  });

  it('should be selectable by class "button_color"', function() {
    expect(shallow(<StatefulButtonColor
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      onClick={() => { return undefined; }}
      colorway_name="Thunder (Dark Blue Upper / White Sole)"
      background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
      style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>).is('.color_button')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<StatefulButtonColor
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      onClick={() => { return undefined; }}
      colorway_name="Thunder (Dark Blue Upper / White Sole)"
      background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
      style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>).find('.color_button').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<StatefulButtonColor
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      onClick={() => { return undefined; }}
      colorway_name="Thunder (Dark Blue Upper / White Sole)"
      background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
      style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>).text()).toEqual('');
  });
});
describe('StatefulButtonSize functionality', function() {
  it('should render without throwing an error', function() {
    const component = render(<StatefulButtonSize
      selected_size="8.5"
      onClick={() => { return undefined; }}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>);
    expect(component).toMatchSnapshot;
    //expect(shallow(<StatefulButtonColor />).contains(<div className="color_button"></div>)).toBe(true);
  });

  it('should be selectable by class "size_button"', function() {
    expect(shallow(<StatefulButtonSize
      selected_size="8.5"
      onClick={() => { return undefined; }}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>).is('.size_button')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<StatefulButtonSize
      selected_size="8.5"
      onClick={() => { return undefined; }}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>).find('.size_button').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<StatefulButtonSize
      selected_size="8.5"
      onClick={() => { return undefined; }}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>).text()).toEqual('');
  });
});