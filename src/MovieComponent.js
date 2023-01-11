import styled from "styled-components";
import React from "react";

const Moviecontainer = styled.div`
display:flex;
flex-direction:column;
padding:10px;
box-shadow:0 3px 10px 0 blue;
cursor:pointer;
border-radius:10px;
`;
const CoverImage = styled.img`
height:362px;
object-fit:cover;
border-radius:10px;
`;
const Moviename = styled.span`
font-size:20px;
font-weight:bold;
color:blue;
margin:15px 8px;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
`;
const Infocolumn = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
color:black;
margin:15px 0px;
font-size:20px;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
text-transform:capitalize;
`
const Movieinfo = styled.span`
font-size : 15px;
justify-content:space-between;
margin:15px 10px;
color : black;
`
const MovieComponent =(props)=>{
    const {Title, Year, imdbID, Type, Poster} = props.movie;
return(
<Moviecontainer onClick={()=>props.onMovieselect(imdbID)}>
<CoverImage src={Poster}></CoverImage>
 <Moviename>{Title}</Moviename>
    <Infocolumn>
        <Movieinfo>Year : {Year}</Movieinfo>
        <Movieinfo>Type : {Type}</Movieinfo>
    </Infocolumn>
</Moviecontainer>
)
};
export default MovieComponent;