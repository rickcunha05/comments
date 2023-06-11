import styles from "./Post.module.css";

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/106562630?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Henrique Cunha</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 8:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 jane.design/doctorcare</p>
        <p>
          <a href=""> #novoprojeto</a>
          <a href=""> #nlw </a>
          <a href=""> #rocketseat </a>
        </p>
      </div>
    </article>
  );
}
