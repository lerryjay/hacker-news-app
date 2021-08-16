import React from 'react'

import Feeds from './components/Feeds'



function Home() {
  const [categories, setCategories] = React.useState('top')
  return (
      <Feeds />
  )
}

export default Home


