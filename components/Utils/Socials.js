import React from 'react'

function Socials(props) {
    const {width} = props
    return (
        <div>
            <div className="socials">
                <div className="socials-div">
                    <div className="socials-links">
                        <a href="https://www.facebook.com/Finovista/" target="_blank"><img src="../img/facebook.png" alt="" width={width} /></a>
                        <a href="https://www.instagram.com/finovista/" target="_blank"><img src="../img/instagram.png" alt="" width={width} /></a>
                        <a href="https://mobile.twitter.com/finovista" target="_blank"><img src="../img/twitter.png" alt="" width={width} /></a>
                        <a href="https://www.linkedin.com/company/finovista/" target="_blank"><img src="../img/linkedin.png" alt="" width={width} /></a>
                        <a href="https://www.youtube.com/@finovista" target="_blank"><img src="../youtube.png" alt="" width={width} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials