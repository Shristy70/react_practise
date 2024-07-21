import { useState } from "react";

export default function Comment(newcomment) {
  const [formdata, setFormdata] = useState({
    username: "",
    remark: "",
    rating: 5,
  });
  const handleInputChange = (event) => {
    setFormdata((currentvalue) => {
      return { ...currentvalue, [event.target.name]: [event.target.value] };
    });
  };
  function submit(event) {
    console.log(formdata);
    newcomment(formdata);
    event.preventDefault();
  }
  return (
    <>
      <h1>creating a comment box :</h1>
      <form action="" onSubmit={submit}>
        <label htmlFor="name"> Nmae : </label>
        <input
          type="text"
          id="name"
          name="username"
          placeholder="enter your name"
          value={formdata.username}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="text"> Remark : </label>
        <textarea
          name="remark"
          id="text"
          value={formdata.remark}
          onChange={handleInputChange}
          placeholder="enter your remark"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating :</label>
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="enter your rating"
          min={1}
          max={5}
          value={formdata.rating}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button>Add comment</button>
      </form>
    </>
  );
}
