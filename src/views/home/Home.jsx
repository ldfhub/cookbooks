import React, { Component } from 'react'
import {
  TabBar
} from 'antd-mobile'

import cookbook from '@/assets/images/cookbook.png'
import cookbook_active from '@/assets/images/cookbook-active.png'
import menu from '@/assets/images/menu.png'
import menu_active from '@/assets/images/menu-active.png'
import location from '@/assets/images/location.png'
import location_active from '@/assets/images/location-active.png'
import more from '@/assets/images/more.png'
import more_active from '@/assets/images/more-active.png'

import { HomeWrap } from './styledHome'

export default class Home extends Component {
  state = {
    selected: 'cookbook'
  }

  handlePress = (key) => {
    return () => {
      this.setState({
        selected: key
      })
    }
  }

  render() {
    return (
      <HomeWrap>
        <TabBar
          tintColor="#000"
          unselectedTintColor="#666"
        >
          <TabBar.Item
            key="cookbook"
            selected={this.state.selected === 'cookbook'}
            icon={{uri: cookbook}}
            selectedIcon={{uri: cookbook_active}}
            title="菜谱大全"
            onPress={this.handlePress('cookbook')}
          >
            <div>cookbook</div>
          </TabBar.Item>
          <TabBar.Item
            key="category"
            selected={this.state.selected === 'category'}
            icon={{uri: menu}}
            selectedIcon={{uri: menu_active}}
            title="分类"
            onPress={this.handlePress('category')}
          >
            <div>category</div>
          </TabBar.Item>
          <TabBar.Item
            key="map"
            selected={this.state.selected === 'map'}
            icon={{uri: location}}
            selectedIcon={{uri: location_active}}
            title="地图"
            onPress={this.handlePress('map')}
          >
            <div>map</div>
          </TabBar.Item>
          <TabBar.Item
            key="more"
            selected={this.state.selected === 'more'}
            icon={{uri: more}}
            selectedIcon={{uri: more_active}}
            title="更多"
            onPress={this.handlePress('more')}
          >
            <div>more</div>
          </TabBar.Item>
        </TabBar>
      </HomeWrap>
    )
  }
}
