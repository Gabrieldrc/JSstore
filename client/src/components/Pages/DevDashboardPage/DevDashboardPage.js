import React from 'react';
import './DevDashboardPage.css';

function DevDashboard() {
  return (
    <div className="dashboard">
      <div className="big_item box_shadow primary_color_bg">Graphic Sells</div>
      <a className="big_item box_shadow primary_color_bg">Apps</a>
      <a className="normal_item box_shadow primary_color_bg">Notifications</a>
      <a className="normal_item box_shadow primary_color_bg" href="/dev/apps/new_app">
        <div>
          <div className="icon_plus primary_color big_font">+</div>
          New App
        </div>
      </a>
    </div>
  );
}

export default DevDashboard;