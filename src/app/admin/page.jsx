import AdminDashboard from "@/components/dashboard/AdminDashboard";

export default function AdminPage() {
  return <AdminDashboard />;
}

export const metadata = {
  title: "Panel de Administración - Zahira",
  description: "Dashboard para gestionar confirmaciones de asistencia",
  robots: "noindex, nofollow", // Evita que Google indexe esta página
};
