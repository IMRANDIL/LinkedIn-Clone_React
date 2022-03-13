import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



const Widgets = () => {


    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )



    return (
        <div className='widgets'>


            <div className="widgets__header">
                <h2>LinkedIn news</h2>
                <InfoIcon />
            </div>

            {newsArticle('AIA on fire', 'Top news - 98877 readers')}
            {newsArticle('CORONA: India updates', 'Top news - 977 readers')}
            {newsArticle('CORONA: India updates', 'Top news - 977 readers')}
            {newsArticle('Ukraine: Russia updates', 'Top news - 4477 readers')}
            {newsArticle('Nato: India updates', 'Top news - 97567 readers')}
            {newsArticle('Crypto: US updates', 'Top news - 972227 readers')}
        </div>

    )
}

export default Widgets