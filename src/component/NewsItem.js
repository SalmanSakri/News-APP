import React from 'react'

const NewsItem=(props)=> {

    let { title, description, imageUrl,newsUrl,source } = props;
    return (
      <div>
        <section className=" body-font ">
          <div className="">
            <div className="">
              <div className=" p-4 bg-gray-300 shadow-md rounded-lg">
                <div className="  ">
                  <span className='flex justify-center m-4 font-semibold text-red-700'>{source}</span>
                  <img className=" rounded w-full object-cover object-center mb-6" 
                  src={! imageUrl ? "https://s.yimg.com/os/creatr-uploaded-images/2022-09/ce715dd0-3f90-11ed-bf4d-b64285303f08":imageUrl} alt="IMG"/>
                  <h3 className="tracking-widest text-indigo-400 text-base font-medium title-font">{title}...</h3>
                  <p className="leading-relaxed text-xs">{description}...</p>
                  {/* <p className=''><small>By {! autor ? "unknown" :autor} on {new Date(date).toGMIString()}</small></p> */}
                  <a href={newsUrl} target="blank" className="text-lg text-red-700 font-medium title-font flex justify-center mb-4">Read More</a>
                </div>
              </div>
              {/* box-shadow: 0 10px 20px 10px #000; */}
            </div>
          </div>
        </section>
      </div>
    )
  }

export default NewsItem