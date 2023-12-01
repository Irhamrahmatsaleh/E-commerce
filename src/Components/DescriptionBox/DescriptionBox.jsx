import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
           <div className="description-nav-box">Description</div>
           <div className="description-nav-box fade">Reviews (122)</div> 
        </div>
        <div className="descriptionbox-description">
            <p>E-commerce, short for electronic commerce, refers to the buying and selling of goods and services
               over the internet. This digitalized approach to commerce has transformed the traditional way businesses 
               operate and consumers shop. In the realm of e-commerce, transactions are conducted electronically, 
               allowing individuals and businesses to engage in trade without the 
               constraints of geographical limitations.</p>
               <p>
               Key components of e-commerce include online shopping websites, electronic payment systems, 
               and digital marketing strategies. Consumers can browse a vast array of products or services online, 
               make purchases securely through various payment methods, and have items delivered to their doorstep. 
               E-commerce platforms often provide a user-friendly interface, comprehensive product information, and 
               personalized shopping experiences through data-driven algorithms.
               </p>
        </div>
    </div>
  )
}

export default DescriptionBox