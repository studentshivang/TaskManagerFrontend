import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Feed from './Feed/Feed';
import MyFeed from './MyFeed/MyFeed';
import SavedPosts from './SavedPosts/SavedPosts';
import TasksManagement from './TasksManagement/TasksManagement';
import TasksDashboard from './TasksDashboard/TaskDashboard';
import MyProfile from './MyProfile/MyProfile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',position:'fixed' }}
        style={{marginRight:'100px'}}
      >
        <Tab label="Feed" {...a11yProps(0)} />
        <Tab label="My Feed" {...a11yProps(1)} />
        <Tab label="Saved Posts" {...a11yProps(2)} />
        <Tab label="Task Management" {...a11yProps(3)} />
        <Tab label="Task Dashboard" {...a11yProps(4)} />
        <Tab label="My Profile" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className='tabspanel'>
        <Feed/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='tabspanel'>
        <MyFeed/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='tabspanel'>
        <SavedPosts/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className='tabspanel'>
        <TasksManagement/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className='tabspanel'>
        <TasksDashboard/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className='tabspanel'>
        <MyProfile/>
        </div>
      </TabPanel>
    </Box>
  );
}
