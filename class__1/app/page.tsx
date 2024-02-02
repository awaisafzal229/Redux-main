import AddUsers from "./(components)/AddUsers";
import Displayusers from "./(components)/DisplayUsers";
// export default function Home() {
//   return (
//     <div>
//       <AddUsers/>
//       <Displayusers/>
//     </div>
//   );
// }


// page.tsx
import { Providers } from "./redux/providers";// import the Providers component

export default function Home() {
  return (
    <Providers> {/* Wrap Home component with Providers */}
      <div>
        <AddUsers />
        <Displayusers />
      </div>
    </Providers>
  );
}
