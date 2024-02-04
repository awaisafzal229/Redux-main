"use client"

import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

function Page() {
    const userData = useSelector((state: any) => state.users)
    const dispatch = useDispatch();
    console.log(userData);

    return (

        <div className="display-user">
            <h1>Remove User Page</h1>
            {
                userData.map((data: any) => {
                    return (
                        <>
                            <div className="users"><span>{data.name}</span>
                                <button onClick={() => dispatch(removeUser(data.id))}>Delete</button>
                            </div>
                        </>
                    )
                })
            }
        </div>


    );
}
export default Page

