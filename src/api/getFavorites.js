function getFavorites() {
  const storageName = "favorites";
  let contentStorage = null;
  try {
    contentStorage = JSON.parse(localStorage.getItem(storageName)) || [];
  } catch (error) {
    console.error(error);
    contentStorage = [];
  }

  return contentStorage;
}

export default getFavorites;
