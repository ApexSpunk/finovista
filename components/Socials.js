import React from 'react'

function Socials(props) {
    const {width} = props
    return (
        <div>
            <div className="socials">
                <div className="socials-div">
                    <div className="socials-links">
                        <a href="#"><img src="./img/facebook.png" alt="" width={width} /></a>
                        <a href="#"><img src="./img/instagram.png" alt="" width={width} /></a>
                        <a href="#"><img src="./img/twitter.png" alt="" width={width} /></a>
                        <a href="#"><img src="./img/linkedin.png" alt="" width={width} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials