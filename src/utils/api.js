const getPorts = async (page = 1) => {
  const url = `http://apitest.cargofive.com/api/ports?page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("data", data);
    console.log("response", response);

    return { data, response };
  } catch (e) {
    console.log(e);
  }
};

export { getPorts };
