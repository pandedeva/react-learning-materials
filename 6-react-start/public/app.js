const root = document.querySelector("#root"); // style for react
// const className = "box";
// const element = <div className={className}></div>;

/* 


*/
// memasukan argumen ke tag
// function clickMe(msg) {
//   alert(msg);
// }
// const element = <button onClick={clickMe.bind(this, "Hey lol")}>Click Me</button>;

/* 


*/
// react state
// function App() {
//   // menulis angka awal
//   // state mengembalikan nilai awal, dan function
//   const [count, setCount] = React.useState(0);
//   // // mengambil nilai yang ada pada state
//   // const count = state[0];
//   // // memanggil function yang ada pada state
//   // const setCount = state[1];
//   return (
//     <>
//       <button
//         onClick={function () {
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//       <span>{count}</span>
//       <button
//         onClick={function () {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </>
//   );
// }

/*

Component lifecycle
*/
// function App() {
//   const [click, setClick] = React.useState(false);
//   const [count, setCount] = React.useState(0);
//   // function akan dieksekusi pada saat komponen tersebut di render
//   React.useEffect(
//     function () {
//       console.log("init carousel");
//       // function ini akan dieksekusi pada saat ada re-render
//       return function () {
//         console.log("destroy carousel");
//       };
//     },
//     // function ini hanya memantau count saja, walaupun ada perubahan pada yang lain, function ini tidak akan dieksekusi
//     [count]
//   );
//   return (
//     <>
//       <h1 id="judul">Hello Ini Judul</h1>
//       <button
//         onClick={function () {
//           setClick(true);
//         }}
//       >
//         click me
//       </button>
//       <button
//         onClick={function () {
//           setCount(count + 1);
//         }}
//       >
//         tambah
//       </button>
//       angka saat ini = {count}
//     </>
//   );
// }

/* 


Conditional rendering
*/
// function App() {
//   const [login, setLogin] = React.useState(false);
//   // if (login) {
//   //   return (
//   //     <>
//   //       <h1>Selamat Anda Berhasil Login</h1>
//   //       <button
//   //         onClick={function () {
//   //           setLogin(false);
//   //         }}
//   //       >
//   //         Logout
//   //       </button>
//   //     </>
//   //   );
//   // }
//   return (
//     <>
//       <h1>Application</h1>
//       <p>{login && <b>Kamu Sudah Login</b>}</p>
//       <button
//         onClick={function () {
//           setLogin(true);
//         }}
//       >
//         {login ? <b>Logout</b> : <i>Login</i>}
//       </button>
//     </>
//   );
// }

/* 

dom manipulation(ref)
*/
// function App() {
//   const [login, setLogin] = React.useState(false);
//   const judulRef = React.useRef(null);
//   React.useEffect(() => {
//     setTimeout(() => {
//       judulRef.current.textContent = "aplikasi";
//     }, 1000);
//   }, []);
//   return (
//     <>
//       <h1 ref={judulRef}>Application</h1>
//     </>
//   );
// }

/* 


React list & key
*/
// function App() {
//   const fruits = ["apple", "grape", "banana", "durian"];
//   return (
//     <ul>
//       {fruits.map(function (fruit) {
//         return <li key={fruit}>{fruit}</li>;
//       })}
//     </ul>
//   );
// }

/* 

Form
*/
// function App() {
//   const [nama, setNama] = React.useState("");
//   function ketikaDiSubmit(event) {
//     // preventDefault berguna untuk mencegah form untuk navigate ke satu halaman lain
//     event.preventDefault();
//     console.log("Nama: ", nama);
//   }
//   return (
//     <form onSubmit={ketikaDiSubmit}>
//       <div>
//         <label>Nama: </label>
//         <input
//           type="text"
//           name="nama"
//           value={nama}
//           onChange={function (event) {
//             setNama(event.target.value);
//           }}
//         />
//       </div>
//       <button type="submit">Kirim</button>
//     </form>
//   );
// }

/* 


data fetch
*/
// function App() {
// React.useEffect(() => {
//   // function yg return nya promise bisa menggunakan then
//   // pertama, menunggu proses https nya selesai
//   const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
//     .then((response) => {
//       // ketika selesai proses https, ambil body response nya
//       return response.json();
//     })
//     // memanggil
//     .then((response) => {
//       console.log(response);
//     });
//   console.log(getData);
// }, []);
// menggunakan async await
// const [news, setNews] = React.useState([]);
// const [loading, setLoading] = React.useState(true);
// React.useEffect(() => {
//   async function getData() {
//     const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
//     const response = await request.json();
//     setNews(response);
//     setLoading(false);
//   }
//   getData();
// }, []);
// return (
//   <>
//     <h1>Data Fetch</h1>
//     {loading ? ( // kalau loading nya true tampilkan dibawah
//       <i>Loading data...</i>
//     ) : (
//       !loading && ( // kalau loading nya false tampilkan dibawah
//         <ul>
//           {news.map((item) => {
//             return <li key={item.id}>{item.title}</li>;
//           })}
//         </ul>
//       )
//     )}
//   </>
// );
// }

/* 
  Todo List
  */

function App() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState("");

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    event.preventDefault(); // agar web tidak merefresh kembali
    // kalau user mensave activity tapi kosong tampilkan dibawah

    if (!activity) {
      return setMessage("Kolom tidak boleh kosong!");
    }

    setMessage(""); // menghilangkan message kalau user  sudah menambahkan activity
    // kalau edit.id nya true

    if (edit.id) {
      // membuat object baru
      const updatedTodo = { ...edit,
        activity,
        done: false
      }; // mencari index edit todo

      const editTodoIndex = todos.findIndex(todo => {
        return todo.id == edit.id;
      }); // membuat array baru dari todos

      const updatedTodos = [...todos]; // lalu akses berdasarkan index, lalu set dengan object yang baru

      updatedTodos[editTodoIndex] = updatedTodo; // memanggil setTodos, agar tampil

      setTodos(updatedTodos);
      return cancelEditHandler();
    }

    setTodos([...todos, {
      id: generateId(),
      activity,
      done: false
    }]);
    setActivity(""); // agar setiap menginputkan activity, dikosongkan kembali
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity); // menampilkan ke form input

    setEdit(todo); // memanggil setEdit agar tombol bisa berubah
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(todo => {
      // todo.filter itu memproduksi array baru
      return todo.id !== todoId; // jika todo.id tidak sama dengan todoId, tampilkan di array baru
    }); // hasil filter dari fungsi diatas, ditampilkan di setTodos ini dan menampilkan array baru

    setTodos(filteredTodos); // kalau ada id dalam object edit, maka panggil function

    if (edit.id) cancelEditHandler();
  }

  function cancelEditHandler() {
    setActivity("");
    setEdit({});
  }

  function doneTodoHandler(todo) {
    const updatedTodo = { ...todo,
      done: todo.done ? false : true // kalau checklist, ubah jadi false. begitupun sebaliknya

    }; // mencari index edit todo

    const editTodoIndex = todos.findIndex(currentTodo => {
      return currentTodo.id == todo.id;
    }); // membuat array baru dari todos

    const updatedTodos = [...todos]; // lalu akses berdasarkan index, lalu set dengan object yang baru

    updatedTodos[editTodoIndex] = updatedTodo; // memanggil setTodos, agar tampil

    setTodos(updatedTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple todo list"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    action: "",
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "nama aktifitas",
    value: activity,
    onChange: event => {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "simpan perubahan" : "tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "batal edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, "(", todo.done ? "selesai" : "belum selesai", ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Tidak ada Todo")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);