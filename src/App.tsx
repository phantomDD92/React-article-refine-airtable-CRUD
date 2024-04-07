import {
  ErrorComponent,
  GitHubBanner,
  Refine,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import dataProvider from "@refinedev/airtable";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { PostList } from "./pages/post/list";

import "./App.css";
import { Layout } from "./components/Layout";
import { PostShow } from "./pages/post/show";
import { PostCreate } from "./pages/post/create";
import { PostEdit } from "./pages/post/edit";

function App() {
  const API_TOKEN =
    "patcajUkU2afuCzL8.9b2cd3a5f463b29f0cda913b222d765c2bda985dd69be161b1449c6278a15ea8";
  const BASE_ID = "appcUYy7TpTIZDZ6E";

  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <DevtoolsProvider>
          <Refine
            dataProvider={dataProvider(API_TOKEN, BASE_ID)}
            routerProvider={routerBindings}
            resources={[
              {
                name: "posts",
                list: "/posts",
                show: "/posts/show/:id",
                create: "/posts/create",
                edit: "/posts/edit/:id",
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
              projectId: "mUwgD8-WDCMG7-bQOQuy",
            }}
          >
            <Routes>
              <Route
                element={
                  <Layout>
                    <Outlet />
                  </Layout>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="posts" />}
                />
                <Route path="posts">
                  <Route index element={<PostList />} />
                  <Route path="show/:id" element={<PostShow />} />
                  <Route path="create" element={<PostCreate />} />
                  <Route path="edit/:id" element={<PostEdit />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
