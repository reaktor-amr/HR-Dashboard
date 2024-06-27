import {
  IconCalendar,
  IconChartBar,
  IconChevronDown,
  IconFlame,
  IconHelp,
  IconHome,
  IconSettings,
  IconShieldCheck,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav-top">
        <div className="brand">
          <div className="brand-logo"></div>
          <h3>MONJASA</h3>
        </div>
        <div className="nav-category">
          <h5>MAIN</h5>
          <div className="nav-option nav-active">
            <div className="active-badge"></div>
            <IconHome size={16} color="#575D63" />
            <a href="/">Home</a>
          </div>
          <div className="nav-option">
            <IconFlame size={16} color="#575D63" />
            <a href="/challenges">Challenges</a>
          </div>
          <div className="nav-option">
            <IconCalendar size={16} color="#575D63" />
            <a href="/event">Wellx events</a>
          </div>
          <div className="nav-option">
            <IconChartBar size={16} color="#575D63" />
            <a href="#">Employee surveys</a>
          </div>
        </div>
        <div className="nav-category">
          <h5>YOUR WELLX PLAN</h5>
          <div className="nav-option">
            <IconUsers size={16} color="#575D63" />
            <a href="/census-list">Census list</a>
          </div>
          <div className="nav-option">
            <IconShieldCheck size={16} color="#575D63" />
            <a href="/insurance-plan">Insurance plan</a>
          </div>
          <div className="nav-option">
            <IconSparkles size={16} color="#575D63" />
            <a href="#">Get help from AI</a>
          </div>
        </div>
      </div>
      <div className="nav-category">
        <div className="nav-option">
          <IconSettings size={16} color="#575D63" />
          <a href="#">Setting</a>
        </div>
        <div className="nav-option">
          <IconHelp size={16} color="#575D63" />
          <a href="#">Support</a>
        </div>
        <div className="profile">
          <div className="profile-avatar">
            <img src="" alt="" />
          </div>
          <div className="profile-data">
            <h5>Batzorig Ts.</h5>
            <p>batzorig@wellxai.com</p>
          </div>
          <IconChevronDown size={15} className="profile-icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
