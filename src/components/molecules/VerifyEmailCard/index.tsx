
import {Card, CardBody} from 'as-react-frest';


interface PropsVerifyEmail{
  title:string;
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
        <> <h4 class="mb-2">{props.title}</h4>
            <p class="text-start">
              {props.subtitle}
            </p>
            <a class="btn btn-primary w-100 my-3" href="#"
            onClick={()=>props.onSkip()}
            
            > {props.textSkip} </a>
            <p class="text-center">
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