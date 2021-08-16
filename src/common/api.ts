import axios from 'axios';
import { BASE_API_URL } from './constants';

const getStory = async (id:string) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story.data;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type:string, pageno:number = 1, limit:number = 30) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.filter((item, index)=> index >= ((pageno - 1) * limit) && index < ( limit * pageno )).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};