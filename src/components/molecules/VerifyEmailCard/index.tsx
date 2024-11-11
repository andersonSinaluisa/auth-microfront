
import { Button, Card, CardBody } from '@nextui-org/react';
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
            <Button  
            color="primary"

            onClick={() => props.onSkip()}> {props.textSkip} </Button>
            <p className="text-center">
             {props.textQuestion}
            <Button 
              color="primary"

            variant='light'
              onClick={()=>props.onResend()}
            > {props.textResend} </Button>
            </p>
        </>
      </CardBody>
    </Card>
    
  )
}

export default VerifyEmailCard