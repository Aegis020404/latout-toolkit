import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/userSlice";
import {useDispatch} from "react-redux";
import {fetchUsers} from "./store/reducers/ActionCreator";
import PostContainer from "./components/PostContainer";

function App() {
    // const {users, error, isLoading} = useAppSelector(state => state.user)
    // const dispatch = useAppDispatch()
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <div className="App">
            <PostContainer/>
            {/*{isLoading ? <div>loading...</div> : '' }*/}
            {/*{*/}
            {/*    error ? <div>error</div> :*/}
            {/*    users.map(el => (*/}
            {/*        <div>*/}
            {/*            <div>name: {el.name}</div>*/}
            {/*            <div>email: {el.email}</div>*/}
            {/*            <div>id: {el.id}</div>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
}

export default App;
