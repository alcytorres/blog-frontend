import './index.css'; 

import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return (
//     <div>
//       <header>
//         <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
//       </header>

//       <div id="posts-new">
//         <h1>New post</h1>
//       </div>

//       <div id="posts-index">
//         <h1>All posts</h1>
//       </div>

//       <footer>
//         <p>Copyright 20XX</p>
//       </footer>
//     </div>
//   );
// }

// export default App;





// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <div>
//       <img src="/Users/alcytorres/Desktop/Desktop/AFA Copa America/E5-03mKXIAEP7uD.jpg" className="custom-image" alt="Custom description" />
//       </div>
//     </>
//   )
// }

// // return (
// //   <>
// //     <div>
// //       <a href="https://vitejs.dev" target="_blank">
// //         <img src={viteLogo} className="logo" alt="Vite logo" />
// //       </a>
// //       <a href="https://react.dev" target="_blank">
// //         <img src={reactLogo} className="logo react" alt="React logo" />
// //       </a>
// //     </div>
// //     <h1>Vite + React </h1>
// //     <div className="card">
// //       <button onClick={() => setCount((count) => count + 1)}>
// //         count is {count}
// //       </button>
// //       <p>
// //         Edit <code>src/App.jsx</code> and save to test HMR
// //       </p>
// //     </div>
// //     <p className="read-the-docs">
// //       Click on the Vite and React logos to learn more
// //     </p>
// //   </>
// // )
// // }

// export default App


// console.log("Hello live React test")
