// import Image from "next/image";
// import {Navbar} from "./components/Navbar"; // Adjusted import

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// }
import Image from "next/image";
import { Navbar } from "./components/Navbar";  // Adjusted path

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
    </div>
  );
}
