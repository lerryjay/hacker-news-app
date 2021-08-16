import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getStories } from '../../../common/api';
import * as DB from '../../../common/DB/Db';
import { theme } from '../../../common/theme';
import style from '../style';
import FeedItem from './FeedItem'



export class Feeds extends React.PureComponent {
  state ={ 
    stories : [],
    loading : true,
    loadingMore: false,
    refreshing: false,
    pageno: 1
  }

  handleGetMoreFeeds = ()=>{
    this.setState((previousState, nextProps)=>({
      loadingMore : true,
      pageno: this.state.pageno + 1 
    }), ()=>{
      this.getFeeds();
    })
  }

  _handleRefresh = () => {
    this.setState(
      {
        pageno: 1,
        refreshing: true
      },
      () => {
        this.getFeeds();
      }
    );
  };

  getFeeds = async ()=>{
    const stories = await getStories('top',this.state.pageno,6).then((stories)=>stories || []);
    if(stories.length > 1 && this.state.pageno === 1) DB.insertFeeds(stories);
    this.setState(previousState=>{
      return {
        loading: false,
        loadingMore: false,
        stories : this.state.pageno === 1 ? stories : [...this.state.stories,...stories ]
      }
    })
  }

  renderFooter = ()=>{
    if(!this.state.loadingMore) return null;

    return(
      <View>
        <ActivityIndicator color={theme.primary} animating size="large" />
      </View>
    )
  }

  getDbFeeds = async()=>{
    const feeds = await DB.getLatestFeeds();
    if(feeds.status) this.setState({ stories: feeds.data })
  }

  componentDidMount(){
    this.getDbFeeds();
    this.getFeeds();
  }
  render() {
    return (
      <View style={style.container}>
        <View style={{ marginTop: 10 }} >
          {
            this.state.loading && <ActivityIndicator size="large" color={theme.primary} />
          }
        </View>
        {this.state.stories.length > 0 && <View>
          <FlatList
            data={this.state.stories}
            renderItem={(item: any) => <FeedItem feed={item.item} />}
            keyExtractor={(item: any) => item?.id?.toString()+ (Math.random() *10).toString()}
            onEndReached={this.handleGetMoreFeeds}
            onEndReachedThreshold={.8}
            initialNumToRender={ 6 }
            ListFooterComponent={ this.renderFooter }
            onRefresh={this._handleRefresh}
            refreshing={this.state.refreshing}
          />
        </View>}
      </View>
    )
  }
}

export default Feeds

