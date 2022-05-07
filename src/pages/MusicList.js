import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "../assets/css/MusicList.css";
import MusicControl from "../Components/MusicControl";
import {PlayerContext} from '../contexts/PlayerContext'

function MusicList() {
  const {setIsPlay, isPlay} = useContext(PlayerContext)
  const [title, setTitle] = useState("");
  const [musics, setMusics] = useState([]);
  const [musicLink, setMusicLink] = useState("");

  const getMusics = async (pathname) => {
    try {
      const response = await axios.get(
        "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST"
      );

      if (pathname === "/nhac-tre") {
        setTitle("Nhac Tre");
        setMusics(response.data.songs.top100_VN[0].songs);
      }
      if (pathname === "/nhac-trinh") {
        setTitle("Nhac Trinh");
        setMusics(response.data.songs.top100_VN[2].songs);
      }
      if (pathname === "/pop") {
        setTitle("Nhac Pop");
        setMusics(response.data.songs.top100_AM[0].songs);
      }
      if (pathname === "/japan") {
        setTitle("Nhac japan");
        setMusics(response.data.songs.top100_CA[2].songs);
      }
      if (pathname === "/koloi") {
        setTitle("Nhac KO loi");
        setMusics(response.data.songs.top100_KL[0].songs);
      }
      if (pathname === "/E-D") {
        setTitle("Nhac electronic");
        setMusics(response.data.songs.top100_AM[1].songs);
      }
      if (pathname === "/Rap") {
        setTitle("Nhac Rap");
        setMusics(response.data.songs.top100_AM[2].songs);
      }
      if (pathname === "/Jazz") {
        setTitle("Nhac Jazz");
        setMusics(response.data.songs.top100_AM[3].songs);
      }
      if (pathname === "/coutry") {
        setTitle("Nhac Coutry");
        setMusics(response.data.songs.top100_AM[4].songs);
      }
      if (pathname === "/latin") {
        setTitle("Nhac Latin");
        setMusics(response.data.songs.top100_AM[5].songs);
      }
     
      if (pathname === "/korea") {
        setTitle("Nhac Korea");
        setMusics(response.data.songs.top100_CA[0].songs);
      }
      if (pathname === "/rapviet") {
        setTitle("Rap Viet");
        setMusics(response.data.songs.top100_VN[4].songs);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const changeMusic = (link) => {
    setMusicLink(link);
  };

  useEffect(() => {
    console.log(window.location.pathname);
    getMusics(window.location.pathname);
  }, []);

  return (
    <div className="music-container">
      <h1>{title}</h1>
      <ul className="music-list">
        {musics.map((item) => (
          <li
            key={item.url}
            className="music-item"
            onClick={() => {
              changeMusic(item.music);
              setIsPlay(true);
              document.getElementById('react-audio-player').play() 
            }}
          >
            <img src={item.avatar} alt="" className="musicImg" />
            <p className="title">{item.title}</p>
          </li>
        ))}
      </ul>
      <MusicControl link={musicLink} />
    </div>
  );
}

export default MusicList;
