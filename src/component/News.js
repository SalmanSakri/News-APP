import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from "prop-types"
import Spinner from "./spinner"
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e223d3d10d04058a54f73b5f2f8170e&page=${page}&pageSize=${props.pageSize}`;
    // const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    settotalResult(parsedData.totalResult);
    setloading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    // document.title = `${capitalizeFirstLetter(props.category)}-All In One News `
    updateNews();
// eslint-disable-next-line
  }, [])


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e223d3d10d04058a54f73b5f2f8170e&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResult(parsedData.totalResult);


  }
  return (
    <>
      {/* <div className='text-3xl'> */}
        <div>
          <h1 className='flex justify-center mt-7 font-bold text-xl mb-3  shadow-md pb-3'>Top  {capitalizeFirstLetter(props.category)} Headlines </h1>
        </div>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={<Spinner />}
        >
          <div className=' grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-3 mr-3 ml-3 '>
            {
              articles.map((item) => {
                return <div key={item.url}>
                  <NewsItem title={item.title ? item.title.slice(0, 30) : ""} description={item.description ? item.description.slice(0, 65) : ""} imageUrl={item.urlToImage} newsUrl={item.url} author={item.author} data={item.publishedAt} source={item.source.name} />
                </div>
              })}
          </div>
        </InfiniteScroll>
      {/* </div> */}
    </>
  )
}


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}
News.prototype = {
  country: PropTypes.string,
  pageSize: PropTypes.string,
  category: PropTypes.string,
}

export default News