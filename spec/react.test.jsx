import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import App from '../client/index.jsx';
import ProductOrder from '../client/index.jsx';
import StatefulButtonColor from '../client/statefulButtonColor.jsx';
import StatefulButtonSize from '../client/statefulButtonSize.jsx';
import StatefulCartButton from '../client/statefulCartButton.jsx';
import ProductIntro from '../client/ProductIntro'

const clickFn = jest.fn();

describe('App functionality', () => {
  it('should render without throwing an error', function() {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
    //expect(shallow(<App />).contains(<div className="app"></div>)).toBe(true);
  });

  it('should be selectable by id "app"', function() {
    expect(shallow(<App />).is('.app')).toBe(true);
  });

  it('should render and mount properly', function() {
    const component = mount(<App />);
    expect(component).toMatchSnapshot();
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.app').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toEqual('$ LIMITED EDITION: Thunder (Dark Blue Upper / White Sole)SELECT SIZE:Size sold out?See Size Chart   SELECT A SIZE   Free shipping & 30-day returns, no questions asked HIGHLIGHTS');
  });
});
describe('ProductIntro functionality', () => {
  it('should render without throwing an error', function() {
    const component = shallow(<ProductIntro />);
    expect(component).toMatchSnapshot();
    //expect(shallow(<App />).contains(<div className="app"></div>)).toBe(true);
  });

  it('should be selectable by id "product_intro"', function() {
    expect(shallow(<ProductIntro />).is('#product_intro')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<ProductIntro />).find('#product_intro').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<ProductIntro />).text()).toEqual('$ ');
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
  it('should call the click function', function() {
    const testState = {
      blizzardx8Inventory: 0,
      blizzardx9Inventory: 0,
      blizzardx10Inventory: 0,
      blizzardx11Inventory: 1,
      blizzardx12Inventory: 0,
      blizzardx13Inventory: 4,
      blizzardx14Inventory: 1,
      blizzardx85Inventory: 1,
      blizzardx95Inventory: 0,
      blizzardx105Inventory: 2,
      blizzardx115Inventory: 2,
      blizzardx125Inventory: 4,
      blizzardx135Inventory: 3,
      blusterx8Inventory: 0,
      blusterx9Inventory: 3,
      blusterx10Inventory: 0,
      blusterx11Inventory: 2,
      blusterx12Inventory: 1,
      blusterx13Inventory: 2,
      blusterx14Inventory: 2,
      blusterx85Inventory: 2,
      blusterx95Inventory: 2,
      blusterx105Inventory: 3,
      blusterx115Inventory: 3,
      blusterx125Inventory: 4,
      blusterx135Inventory: 3,
      careGuide: "Aut sunt perferendis corrupti numquam ipsa voluptate. Tempore voluptas magnam minus nostrum qui debitis. Laboriosam optio qui omnis quia facere occaecati. Laudantium deserunt cupiditate saepe dolorem dolores impedit.",
      coreFeatures: "Quo voluptates eaque nisi expedita autem dolores. Quae provident ducimus. Qui autem incidunt consequatur in sit asperiores ea. Veritatis reiciendis nulla iste ad nihil non ut minus reprehenderit. Est quo modi eum voluptatem consequuntur incidunt fugiat sed sit. Molestias accusamus et repellendus provident.",
      cyclonex8Inventory: 2,
      cyclonex9Inventory: 4,
      cyclonex10Inventory: 2,
      cyclonex11Inventory: 0,
      cyclonex12Inventory: 3,
      cyclonex13Inventory: 1,
      cyclonex14Inventory: 3,
      cyclonex85Inventory: 0,
      cyclonex95Inventory: 2,
      cyclonex105Inventory: 3,
      cyclonex115Inventory: 0,
      cyclonex125Inventory: 1,
      cyclonex135Inventory: 4,
      flamex8Inventory: 4,
      flamex9Inventory: 3,
      flamex10Inventory: 3,
      flamex11Inventory: 0,
      flamex12Inventory: 3,
      flamex13Inventory: 0,
      flamex14Inventory: 2,
      flamex85Inventory: 2,
      flamex95Inventory: 0,
      flamex105Inventory: 4,
      flamex115Inventory: 4,
      flamex125Inventory: 1,
      flamex135Inventory: 0,
      geyserx8Inventory: 4,
      geyserx9Inventory: 1,
      geyserx10Inventory: 2,
      geyserx11Inventory: 1,
      geyserx12Inventory: 3,
      geyserx13Inventory: 2,
      geyserx14Inventory: 3,
      geyserx85Inventory: 4,
      geyserx95Inventory: 1,
      geyserx105Inventory: 1,
      geyserx115Inventory: 3,
      geyserx125Inventory: 3,
      geyserx135Inventory: 2,
      highlight1ImageUrl: "http://lorempixel.com/640/480",
      highlight1Text: "Aut nesciunt earum et voluptatum eius similique sit eum.",
      highlight2ImageUrl: "http://lorempixel.com/640/480",
      highlight2Text: "Facere cumque libero est consequatur.",
      highlight3ImageUrl: "http://lorempixel.com/640/480",
      highlight3Text: "Quis autem ipsa illo inventore.",
      obsidianx8Inventory: 0,
      obsidianx9Inventory: 3,
      obsidianx10Inventory: 2,
      obsidianx11Inventory: 3,
      obsidianx12Inventory: 3,
      obsidianx13Inventory: 1,
      obsidianx14Inventory: 1,
      obsidianx85Inventory: 4,
      obsidianx95Inventory: 2,
      obsidianx105Inventory: 4,
      obsidianx115Inventory: 3,
      obsidianx125Inventory: 2,
      obsidianx135Inventory: 3,
      productDescription: "Voluptate ratione molestiae deserunt a cum autem. Et vitae illo et nesciunt qui molestias mollitia. Unde quaerat exercitationem. Sit soluta nihil velit aliquam unde.",
      productName: "Handcrafted Steel Car",
      productPrice: 100,
      productReviewQuantity: 32,
      productReviewStars: 1,
      pukekox8Inventory: 3,
      pukekox9Inventory: 1,
      pukekox10Inventory: 1,
      pukekox11Inventory: 4,
      pukekox12Inventory: 3,
      pukekox13Inventory: 2,
      pukekox14Inventory: 3,
      pukekox85Inventory: 3,
      pukekox95Inventory: 3,
      pukekox105Inventory: 2,
      pukekox115Inventory: 2,
      pukekox125Inventory: 4,
      pukekox135Inventory: 2,
      quartzx8Inventory: 1,
      quartzx9Inventory: 1,
      quartzx10Inventory: 0,
      quartzx11Inventory: 1,
      quartzx12Inventory: 1,
      quartzx13Inventory: 1,
      quartzx14Inventory: 1,
      quartzx85Inventory: 2,
      quartzx95Inventory: 3,
      quartzx105Inventory: 0,
      quartzx115Inventory: 0,
      quartzx125Inventory: 3,
      quartzx135Inventory: 0,
      shippingAndReturns: "Blanditiis numquam a dignissimos. Iste illum officia velit. Illo fugit quas inventore voluptatem corrupti.",
      thunderx8Inventory: 0,
      thunderx9Inventory: 4,
      thunderx10Inventory: 0,
      thunderx11Inventory: 1,
      thunderx12Inventory: 2,
      thunderx13Inventory: 0,
      thunderx14Inventory: 3,
      thunderx85Inventory: 4,
      thunderx95Inventory: 2,
      thunderx105Inventory: 0,
      thunderx115Inventory: 1,
      thunderx125Inventory: 0,
      thunderx135Inventory: 0,
      _id: 5
    };
    const component = mount(<ProductOrder parent_state={testState}/>);
    const componentFunction = jest.fn(component.clickShoe);
    component.find('#button_1').simulate('click');
    expect(component).toMatchSnapshot();
    component.find('#button_2').simulate('click');
    expect(component).toMatchSnapshot();
    component.find('#cart_button_1').simulate('click');
    expect(component).toMatchSnapshot();
    //expect(componentFunction).toHaveBeenCalled();
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
  it('should call the click function', function() {
    const component = mount(<StatefulButtonColor
    id="color_button_test"
    selected_colorway="Thunder (Dark Blue Upper / White Sole)"
    onClick={clickFn}
    colorway_name="Thunder (Dark Blue Upper / White Sole)"
    background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
    style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>);

    component.find('#color_button_test').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
  it('should call the hover function', function() {
    const component = mount(<StatefulButtonColor
      id="color_button_test"
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      onClick={clickFn}
      colorway_name="Thunder (Dark Blue Upper / White Sole)"
      background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
      style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>);

      component.find('#color_button_test').simulate('mouseenter');
      expect(component).toMatchSnapshot();
      component.find('#color_button_test').simulate('mouseleave');
      expect(component).toMatchSnapshot();
      component.find('#color_button_test').simulate('click');
      expect(component).toMatchSnapshot();
      component.find('#color_button_test').simulate('mouseenter');
      expect(component).toMatchSnapshot();
      component.find('#color_button_test').simulate('mouseleave');
      expect(component).toMatchSnapshot();
  });
  it('should call the hover function when not selected', function() {
    const component = mount(<StatefulButtonColor
      id="color_button_test"
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      onClick={clickFn}
      colorway_name="Geyser (Light Blue Sole"
      background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
      style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>);
    component.find('#color_button_test').simulate('mouseenter');
    expect(component).toMatchSnapshot();
    component.find('#color_button_test').simulate('mouseleave');
    expect(component).toMatchSnapshot();
  });
});
describe('StatefulButtonSize functionality', function() {
  it('should render 8.5 without throwing an error', function() {
    const component = render(<StatefulButtonSize
      selected_size="8.5"
      onClick={() => { return undefined; }}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>);
    expect(component).toMatchSnapshot;
  });
  it('should render 8 without throwing an error', function() {
    const component = render(<StatefulButtonSize
      selected_size="8"
      onClick={() => { return undefined; }}
      size_name=""
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+++8++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>);
    expect(component).toMatchSnapshot;
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
  it('should call the click function', function() {
    const component = mount(<StatefulButtonSize
      id="size_button_test"
      selected_size="8.5"
      onClick={clickFn}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>);

      component.find('#size_button_test').simulate('click');
      expect(clickFn).toHaveBeenCalled();
  });
  it('should call the hover function', function() {
    const component = mount(<StatefulButtonSize
      id="size_button_test"
      selected_size="8.5"
      onClick={clickFn}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>);

      component.find('#size_button_test').simulate('mouseenter');
      expect(component).toMatchSnapshot();
      component.find('#size_button_test').simulate('mouseleave');
      expect(component).toMatchSnapshot();
  });
  it('should call the hover function when not selected', function() {
    const component = mount(<StatefulButtonSize
      id="size_button_test"
      selected_size="9.5"
      onClick={clickFn}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>);

      component.find('#size_button_test').simulate('mouseenter');
      expect(component).toMatchSnapshot();
      component.find('#size_button_test').simulate('mouseleave');
      expect(component).toMatchSnapshot();
  });
});
describe('StatefulButtonCart functionality', function() {
  it('should render without throwing an error', function() {
    const component = render(<StatefulCartButton
      onClick={() => { return undefined; }}
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      selected_size="8.5"
      style={{display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#000000", color: "#ffffff", border: "1px solid white", textAlign: "center", width: "68%"}}/>);
    expect(component).toMatchSnapshot;
    //expect(shallow(<StatefulButtonColor />).contains(<div className="color_button"></div>)).toBe(true);
  });

  it('should be selectable by class "cart_button"', function() {
    expect(shallow(<StatefulCartButton
      onClick={() => { return undefined; }}
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      selected_size="8.5"
      style={{display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#000000", color: "#ffffff", border: "1px solid white", textAlign: "center", width: "68%"}}/>).is('.cart_button')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<StatefulCartButton
      onClick={() => { return undefined; }}
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      selected_size="8.5"
      style={{display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#000000", color: "#ffffff", border: "1px solid white", textAlign: "center", width: "68%"}}/>).find('.cart_button').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<StatefulCartButton
      onClick={() => { return undefined; }}
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      selected_size="8.5"
      style={{display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#000000", color: "#ffffff", border: "1px solid white", textAlign: "center", width: "68%"}}/>).text()).toEqual('   ADD TO CART   ');
  });
  it('should call the click function', function() {
    const component = mount(<StatefulCartButton
      id="cart_button_test"
      onClick={clickFn}
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      selected_size="8.5"
      style={{display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#000000", color: "#ffffff", border: "1px solid white", textAlign: "center", width: "68%"}}/>);
    const component2 = mount(<StatefulButtonSize
      id="size_button_test"
      selected_size="8.5"
      onClick={clickFn}
      size_name="8.5"
      style={{display: "inline-block", margin: "3px"}}
      background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>);

    component2.find('#size_button_test').simulate('click');
    expect(component).toMatchSnapshot();
    component.find('#cart_button_test').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
  it('should call the hover function', function() {
    const component = mount(<StatefulCartButton
      id="cart_button_test"
      onClick={clickFn}
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      selected_size="8.5"
      style={{display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#000000", color: "#ffffff", border: "1px solid white", textAlign: "center", width: "68%"}}/>);

      component.find('#cart_button_test').simulate('mouseenter');
      expect(component).toMatchSnapshot();
      component.find('#cart_button_test').simulate('mouseleave');
      expect(component).toMatchSnapshot();
  });
  it('should call the hover function when no selected size', function() {
    const component = mount(<StatefulCartButton
      id="cart_button_test"
      onClick={clickFn}
      selected_colorway="Thunder (Dark Blue Upper / White Sole)"
      selected_size=""
      style={{display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#000000", color: "#ffffff", border: "1px solid white", textAlign: "center", width: "68%"}}/>);

      component.find('#cart_button_test').simulate('mouseenter');
      expect(component).toMatchSnapshot();
      component.find('#cart_button_test').simulate('mouseleave');
      expect(component).toMatchSnapshot();
  });
});