import React from 'react';


const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="max-w-sm mx-auto my-4 overflow-hidden rounded-lg shadow-lg">
            
            <div className="relative">
                <img
                    src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <span className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                    {source}
                </span>
            </div>
            <div className="p-4">
                <h5 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                </h5>
                <p className="text-gray-700 mb-3">
                    {description}
                </p>
                <p className="text-gray-500 mb-3 text-base">
                    <small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small>
                </p>
                <a
                    href={newsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gray-800 text-white px-4 py-2 text-sm rounded hover:bg-gray-700"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
