import React from 'react';

export default () => {
    return (
        <div class="main-sidebar">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <a class="wedding-name" href="index.html">Teguh & Dhaye</a>
          </div>
          <div class="sidebar-brand sidebar-brand-sm">
            <a class="wedding-name" href="\">T&D</a>
          </div>
          <ul class="sidebar-menu">
              <li class="menu-header">Info pernikahan</li>
              <li class="nav-item active">
                <a href="#" class="nav-link"><i class="fas fa-chart-pie"></i><span>Dashboard</span></a>
              </li>
              <li class="nav-item">
                <a href="profil-form.html" class="nav-link"><i class="far fa-user"></i><span>Profil</span></a>
              </li>
              <li class="menu-header">Tamu undangan</li>
              <li class="nav-item">
                <a href="data-tamu-undangan.html" class="nav-link"><i class="fas fa-columns"></i> <span>Data tamu undangan</span></a>
              </li>
            </ul>
        </aside>
      </div>
    );
};