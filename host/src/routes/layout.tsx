import { Outlet } from '@modern-js/runtime/router';
import { SidebarLayout, Sidebar, SidebarHeader, SidebarBody, SidebarSection, SidebarItem, SidebarLabel } from 'provider/catalyst';
import {
  HomeIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'
import './index.css';

export default function Layout() {
  return (
    <SidebarLayout
      navbar={null}
      sidebar={
        <Sidebar>
          <SidebarHeader>
            Host App
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/">
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/remote1">
                <Square2StackIcon />
                <SidebarLabel>Remote App 1</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                <TicketIcon />
                <SidebarLabel>Remote App 2</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      <Outlet />
    </SidebarLayout>
  );
}
