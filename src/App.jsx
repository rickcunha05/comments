import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";
import "./global.css";
import Post from "./components/Post/Post";
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/106562630?v=4",
      name: "Henrique Cunha",
      role: "CTO Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio.É um projeto que fiz  no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-15 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/48262372?v=4",
      name: "Jeyvson Francisco",
      role: "Desenvolvedor Jr",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio.É um projeto que fiz  no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-13 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/48262372?v=4",
      name: "Jeyvson Francisco",
      role: "Desenvolvedor Jr",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio.É um projeto que fiz  no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-13 20:00:00"),
  },
];
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
