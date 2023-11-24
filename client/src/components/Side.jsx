// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const Side = () => {
     // Side bar
    //  const { collapseSidebar } = useProSidebar();
  return (
    <div className="sidebar">
         <Sidebar style={{ height: "100vh" }}>
          <Menu>
            <MenuItem
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            >
              {" "}
              <h2>Menu</h2>
            </MenuItem>
            <Link to='/ringkasan-pasien'>
            <MenuItem>Ringkasan Pasien</MenuItem>
            </Link>
            <Link to='/monitor'>
            <MenuItem>Monitoring</MenuItem>
            </Link>
            <Link to='/riwayat-medis'>
            <MenuItem>Riwayat Medis</MenuItem>
            </Link>
            <Link to='/faktor-resiko'>
            <MenuItem>Faktor Resiko</MenuItem>
            </Link>
            <Link to='/prediksi-faktor'>
            <MenuItem>Faktor Resiko</MenuItem>
            </Link>
            <Link to='/riwayat-deteksi'>
            <MenuItem>Riwayat Deteksi</MenuItem>
            </Link>
            <Link to='/treatment'>
            <MenuItem>Treatment</MenuItem>
            </Link>
            <Link to='/rekomendasi'>
            <MenuItem>Rekomendasi</MenuItem>
            </Link>
          </Menu>
      </Sidebar>
    </div>
  );
};

export default Side;
