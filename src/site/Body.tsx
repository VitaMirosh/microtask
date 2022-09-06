type TitleBody={
    titleForbody:string
}
export const Body=(props:TitleBody) => {
    return(
        <div>{props.titleForbody}</div>
    )
}