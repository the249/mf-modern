import { Outlet } from "@modern-js/runtime/router";
import {
  SidebarLayout,
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarSection,
  SidebarItem,
  SidebarLabel,
} from "provider/catalyst";
import {
  HomeIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";
import { Helmet } from '@modern-js/runtime/head';

import "./index.css";

export default function Layout() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <SidebarLayout
        navbar={null}
        sidebar={
          <Sidebar>
            <SidebarHeader>Host App</SidebarHeader>
            <SidebarBody>
              <SidebarSection>
                <SidebarItem href="/">
                  <HomeIcon />
                  <SidebarLabel>Home</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="/remote">
                  <Square2StackIcon />
                  <SidebarLabel>Remote App</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="/remote/about">
                  <TicketIcon />
                  <SidebarLabel>Remote App About</SidebarLabel>
                </SidebarItem>
              </SidebarSection>
            </SidebarBody>
          </Sidebar>
        }
      >
        <Outlet />
      </SidebarLayout>
    </>
  );
}
