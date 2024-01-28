import { IResourceItem } from "@refinedev/core";
import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";

export const resources: IResourceItem[] = [
    {
        name: 'dashboard',
        list: '/',
        meta: {
            label: 'Dashboard',
            icon: <DashboardOutlined />,
        }
    },
    {
        name: 'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/new',
        edit: '/companies/:id/edit',
        meta: {
            label: 'Companies',
            icon: <ShopOutlined />,
        }
    },
    {
        name: 'tasks',
        list: '/tasks',
        create: '/companies/new',
        edit: '/companies/:id/edit',
        meta: {
            label: 'Tasks',
            icon: <ProjectOutlined />,
        }
    }
]