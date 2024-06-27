import { IconPlant2, IconTrophy } from "@tabler/icons-react";

function LeadBoard() {
  return (
    <div className="leadboard data-card">
      <div className="data-card-header">
        <div className="data-card-header-left">
          <IconTrophy
            className="data-card-header-icon"
            color="#575D63"
            size={14}
          />
          <p>Leaderboard</p>
        </div>
        <div className="data-card-header-button">
          <p>View All</p>
        </div>
      </div>
      <div className="item-wraper leader-item-wraper">
        <div className="item-left">
          <div className="sr-count first-alert">
            <p>1</p>
          </div>
          <div className="lead-avatar">
            <IconPlant2 size={20} className="leaderboard-item-icon" />
          </div>
          <div className="item-details">
            <p>January monthly challenge</p>
          </div>
        </div>
        <div className="item-link">
          <p>12,202 Step</p>
        </div>
      </div>
      <div className="item-wraper leader-item-wraper">
        <div className="item-left">
          <div className="sr-count second-alert">
            <p>2</p>
          </div>
          <div className="lead-avatar">
            <IconPlant2 size={20} className="leaderboard-item-icon" />
          </div>
          <div className="item-details">
            <p>January monthly challenge</p>
          </div>
        </div>
        <div className="item-link">
          <p>12,202 Step</p>
        </div>
      </div>
      <div className="item-wraper leader-item-wraper">
        <div className="item-left">
          <div className="sr-count third-alert">
            <p>3</p>
          </div>
          <div className="lead-avatar">
            <IconPlant2 size={20} className="leaderboard-item-icon" />
          </div>
          <div className="item-details">
            <p>January monthly challenge</p>
          </div>
        </div>
        <div className="item-link">
          <p>12,202 Step</p>
        </div>
      </div>
      <div className="item-wraper leader-item-wraper">
        <div className="item-left">
          <div className="sr-count">
            <p>4</p>
          </div>
          <div className="lead-avatar">
            <IconPlant2 size={20} className="leaderboard-item-icon" />
          </div>
          <div className="item-details">
            <p>January monthly challenge</p>
          </div>
        </div>
        <div className="item-link">
          <p>12,202 Step</p>
        </div>
      </div>
      <div className="item-wraper leader-item-wraper">
        <div className="item-left">
          <div className="sr-count">
            <p>5</p>
          </div>
          <div className="lead-avatar">
            <IconPlant2 size={20} className="leaderboard-item-icon" />
          </div>
          <div className="item-details">
            <p>January monthly challenge</p>
          </div>
        </div>
        <div className="item-link">
          <p>12,202 Step</p>
        </div>
      </div>
      <div className="item-wraper leader-item-wraper">
        <div className="item-left">
          <div className="sr-count">
            <p>6</p>
          </div>
          <div className="lead-avatar">
            <IconPlant2 size={20} className="leaderboard-item-icon" />
          </div>
          <div className="item-details">
            <p>January monthly challenge</p>
          </div>
        </div>
        <div className="item-link">
          <p>12,202 Step</p>
        </div>
      </div>
      <div className="item-wraper leader-item-wraper">
        <div className="item-left">
          <div className="sr-count">
            <p>7</p>
          </div>
          <div className="lead-avatar">
            <IconPlant2 size={20} className="leaderboard-item-icon" />
          </div>
          <div className="item-details">
            <p>January monthly challenge</p>
          </div>
        </div>
        <div className="item-link">
          <p>12,202 Step</p>
        </div>
      </div>
      <div className="item-wraper leader-item-wraper">
        <div className="item-left">
          <div className="sr-count">
            <p>8</p>
          </div>
          <div className="lead-avatar">
            <IconPlant2 size={20} className="leaderboard-item-icon" />
          </div>
          <div className="item-details">
            <p>January monthly challenge</p>
          </div>
        </div>
        <div className="item-link">
          <p>12,202 Step</p>
        </div>
      </div>
    </div>
  );
}

export default LeadBoard;
