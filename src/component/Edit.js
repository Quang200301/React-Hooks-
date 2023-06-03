
// function updateUser() {
//     let item = { name, price, image,origin };
//     console.warn("item", item);
//     fetch(`http://localhost:3000/products/${userid}`, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),
//     })
//       .then((result) => {
//         result.json().then((resp) => {
//           console.warn(resp);
//           getUserr();
//         });
//       })
//       .catch((error) => {
//         console.error("Error updating user:", error);
//       });

//       return(
//        <div>
//         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
//         <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br></br>
//         <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}}/><br></br>
//         <input type="text" value={origin} onChange={(e)=>{setOrigin(e.target.value)}}/><br></br>
//         <button onClick={updateUser}>Update</button>
//       </div> 
//       )
//   }
  