import React from 'react'
import { Text, View } from 'react-native'
import { NewsFeedItem } from '../../../common/Models/NewsFeed'
import style from '../style';

import calcTimeDiff from 'timediff';

function FeedItem(props: any) {
  const feed: NewsFeedItem = props.feed;

  const timeDiff = calcTimeDiff(feed.time * 1000, Math.round(+new Date ));
  return (
    <View style={style.feedItem}>
      <View style={style.mainColumn}>
        <Text style={style.title}>{feed.title}</Text>
        <Text><Text style={style.feedScore} >{feed.score}</Text> by <Text style={style.by}>{feed.by}</Text>
        {
          timeDiff.years > 0 && <Text>{timeDiff.years} years ago</Text>
        }
        {
          timeDiff.years === 0 && timeDiff.months > 0 && <Text>{timeDiff.months} months ago</Text>
        }
        {
          timeDiff.months === 0 && timeDiff.days > 0 && <Text>{timeDiff.days} days ago</Text>
        }
        {
          timeDiff.days === 0 && timeDiff.hours > 0 && <Text>{timeDiff.hours} hours ago</Text>
        }
        {
          timeDiff.hours === 0 && timeDiff.minutes > 0 && <Text>{timeDiff.minutes} minutes ago</Text>
        }
        {
          timeDiff.minutes === 0 && timeDiff.seconds > 0 && <Text>{timeDiff.seconds} seconds ago</Text>
        } 
        </Text>
      </View>
      <View style={style.commentColumn}>
        <View style={style.commentBubble}>
          <Text>{feed?.kids?.length || 0}</Text>
          <View style={style.triRight}>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FeedItem
