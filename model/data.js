const videos = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, laboriosam?",
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, laboriosam?",
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, laboriosam?",
    description: "Lorem ipsum dolor sit.",
  },
];
function getAll() {
  return videos;
}

function getOne(id) {
  const idNum = parseInt(id);
  return videos.find((video) => video.id === idNum);
}

function addOne(video) {
  const id = videos.length + 1;
  video.id = id;
  videos.push(video);
}

module.exports = {
  getAll,
  getOne,
};
