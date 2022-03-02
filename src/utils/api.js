const getPorts = async (page = 1) => {
  const url = `http://apitest.cargofive.com/api/ports?page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export { getPorts };
