const getFnc = async (set) => {
  try {
    const response = await fetch("http://localhost:2001" + set);
    if (response.ok) {
      return await response.json();
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
const postFnc = async (set, data) => {
  try {
    const response = await fetch("http://localhost:2001" + set, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    if (response.ok) {
      return true;
    } else {
      return await response.text();
    }
  } catch (error) {
    console.log(error);
  }
};
const putFnc = async (set, data) => {
  try {
    const response = await fetch("http://localhost:2001" + set, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    if (response.ok) {
      return true;
    } else {
      return await response.text();
    }
  } catch (error) {
    console.log(error);
  }
};
const deleteFnc = async (set) => {
  try {
    const response = await fetch("http://localhost:2001" + set, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log(await response.text());
      return true;
    } else {
      console.log(await response.text());
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFnc,
  postFnc,
  deleteFnc,
  putFnc,
};
