import React from 'react'
import Row from '../Row/Row'
import Request from '../../utils/Request'
const RowList = () => {
  return (
    <div>
      <Row 
      title="Family"
      fetchUrl={Request.fetchFamily}
      isLargeRow={true}
      />
       <Row 
      title="ComedyMovies"
      fetchUrl={Request.fetchComedyMovies}
      // isLargeRow={true}
      />
       <Row 
      title="TVMovie"
      fetchUrl={Request.fetchTVMovie}
      // isLargeRow={true}
      />
       <Row 
      title=" Romance"
      fetchUrl={Request. fetchRomance}
      //isLargeRow={true}
      />
       <Row 
      title=" ScienceFiction"
      fetchUrl={Request. fetchScienceFiction}
      // isLargeRow={true}
      />
             <Row 
      title="Animation"
      fetchUrl={Request.   fetchAnimation}
      // isLargeRow={true}
      />
       <Row 
      title="Documentary"
      fetchUrl={Request. fetchDocumentary}
      // isLargeRow={true}
      />
      <Row 
      title="Thriller"
      fetchUrl={Request.fetchThriller}
      // isLargeRow={true}
      />
      <Row 
      title="Action"
      fetchUrl={Request.  fetchAction}
      // isLargeRow={true}
      />
      <Row 
      title="Western"
      fetchUrl={Request.fetchWestern}
      // isLargeRow={true}
      />
      <Row 
      title="Adventure"
      fetchUrl={Request.  fetchAdventure}
      // isLargeRow={true}
      />
       <Row 
      title="Crime"
      fetchUrl={Request. fetchCrime}
      // isLargeRow={true}
      />
       <Row 
      title="Drama"
      fetchUrl={Request. fetchDrama}
      // isLargeRow={true}
      />
       <Row 
      title="Mystery"
      fetchUrl={Request.fetchMystery}
      // isLargeRow={true}
      />
       <Row 
      title="Horror"
      fetchUrl={Request.fetchHorror}
      // isLargeRow={true}
      />
        <Row 
      title="Music"
      fetchUrl={Request.fetchMusic}
      // isLargeRow={true}
      />
        <Row 
      title="History"
      fetchUrl={Request.fetchHistory}
      // isLargeRow={true}
      />
       
     
      
    </div>
  )
}

export default RowList
