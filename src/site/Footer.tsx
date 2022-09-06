type NewFooter={
    titleFooter:string
}
export const Footer =(props:NewFooter)=>{
    return(
    <div>{props.titleFooter}</div>
    )
}