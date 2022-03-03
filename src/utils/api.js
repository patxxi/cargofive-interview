const getPorts = async (page = 1) => {
  /**
   * Get method for request all the ports, with optional page, from the API
   *
   * @param (Number) page Optional param, with default first page, which indicate what page the user is requesting
   *
   * @return (Object) data The data requested for the user
   */

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
