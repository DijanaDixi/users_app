 export const haideEmail = (email) => {
    var hide = email.split("@")[0].length - 2; //<-- number of characters to hide
    var r = new RegExp(".{" + hide + "}@", "g");
    return (email = email.replace(r, "...@"));
  };

  export const dateFormat = () => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };