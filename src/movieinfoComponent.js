import Axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "./App";

const Container = styled.div`
display: flex;
flex-direction:row;
padding:20px 30px;
justify-content: center;
border-bottom:2px solid lightgray;`;

const CoverImage =styled.img`
object-fit:cover;
border-radius:10px;
margin:20px 15px;
box-shadow:0 3px 10px 0 blue;
height:300px;
`;
const Moviename = styled.span`
font-size:20px;
font-weight:bold;
color:blue;
margin:5px 0px;
`;
const InfoColumn = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
color:black;
margin:15px 10px;
font-size:10px;
`;
const Movieinfo = styled.span`
font-size : 12px;
justify-content:space-between;
margin:15px 0px;
color : black;
margin:4px 0;
text-transform: capitalize;
text-overflow:ellipsis;
& span{
  opacity: 0.5;
}
`;
const Close = styled.span`
font-size:16px;
font-weight:600;
color:black;
background:red;
height:fit-content;
padding:8px;
border-radius:50%;
cursor:pointer;
opacity:0.8;`;

const MovieinfoComponent =(props)=>{
  const [movieInfo,setMovieInfo] = useState();
  const {SelectedMovie} = props;
  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${SelectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
    },[SelectedMovie]);
     
return(
<Container>
  {movieInfo? (
  <>
  <CoverImage src ={movieInfo?.Poster} alt ={movieInfo?.Title}/>
    <InfoColumn>
     <Moviename> {movieInfo?.Type} : <span>{movieInfo?.Title}</span></Moviename>
     <Movieinfo>
      IMDB Rating : <span>{movieInfo?.imdbRating}</span>
      </Movieinfo>
     <Movieinfo>
      Language : <span>{movieInfo?.Language}</span>
      </Movieinfo>
     <Movieinfo>
      Rated : <span>{movieInfo?.Rated}</span>
      </Movieinfo>
     <Movieinfo>
      Released : <span>{movieInfo?.Released}</span>
      </Movieinfo>
     <Movieinfo>
      Runtime : <span>{movieInfo?.Runtime}</span>
      </Movieinfo>
     <Movieinfo>
      Genre : <span>{movieInfo?.Genre}</span>
      </Movieinfo>
     <Movieinfo>
      Director : <span>{movieInfo?.Director}</span>
      </Movieinfo>
     <Movieinfo>
      Actors : <span>{movieInfo?.Actors}</span>
      </Movieinfo>
     <Movieinfo>
      Plot : <span>{movieInfo?.Plot}</span>
      </Movieinfo>
    </InfoColumn>
    <Close onClick={()=> props.onMovieselect()}>X</Close>
    </>):("Loading ...")}
  </Container>
);
};
export default MovieinfoComponent;