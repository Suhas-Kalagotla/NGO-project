import React from 'react'; 
import './avatar.css'; 


export const Profile =({className,src,alt,logout})=>{
  
  return(
    <div>
      {src ? (<img className ={`defaultClass ${className}`} src={src} alt={alt}/>
      ):(
        <img className ={`defaultClass ${className}`}
        src={
          "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg"
        }
        alt={alt}
        />
      )}
      <p>suhas</p>
      <button onClick={logout}>logout</button>
    </div>
  )
}

