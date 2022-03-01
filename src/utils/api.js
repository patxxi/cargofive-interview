const getPorts = async () => {
  const url = "http://apitest.cargofive.com/api/ports";

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
