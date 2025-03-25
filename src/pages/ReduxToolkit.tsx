import { RootState } from "@/app/store";
import { fetchUser, setUser } from "@/app/userSlice";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
const ComponentOne = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const setMaryAsync = () => {
    dispatch(fetchUser({ name: "Mary", email: "mary@gmail.com" }));
  };
  return (
    <section className="border rounded-lg p-4 my-8">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Button onClick={setMaryAsync}>Async Set Mary</Button>
    </section>
  );
};

const ComponentTwo = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const setJohn = () => {
    dispatch(setUser({ name: "John", email: "john@gmail.com" }));
  };
  return (
    <section className="border rounded-lg p-4 my-8">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Button onClick={setJohn}>Set John</Button>
    </section>
  );
};

const ReduxToolkit = () => {
  return (
    <>
      <section>
        <h1 className="text-xl font-bold">
          Redux Toolkit for state management
        </h1>
        <p className="mb-2">("@/pages/ReduxToolkit.tsx")</p>
        <ul className="list-decimal space-y-4 pl-6">
          <li>
            <h3>Install Packages</h3>
            <code>npm install @reduxjs/toolkit react-redux</code>
          </li>
          <li>
            <h3>Initialize store</h3>
            <code>
              <pre>
                {`("@/app/store.ts")
                
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
export const store = configureStore({
  reducer : {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
`}
              </pre>
            </code>
          </li>
          <li>
            <h3>Provide redux store to react</h3>
            <code>
              <pre>
                {`("@/main.tsx")

import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);`}
              </pre>
            </code>
          </li>
          <li>
            <h3>Create a slice</h3>
            <code>
              <pre>
                {`("@/app/userSlice.tsx")

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: "",
  email: ""
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (user: UserState) => {
    await new Promise((res) => setTimeout(res, 1000));
    return user;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  //regular actions
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    }
  },
  // Put asynchronous actions here
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    });
  }
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;`}
              </pre>
            </code>
          </li>
          <li>
            <h3>Add Slice to the store</h3>
            <code>
              <pre>
                {`import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    user: UserReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
`}
              </pre>
            </code>
          </li>
          <li>
            <h3>Access state using useSelector from react-redux</h3>
            <code>
              <pre>{`const user = useSelector((state: RootState) => state.user)`}</pre>
            </code>
          </li>
          <li>
            <h3>Update state using dispatch from react-redux</h3>
            <code>
              <pre>
                {`const dispatch = useDispatch();
dispatch(setUser({ name: "John", email: "john@gmail.com" }));`}
              </pre>
            </code>
          </li>
        </ul>
        <ComponentOne />
        <ComponentTwo />
      </section>
    </>
  );
};

export default ReduxToolkit;
