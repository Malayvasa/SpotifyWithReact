import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactTooltip from "react-tooltip";
import { LightningBoltIcon, HeartIcon } from '@heroicons/react/solid'

const Detail = (props) => {
    return (
        <div className="max-w-sm bg-secondary-50 dark:bg-secondary-700 m-6 mb-12 lg:m-0 md:w-auto md:mt-0 p-12 h-full rounded-lg flex flex-col items-center flex-inital">
            <div>
                <img 
                    src={props.detail.album.images[0].url}
                    alt={props.detail.name}
                    className="max-w-60 mb-12 shadow-xl rounded-lg"
                ></img>
            </div>
            <div className="text-center dark:text-white">
                <h1 className="">{props.detail.artists[0].name}</h1>
            </div>
            <div>
                <h1 className="text-xl w-40 md:w-80 h-20 font-bold text-center dark:text-white">{props.detail.name}</h1>
            </div>
            {/* <div className="text-center text-sm hidden lg:block">
                <h1 className="">Energy : {props.analysis.energy}</h1>
                <h1 className="">Danceability : {props.analysis.danceability}</h1>
                <h1 className="">Acousticness : {props.analysis.acousticness}</h1>
                <h1 className="">Instrumentalness : {props.analysis.instrumentalness}</h1>
                <h1 className="">Speechiness : {props.analysis.speechiness}</h1>
                <h1 className="">Positiveness : {props.analysis.valence}</h1>
                <h1 className="">Liveness : {props.analysis.liveness}</h1>
            </div> */}
            <div className="flex flex-row gap-x-8">

            <div style={{ width: 80, height: 80 }} data-tip data-for="energy">
                <CircularProgressbarWithChildren strokeWidth={15} 
                value={props.analysis.energy} 
                maxValue={1} 
                styles={buildStyles({
                    pathColor: "#10B981",
                    trailColor: "#CCFBF1"
                  })}>
                    <LightningBoltIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-600"/>
                </CircularProgressbarWithChildren>
            </div>

            <ReactTooltip id="energy" place="top" effect="solid">
                Energy
            </ReactTooltip>

            <div style={{ width: 80, height: 80 }} data-tip data-for="positiveness">
                <CircularProgressbarWithChildren strokeWidth={15} 
                value={props.analysis.valence} 
                maxValue={1} 
                styles={buildStyles({
                    pathColor: "#10B981",
                    trailColor: "#CCFBF1"
                  })}>
                    <HeartIcon className="h-6 w-6 text-red-500 dark:text-red-600"/>
                </CircularProgressbarWithChildren>
            </div>

            <ReactTooltip id="positiveness" place="top" effect="solid">
                Valence
            </ReactTooltip>

            </div>
            
        </div>
    );
}
 
export default Detail;