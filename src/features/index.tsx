import Layout from "layout";
import React from "react";
import "../App.css";
import AdminPageRoute from "routers/AdminPageRoute";
function AdminPage() {
  return (
    <Layout>
      <AdminPageRoute />
    </Layout>
  );
}

export default AdminPage;
