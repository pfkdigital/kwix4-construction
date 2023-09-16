import axios from "axios";

export const handleData = async ({
  firstName,
  lastName,
  email,
  message,
    number
}: ContactFormDto) => {
  try {
    const response = await axios.post("http://localhost:3000/api/contact", {
      firstName,
      lastName,
      email,
      message,
      number
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
