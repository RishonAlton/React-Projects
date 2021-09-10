import React from 'react'


const Follower = ({avatar_url, login, html_url}) => {

    return (
        <div className="card">
            <img src={avatar_url} alt={login} className="follower-image" />
            <h5 className="follower-name">{login}</h5>
            <a href={html_url} className="github-url">View Profile</a>
        </div>
    )

}


export default Follower
