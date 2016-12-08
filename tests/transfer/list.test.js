import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import List from '../../components/transfer/list';
import Checkbox from '../../components/checkbox';

const listCommonProps = {
  prefixCls: 'ant-transfer-list',
  dataSource: [{
    key: 'a',
    title: 'a',
  }, {
    key: 'b',
    title: 'b',
  }, {
    key: 'c',
    title: 'c',
    disabled: true,
  }],
  checkedKeys: ['a'],
  lazy: false,
};

describe('List', () => {
  it('should render correctly', () => {
    const wrapper = mount(<List {...listCommonProps} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should check top Checkbox while all available items are checked', () => {
    const wrapper = mount(<List {...listCommonProps} checkedKeys={['a', 'b']} />);
    expect(wrapper.find('.ant-transfer-list-header').find(Checkbox).prop('checked'))
      .toBeTruthy();
  });
});