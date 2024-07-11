import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <body>
      <Card
        img={
          "https://tilt.goombastomp.com/wp-content/uploads/2021/12/Jungle-Cruise-poster-4538533-819x1024.jpg"
        }
        mimg={
          "https://th.bing.com/th/id/R.6da1310fe6115a7e67bc1cf22dca0525?rik=0o1TdlAtB7DBtQ&riu=http%3a%2f%2fwww.impawards.com%2f2020%2fposters%2fjungle_cruise_ver5.jpg&ehk=CFZv6dOpaMcbUJXHIIwXoh7bpzQZlzCE8VN9ye3lwpk%3d&risl=&pid=ImgRaw&r=0"
        }
        mname={"Jungle Cruise"}
        reltime={"01/06/2023"}
        duration={"130 mins"}
        type={"Action, Adventure, Romentic"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://cdn.cinematerial.com/p/500x/3loqorvq/the-matrix-movie-cover.jpg?v=1456805952"
        }
        mimg={
          "https://th.bing.com/th/id/OIP.LYhxBXP--5R-cnXwDuH7LQHaLG?w=667&h=1000&rs=1&pid=ImgDetMain"
        }
        mname={"Matrix"}
        reltime={"10/10/2018"}
        duration={"180 mins"}
        type={"Mesterious,Action, Adventure"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://blog.karachicorner.com/wp-content/uploads/2013/04/large/WorldWarZ+movie+posters.jpg"
        }
        mimg={
          "https://th.bing.com/th/id/OIP._yFBrnUs4WaTIA0KZ3eYXQAAAA?w=408&h=605&rs=1&pid=ImgDetMain"
        }
        mname={"World-Z-War"}
        reltime={"01/08/2020"}
        duration={"150 mins"}
        type={"Action"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://th.bing.com/th/id/R.7035b3da4a1afc74552ad12cd3a1b4a2?rik=VkWdSWQtb0GsPA&riu=http%3a%2f%2fblog.karachicorner.com%2fwp-content%2fuploads%2f2013%2f04%2flarge%2fTheWolverine%2bmovie%2bposters.jpg&ehk=N%2bbfqw%2bRWmlunIYyKg0rzZvWYKrqrujZiaIw1YB5%2fhs%3d&risl=&pid=ImgRaw&r=0"
        }
        mimg={
          "https://m.media-amazon.com/images/M/MV5BODU0N2Y3NmItMWYwYy00NDhiLWFlMWQtMDkyZWEyYTgyOGFmXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg"
        }
        mname={"The Wolvirine"}
        reltime={"05/04/2022"}
        duration={"80 mins"}
        type={"Action, Adventure, Romance, Fighting"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://th.bing.com/th/id/R.7d2eddad77a50335d2708f00642a56d1?rik=XyfrmbxRIatpfA&riu=http%3a%2f%2fgraphicdesignjunction.com%2fwp-content%2fuploads%2f2012%2f05%2flarge%2fmovie-poster-20.jpg&ehk=L0vMiRR8cSqB4qAyA1wUB4gxnEZh4rQAl5CvUb6K6%2bo%3d&risl=&pid=ImgRaw&r=0"
        }
        mimg={
          "https://th.bing.com/th/id/OIP.C2vFVQF4ok1xW5fBfj3ulAHaJ3?pid=ImgDet&w=190&h=252&c=7&dpr=1.4"
        }
        mname={"Battle Ship"}
        reltime={"12/12/2012"}
        duration={"90 mins"}
        type={"Action, Adventure, Fighting, War"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://th.bing.com/th/id/R.a55dd5066c720c301569eac4f0820c9f?rik=Y84cfdymWe2KoQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-H57vRpipBhs%2fT92h_GLMFAI%2fAAAAAAAAAAc%2fzLYxoSfXv9w%2fs1600%2favatar_movie_poster_final_01.jpg&ehk=jzJkCE7sP8U2tnS91vVNZ2sFDSdjyJXIi4QpgsOUBZY%3d&risl=&pid=ImgRaw&r=0"
        }
        mimg={
          "https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989"
        }
        mname={"Avtar"}
        reltime={"05/11/2017"}
        duration={"120 mins"}
        type={"Action, Adventure"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://th.bing.com/th/id/R.b46d305f38afb35eb0e6b9f35dd9a278?rik=1V8jU141%2f9WrKA&riu=http%3a%2f%2fgo.rappler.com%2fimages%2fbestmovieposters-prometheus-20121221-01.jpg&ehk=bAU0EmFsafMqbUhHyXkXv58d9aByWHq50qhikMoZ%2biE%3d&risl=&pid=ImgRaw&r=0"
        }
        mimg={
          "https://th.bing.com/th/id/OIP.a7TvvWuxFSyP8K5WydXDGwHaJt?pid=ImgDet&w=190&h=249&c=7&dpr=1.4"
        }
        mname={"Prometheus"}
        reltime={"02/03/2024"}
        duration={"120 mins"}
        type={"Horror, Action, Adventure"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://th.bing.com/th/id/OIP.iklRyrJeTN6NO_tUxzkuEgAAAA?rs=1&pid=ImgDetMain"
        }
        mimg={
          "https://th.bing.com/th/id/OIP.J0WvY5oFNGffdxva1iATdwAAAA?pid=ImgDet&w=193&h=289&c=7&dpr=1.4"
        }
        mname={"Oppenheimer"}
        reltime={"29/10/2015"}
        duration={"120 mins"}
        type={"Spy, Action, Adventure"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://th.bing.com/th/id/OIP.aV3oiY_dd2UW5zUCQkVxAwHaLA?w=183&h=271&c=7&r=0&o=5&dpr=1.4&pid=1.7"
        }
        mimg={
          "https://th.bing.com/th/id/OIP.gvaTmCC5ZRjyOpKRiYnz8QHaLf?w=1024&h=1590&rs=1&pid=ImgDetMain"
        }
        mname={"Hobbit"}
        reltime={"13/11/2011"}
        duration={"70 mins"}
        type={"Action, Fighting, Dragon"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>

      <Card
        img={
          "https://th.bing.com/th/id/R.a55dd5066c720c301569eac4f0820c9f?rik=Y84cfdymWe2KoQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-H57vRpipBhs%2fT92h_GLMFAI%2fAAAAAAAAAAc%2fzLYxoSfXv9w%2fs1600%2favatar_movie_poster_final_01.jpg&ehk=jzJkCE7sP8U2tnS91vVNZ2sFDSdjyJXIi4QpgsOUBZY%3d&risl=&pid=ImgRaw&r=0"
        }
        mimg={
          "https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989"
        }
        mname={"Avtar"}
        reltime={"05/11/2017"}
        duration={"120 mins"}
        type={"Action, Adventure"}
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex porro illum aut. Natus nisi repudiandae eum iusto. Numquam, est soluta. Atque omnis obcaecati ex dolore et odit blanditiis quis!"
        }
      ></Card>
    </body>
  );
}

export default App;
