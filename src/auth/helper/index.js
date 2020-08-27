import { API } from "../../backend";
//Getting Backend link process.env.REACT_APP_BACKEND--->http://localhost:8000/lifestylestore

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
    return fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const authenticate = (data , next)=>{
      if(typeof window !== 'undefined')
      {
          localStorage.setItem('jwt' , JSON.stringify(data));
          next();
      }
  };

  export const isAuthenticated = ()=>{
    if(typeof window == 'undefined')
    {
        return true;
    }
    if( localStorage.getItem("jwt"))
    {
        return JSON.parse(localStorage.getItem("jwt"));
    }
    return false;
  };

  export const signout = (next)=>{
    if(typeof window !== 'undefined')
    {
        localStorage.removeItem('jwt');
        next();

        return fetch(`${API}/signout`, {
            method: "GET"}).then((res) => {
                return res.json();
              })
              .catch((err) => {
                console.log(err);
              });
}
};
