'use client';
import {
  BellOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  HomeOutlined,
  LineHeightOutlined,
  LoadingOutlined,
  PlusCircleOutlined,
  SignalFilled,
  TableOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout className="min-h-screen flex bg-gray-50">
      <Sider className="bg-dark-gradient text-white w-64 min-w-64 max-w-64 p-4 flex flex-col select-none">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Creative Tim</h1>
        </div>
        <Menu
          mode="vertical"
          theme="dark"
          defaultSelectedKeys={['1']}
          className="bg-transparent text-white flex-grow"
        >
          <Menu.Item key="1" icon={<HomeOutlined />} className="mb-2">
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<TableOutlined />} className="mb-2">
            Tables
          </Menu.Item>
          <Menu.Item key="3" icon={<CreditCardOutlined />} className="mb-2">
            Billing
          </Menu.Item>
          <Menu.Item key="4" icon={<SignalFilled />} className="mb-2">
            Virtual Reality
          </Menu.Item>
          <Menu.Item key="5" icon={<LineHeightOutlined />} className="mb-2">
            RTL
          </Menu.Item>
          <Menu.Item key="6" icon={<BellOutlined />} className="mb-4">
            Notifications
          </Menu.Item>
          <div className="border-t border-gray-700 my-4" />
          <div className="font-semibold text-gray-400 uppercase text-xs mb-2">
            Account Pages
          </div>
          <Menu.Item key="7" icon={<UserOutlined />} className="mb-2">
            Profile
          </Menu.Item>
          <Menu.Item key="8" icon={<LoadingOutlined />} className="mb-2">
            Sign In
          </Menu.Item>
          <Menu.Item key="9" icon={<PlusCircleOutlined />} className="mb-4">
            Sign Up
          </Menu.Item>
        </Menu>
        <div className="mt-auto">
          <div className="border border-gray-700 rounded-md p-3 mb-4">
            <div className="text-sm text-gray-400 mb-1">Documentation</div>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md py-2 w-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-700">
              <FileTextOutlined className="mr-2" /> Docs
            </button>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-md py-2 w-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600">
            Upgrade to pro
          </button>
        </div>
      </Sider>
      <Content className="flex-grow p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <p className="text-gray-500 text-sm mb-4">
            Check the sales, value and bounce rate by country.
          </p>
          {/* Content cards/widgets will go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">ToDay Money</div>
                <div className="bg-green-100 text-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                  {/* Icon */}
                </div>
              </div>
              <div className="text-2xl font-bold">$53k</div>
              <div className="text-green-500 text-sm">+55% <span className="text-gray-400">than last week</span></div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">ToDay Users</div>
                <div className="bg-blue-100 text-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                  {/* Icon */}
                </div>
              </div>
              <div className="text-2xl font-bold">2300</div>
              <div className="text-green-500 text-sm">+3% <span className="text-gray-400">than last month</span></div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">Ads Views</div>
                <div className="bg-red-100 text-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                  {/* Icon */}
                </div>
              </div>
              <div className="text-2xl font-bold">3,462</div>
              <div className="text-red-500 text-sm">-2% <span className="text-gray-400">than yesterday</span></div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">Sales</div>
                <div className="bg-green-100 text-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                  {/* Icon */}
                </div>
              </div>
              <div className="text-2xl font-bold">$103,430</div>
              <div className="text-green-500 text-sm">+5% <span className="text-gray-400">than yesterday</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-sm text-gray-600 mb-2">Website Views</div>
              {/* Chart */}
              <div className="h-24 bg-gray-100 rounded" />
              <div className="text-xs text-gray-500 mt-2">Last Campaign Performance</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-sm text-gray-600 mb-2">Daily Sales</div>
              {/* Chart */}
              <div className="h-24 bg-gray-100 rounded" />
              <div className="text-xs text-gray-500 mt-2">+15% increase in today sales</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-sm text-gray-600 mb-2">Completed Tasks</div>
              {/* Chart */}
              <div className="h-24 bg-gray-100 rounded" />
              <div className="text-xs text-gray-500 mt-2">Last Campaign Performance</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-sm text-gray-600 mb-2">Projects</div>
              <div className="text-lg font-semibold">30 done this month</div>
              {/* Progress bars or project list */}
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-sm text-gray-600 mb-2">Orders overview</div>
              <div className="text-lg font-semibold">24% this month</div>
              {/* Pie chart or order list */}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}