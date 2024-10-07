
import {Card, CardBody} from 'as-react-frest';
import React from 'react';


interface PropsVerifyEmail{
  title:string;
  icon? :React.ReactNode;
  description:string;
  textSkip:string;
  onSkip:()=>void
  textResend:string;
  onResend: ()=>void;
  textQuestion?:string;
}
const VerifyEmailCard = (props:PropsVerifyEmail)=>{
  return(
    <Card>
      <CardBody>
        <>
          <div className="app-brand justify-content-center">
          {props.icon}
          </div>
         <h4 className="mb-2">{props.title}</h4>
            <p className="text-start">
            {props.description}
            </p>
            <a className="btn btn-primary w-100 my-3" href="#"
            onClick={()=>props.onSkip()}> {props.textSkip} </a>
            <p className="text-center">
             {props.textQuestion}
              <a href="javascript:void(0);"
              onClick={()=>props.onResend()}
              > {props.textResend} </a>
            </p>
        </>
      </CardBody>
    </Card>
    
  )
}

export default VerifyEmailCard