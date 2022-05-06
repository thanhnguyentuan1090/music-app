// import React from "react";
// import MiniSong from "./MiniSong";
// import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function SongListSection() {
//   function MusicList() {
//   //   const [title, setTitle] = useState("");
//   //   const [musics, setMusics] = useState([]);
//   //   const [musicLink, setMusicLink] = useState("");

//   //   const getMusics = async (pathname) => {
//   //     try {
//   //       const response = await axios.get(
//   //         "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST"
//   //       );

//   //       if (pathname === "/nhac-tre") {
//   //         setTitle("Nhac Tre");
//   //         setMusics(response.data.songs.top100_VN[0].songs);
//   //       }

//   //       if (pathname === "/nhac-trinh") {
//   //         setTitle("Nhac Trinh");
//   //         setMusics(response.data.songs.top100_VN[2].songs);
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };

//   //   const changeMusic = (link) => {
//   //     setMusicLink(link);
//   //   };

//   //   useEffect(() => {
//   //     console.log(window.location.pathname);
//   //     getMusics(window.location.pathname);
//   //   }, []);
//   // }
//   return (
//   //   <div className="songList__container">
//   //     <div>Top 100 nhạc trẻ </div>
//   //     <div className="songList">
//   //       {musics.map((item) => (
//   //         <li
//   //           key={item.url}
//   //           className="music-item"
//   //           onClick={() => {
//   //             changeMusic(item.music);
//   //           }}
//   //         >
//   //           <img src={item.avatar} alt="" />
//   //           <p>Title: {item.title}</p>
//   //         </li>
//   //       ))}
//   //     </div>
//   //   </div>
//   // );
// }
