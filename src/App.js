import Axios from 'axios'
import images1 from './images/movieicon.png';
import images2 from './images/searchicon.png';
import {useState} from 'react';
import styled from 'styled-components';
import MovieComponent from './MovieComponent';
import MovieinfoComponent from './movieinfoComponent';
export const API_KEY = "90d57160"

const Container = styled.div`
display: flex;
flex-direction: column;
`;
const Header = styled.div`
display: flex;
flex-direction: row;
background-color:darkblue;
justify-content:space-between;
color:yellow;
align-items:center;
padding:10px;
font-size:26px;
font-weight:bold;
box-shadow:0 3px 6px 0 grey;
`;
const Appname = styled.div`
display: flex;
flex-direction:row;
`;
const Movieicon =styled.img`
height:30px;
margin-right:10px;
`;
const Searchbox= styled.div`
margin-left:20px;
margin-right:20px;
display:flex;
flex-direction:row;
height:15px;
width:30%;
padding:10px 10px;
background-color:white;
border-radius:10px;
justify-content:center;
align-item:center;
`;
const Searchicon=styled.img`
`;
const Searchinput = styled.input`
color:black;
border:none;
outline:none;
margin-left:15px;
`;
const Movielistcontainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
gap: 24px;
justify-content:space-evenly;
`;
function App() {
  const [searchQuery,UpdateSearchQuery] = useState("");
  const [timeoutId,updatetimeoutId] = useState();
  const [movieList,UpdatemovieList] = useState([]);
  const [SelectedMovie,onMovieselect] = useState();
   
  const fetchdata = async (searchString) =>{
    const response =  await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,);
    console.log(response)
    UpdatemovieList(response.data.Search);
  };
  const onTextChange = (e) =>{
    onMovieselect("")
    clearTimeout(timeoutId);
    UpdateSearchQuery(e.target.value);
   const timeout= setTimeout(()=>fetchdata(e.target.value),500);
   updatetimeoutId(timeout);
  };
  return (
    <>
   <Container>
    <Header>
      <Appname>
        <Movieicon src={images1}/> 
        React Movie App</Appname>
        <Searchbox>
         <Searchicon src={images2}/>
         <Searchinput placeholder='Search Movie' value={searchQuery} onChange={onTextChange}/>
        </Searchbox>
    </Header>
    {SelectedMovie && <MovieinfoComponent SelectedMovie={SelectedMovie} onMovieselect={onMovieselect}/>}
    <Movielistcontainer>
    {
      movieList?.length ? (movieList.map((movie, index)=> <MovieComponent key ={index} movie={movie} onMovieselect={onMovieselect} />))
      : "No Movie Search"
    }
    </Movielistcontainer>
   </Container>
   </>
  );
}

export default App;
