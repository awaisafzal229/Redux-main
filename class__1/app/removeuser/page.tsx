"use client"

// import { Provider, useSelector } from 'react-redux';
// import { store } from '../redux/store';

// function Page() {
//     const userData = useSelector((data:any)=>data.users)
//     console.log(userData);
    
//     return (
//         <Provider store={store}>
//             <div>
//                 <h1>Remove User Page</h1>
//             </div>
//         </Provider>
    
//   );
// }
// export default Page

// removeuser/page.tsx

import { Provider, useSelector } from 'react-redux'; // Remove redundant Provider import
import { store } from '../redux/store';


function Page() {
    
    
    const userData = useSelector((state: any) => state.users);
    return (
        <Provider store={store}>
        <div> {/* Remove redundant Provider wrapping */}
            <h1>Remove User Page</h1>
        </div>
        </Provider>
    );
}

export default Page;
