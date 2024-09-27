import React from "react"


interface Props{
    title:string,
    subtitle:React.ReactNode;
    img: string
}
const ImageCover = (props:Props)=>{
    return(
        <div className="flex-row text-center mx-auto">
            <img
                src={props.img}
                alt="Auth Cover Bg color"
                width="520"
                className="img-fluid authentication-cover-img"
                data-app-light-img="pages/login-light.png"
                data-app-dark-img="pages/login-dark.png" />
            <div className="mx-auto">
                <h3>{props.title}</h3>
                {props.subtitle}
            </div>
        </div>
    )
}

export default ImageCover;