import Axios from "axios";

async function fetchUser() {
  return Axios.get("https://api.randomuser.me/");
}

export default fetchUser;
