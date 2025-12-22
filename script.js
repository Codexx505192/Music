// Список песен — просто добавляй сюда новые!
const songs = [
    { title: "Песня 1", file: "music/test.mp3" },
    { title: "Летний вайб", file: "music/test2.mp3" },
    { title: "Моя любовь", file: "songs/moya-lyubov.mp3" },
    // Добавляй сюда свои песни вот так:
    // { title: "Название", file: "songs/имя-файла.mp3" },
  ];
  
  const songList = document.getElementById("song-list");
  const player = document.getElementById("player");
  
  // Создаём карточки песен
  songs.forEach(song => {
    const div = document.createElement("div");
    div.className = "song";
    div.innerHTML = `
      <span>${song.title}</span>
      <button onclick="playSong('${song.file}')">Слушать</button>
      <a href="${song.file}" download>Скачать</a>
    `;
    songList.appendChild(div);
  });
  
  // Функция воспроизведения
  function playSong(file) {
    player.src = file;
    player.play();
  }